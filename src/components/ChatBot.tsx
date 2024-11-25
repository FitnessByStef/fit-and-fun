import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faComments } from '@fortawesome/free-solid-svg-icons'; // Icones de FontAwesome
import emailjs from 'emailjs-com'; // Nécessite l'installation d'EmailJS

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false); // État pour ouvrir/fermer la fenêtre de chat
    const [message, setMessage] = useState(''); // Message de l'utilisateur
    const [email, setEmail] = useState(''); // Email de l'utilisateur

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const sendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (message && email) {
            const serviceID = 'service_lafuente.sante';
            const templateID = 'template_ri2ova2';
            const userID = 'gJWMor4mNkpxe8-y_'; // Récupéré depuis EmailJS

            emailjs.send(serviceID, templateID, { message, email }, userID)
                .then(() => {
                    alert('Message envoyé avec succès !');
                    setMessage(''); // Réinitialiser les champs
                    setEmail('');
                    setIsOpen(false); // Fermer la fenêtre après envoi
                })
                .catch(err => console.error('Erreur lors de l\'envoi du message:', err));
        } else {
            alert('Veuillez remplir tous les champs.');
        }
    };

    return (
        <div className="chatbot-container">
            {/* Emoji style WhatsApp en bas à droite */}
            <div className="chat-icon" onClick={toggleChat}>
                <FontAwesomeIcon icon={faComments} size="2x" color="#ff007f" />
            </div>

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
                        <button type="submit">
                            Envoyer <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Chatbot;