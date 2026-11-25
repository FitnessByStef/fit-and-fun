import { useSearchParams } from 'react-router-dom';
import MessageForm from '../components/common/MessageForm';
import SocialLinks from '../components/common/SocialLinks';
import { emailLink, studio } from '../studio';
import '../styles/contact.css';

export default function ContactPage() {
  const [params] = useSearchParams();
  const quote = params.get('motif') === 'evjf';

  return <div className="studio-container">
    <section className="page-heading">
      <h1>{quote ? 'Devis EVJF & Girls Night' : 'Contactez le Studio Gris'}</h1>
      <p>{quote ? 'Parlez-nous de l’événement que vous souhaitez organiser à Thèze.' : 'Une question sur les cours, les réservations ou une séance d’essai ?'}</p>
    </section>
    <div className="contact-columns studio-section">
      <section className="contact-card" id="message">
        <h2>{quote ? 'Votre demande de devis' : 'Écrivez-nous'}</h2>
        <MessageForm key={String(quote)} quote={quote} />
      </section>
      <section className="contact-card">
        <h2>Le Studio Gris</h2>
        <p>{studio.address}<br />{studio.city}</p>
        <p><a href={studio.tel}>{studio.phone}</a><br /><a href={emailLink()}>{studio.email}</a></p>
        <SocialLinks />
        <p><a className="secondary-button" href={studio.booking} target="_blank" rel="noreferrer">Réserver sur Sportigo</a></p>
      </section>
    </div>
    <section className="studio-section contact-location">
      <h2>Nous trouver</h2>
      <iframe title="Carte du Studio Gris à Thèze" src={'https://www.google.com/maps?q=' + encodeURIComponent(studio.address + ' ' + studio.city) + '&output=embed'} loading="lazy" />
    </section>
  </div>;
}
