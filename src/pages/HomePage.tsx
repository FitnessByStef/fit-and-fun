import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCalendarDays, faTicket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { featuredActivities, homeStudioImage } from '../studio';
import '../styles/home.css';

function UniverseCard({ gateway }: { gateway: typeof featuredActivities[number] }) {
  return <Link to={gateway.path} className={'universe-card universe-card--' + gateway.style} aria-label={gateway.title}>
    <img src={gateway.image} width={gateway.width} height={gateway.height} alt="" />
    {gateway.style !== 'event' && <span className="universe-card-label">{gateway.title}<FontAwesomeIcon icon={faArrowRight} /></span>}
  </Link>;
}

export default function HomePage() {
  return <div className="home-page">
    <section className="immersive-hero">
      <div className="hero-art">
        <img className="hero-room" src={homeStudioImage} width="1200" height="1600" alt="La salle du Studio Gris, avec sa mezzanine et son plafond peint" loading="eager" />
        <img className="hero-dust" src="/medias/accueil/brume-fuchsia.webp" width="1000" height="430" alt="" />
      </div>
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-disciplines">Danse <span>·</span> Aérien <span>·</span> Fitness</p>
          <h1>Le Studio <em>Gris</em></h1>
          <p className="hero-tagline">Prenez de la hauteur, dansez et entraînez-vous à votre rythme dans un studio chaleureux à Thèze.</p>
          <div className="button-row">
            <Link className="primary-button" to="/planning"><FontAwesomeIcon icon={faCalendarDays} /> Voir le planning</Link>
            <Link className="secondary-button" to="/offers"><FontAwesomeIcon icon={faTicket} /> Découvrir les offres</Link>
          </div>
        </div>
      </div>
    </section>
    <nav className="home-universes" aria-label="Les activités du Studio Gris">
      {featuredActivities.map(gateway => <UniverseCard key={gateway.path} gateway={gateway} />)}
    </nav>
  </div>;
}
