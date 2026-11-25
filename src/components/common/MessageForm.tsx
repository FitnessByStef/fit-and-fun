import { FormEvent, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { emailLink, studio } from '../../studio';

const service = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const template = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const canSend = Boolean(service && template && publicKey);

export default function MessageForm({ quote = false }: { quote?: boolean }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const sending = useRef(false);
  const subject = quote ? 'Demande de devis – EVJF & Girls Night' : 'Contact – Le Studio Gris';
  const fallback = emailLink(subject);

  async function send(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const message = String(data.get('message') || '').trim();

    if (data.get('website') || !name || (!quote && !message)) {
      setStatus('error');
      return;
    }

    const details = [...data.entries()]
      .filter(([key, value]) => !['website', 'email', 'name', 'message'].includes(key) && String(value).trim())
      .map(([key, value]) => key + ' : ' + value);
    const body = [...details, message].filter(Boolean).join('\n');
    const email = String(data.get('email'));
    if (!service || !template || !publicKey) {
      const draft = ['Nom : ' + name, 'E-mail : ' + email, body].join('\n');
      window.location.assign(fallback + '&body=' + encodeURIComponent(draft));
      return;
    }

    sending.current = true;
    setStatus('sending');
    try {
      await emailjs.send(service, template, { name, email, subject, message: body }, publicKey);
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    } finally {
      sending.current = false;
    }
  }

  if (!canSend && !quote) {
    return <a className="primary-button" href={fallback}>Ouvrir ma messagerie</a>;
  }

  return <form className="message-form" onSubmit={send}>
    <div className="form-grid">
      <label>Nom et prénom<input name="name" autoComplete="name" maxLength={120} required /></label>
      <label>E-mail<input name="email" type="email" autoComplete="email" maxLength={254} required /></label>
      {quote && <>
        <label>Téléphone (facultatif)<input name="Téléphone" type="tel" autoComplete="tel" maxLength={30} /></label>
        <label>Type d’événement<select name="Événement" required><option value="">Choisir</option><option>EVJF</option><option>Anniversaire</option><option>Soirée entre amies</option><option>Autre</option></select></label>
        <label>Date souhaitée (facultatif)<input name="Date" type="date" /></label>
        <label>Nombre de participantes<input name="Participantes" type="number" min="1" step="1" required /></label>
        <label>Activité<select name="Activité"><option>À définir</option><option>Pole Dance</option><option>Cerceau aérien</option></select></label>
        <label>Option photo et vidéo<select name="Photo et vidéo"><option>À définir</option><option>Oui</option><option>Non</option></select></label>
      </>}
    </div>
    <label>{quote ? 'Message complémentaire (facultatif)' : 'Votre message'}<textarea name="message" rows={4} maxLength={2500} required={!quote} /></label>
    <div hidden aria-hidden="true"><label>Site web<input name="website" autoComplete="off" tabIndex={-1} /></label></div>
    <details className="form-privacy"><summary>Utilisation de vos données</summary>
      <p>Le Studio Gris traite les informations renseignées pour répondre à votre demande.
        {canSend ? ' L’envoi est assuré par EmailJS.' : ' Vous pourrez relire le brouillon et l’envoyer depuis votre messagerie.'}
        {' '}Pour exercer vos droits, contactez <a href={emailLink()}>{studio.email}</a>.</p>
    </details>
    <button className="primary-button" type="submit" disabled={status === 'sending'}>
      {status === 'sending' ? 'Envoi en cours…' : !canSend ? 'Ouvrir le brouillon dans ma messagerie' : quote ? 'Envoyer la demande de devis' : 'Envoyer le message'}
    </button>
    <div role="status">{status === 'sent' && 'Votre message a été transmis.'}</div>
    {status === 'error' && <p role="alert">Le message n’a pas été transmis. Vérifiez les champs ou <a href={fallback}>écrivez-nous par e-mail</a>.</p>}
  </form>;
}
