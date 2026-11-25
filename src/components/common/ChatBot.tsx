import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import MessageForm from './MessageForm';
import '../../styles/chatbot.css';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return <div className="chatbot-container" onKeyDown={event => {
    if (event.key === 'Escape') {
      setIsOpen(false);
      document.getElementById('chat-toggle')?.focus();
    }
  }}>
    <button id="chat-toggle" className="chat-icon" type="button" aria-expanded={isOpen}
      aria-controls="quick-message" onClick={() => setIsOpen(!isOpen)}
      aria-label={isOpen ? 'Fermer le contact rapide' : 'Ouvrir le contact rapide'}>
      <FontAwesomeIcon icon={faMessage} />
    </button>
    <section hidden={!isOpen} className="chat-window" id="quick-message">
      <h2>Écrire au studio</h2>
      <MessageForm />
    </section>
  </div>;
}
