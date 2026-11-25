import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCalendarDays, faTicket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { eventImage, fitnessUniverseImage, universePaths } from '../studio';
import '../styles/home.css';

const media = '/medias/accueil/';

const gateways = [
  { title: 'Danse & Aérien', path: universePaths.aerial, image: '/medias/cours/Cerceau Aerien/CerceauAerien4.jpeg', width: 1200, height: 1600, style: 'aerial' },
  { title: 'Fitness', path: universePaths.fitness, image: fitnessUniverseImage, width: 860, height: 500, style: 'fitness' },
  { title: 'EVJF & Girls Night', path: '/evjf-girls-night', image: eventImage, width: 1284, height: 708, style: 'event' },
];

function UniverseCard({ gateway }: { gateway: typeof gateways[number] }) {
  return <Link to={gateway.path} className={'universe-card universe-card--' + gateway.style} aria-label={gateway.title}>
    <img src={gateway.image} width={gateway.width} height={gateway.height} alt="" />
    {gateway.style !== 'event' && <span className="universe-card-label">{gateway.title}<FontAwesomeIcon icon={faArrowRight} /></span>}
  </Link>;
}

export default function HomePage() {
  return <div className="home-page">
    <section className="immersive-hero">
      <div className="hero-art">
        <img className="hero-room" src={media + 'salle.webp'} width="1050" height="1037" alt="" loading="eager" />
        <img className="hero-dust" src={media + 'brume-fuchsia.webp'} width="1000" height="430" alt="" />
        <img className="hero-aerial" src={media + 'cerceau-pose-sophie.webp'} width="480" height="870"
          alt="Une pratiquante au cerceau aérien dans la salle du Studio Gris" loading="eager" />
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
      {gateways.map(gateway => <UniverseCard key={gateway.path} gateway={gateway} />)}
    </nav>
  </div>;
}
