import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../../styles/chatbot.css';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim() || !email.trim()) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    emailjs
      .send(
        'service_lafuente.sante',
        'template_ri2ova2',
        { message, email },
        'gJWMor4mNkpxe8-y_'
      )
      .then(() => {
        alert('Message envoyé avec succès !');
        setMessage('');
        setEmail('');
        setIsOpen(false);
      })
      .catch(() => {
        alert("Erreur lors de l'envoi du message.");
      });
  };

  return (
    <div className="chatbot-container">
      <button
        className="chat-icon"
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Ouvrir le chat"
      >
        💬
      </button>

      {isOpen && (
        <div className="chat-window">
          <form onSubmit={sendMessage}>
            <h4>Envoyez-nous un message</h4>

            <input
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <textarea
              placeholder="Votre message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button type="submit">Envoyer</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;