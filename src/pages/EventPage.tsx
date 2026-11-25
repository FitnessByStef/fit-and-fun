import { Link } from 'react-router-dom';
import { coursePath, disciplines, eventImage, eventImageAlt } from '../studio';

export default function EventPage() {
  return <div className="studio-container event-page">
    <section className="event-hero">
      <Link to="/evjf-girls-night/#devis" aria-label="Consulter le tarif et demander un devis">
        <img src={eventImage} width="1284" height="708" alt={eventImageAlt} loading="eager" />
      </Link>
      <div className="page-heading">
        <h1>EVJF & Girls Night</h1>
        <h2>Une expérience originale entre filles !</h2>
        <p>Un enterrement de vie de jeune fille (EVJF), un anniversaire ou simplement une envie de partager un moment unique entre copines ?</p>
        <p>Découvrez la Pole Dance ou le Cerceau Aérien lors d’une expérience privatisée, placée sous le signe du rire, de la complicité et de la bonne humeur !</p>
        <p>Aucune expérience nécessaire, juste l’envie de s’amuser et de se surprendre.</p>
      </div>
    </section>
    <section className="studio-section">
      <h2>Deux activités au choix</h2>
      <div className="event-activities">
        <article className="event-activity event-activity--pole">
          <img src={disciplines.pole.image} alt="" loading="lazy" />
          <div><h3><Link to={coursePath(disciplines.pole.slug)}>Pole Dance</Link></h3><p>Une expérience fun et féminine pour découvrir la pole dance, relever de nouveaux défis et partager de beaux moments entre amies.</p></div>
        </article>
        <article className="event-activity event-activity--cerceau">
          <img src={disciplines.cerceau.image} alt="" loading="lazy" />
          <div><h3><Link to={coursePath(disciplines.cerceau.slug)}>Cerceau aérien</Link></h3><p>Prenez de la hauteur ! Découvrez une discipline aérienne originale, mêlant découverte, sensations et complicité.</p></div>
        </article>
      </div>
    </section>
    <div className="event-activities studio-section">
      <section className="event-panel"><h2>Prolongez la magie !</h2>
        <p>Immortalisez votre événement avec notre option photo & vidéo souvenir : des images de votre expérience et un film personnalisé, réalisé et transmis après votre événement.</p>
      </section>
      <section className="event-panel event-price" id="devis">
        <h2>À partir de 25 € / personne*</h2>
        <p>Prêtes à vivre une expérience inoubliable ?</p>
        <Link className="primary-button" to="/contact?motif=evjf#message">Demandez votre devis personnalisé</Link>
        <small>* Tarif selon le nombre de participantes et la formule choisie.</small>
      </section>
    </div>
  </div>;
}
