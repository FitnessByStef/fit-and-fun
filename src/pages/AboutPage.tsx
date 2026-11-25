import { Link } from 'react-router-dom';
import { coaches } from '../coaches';
import '../styles/about.css';

const team = [
  ...Object.values(coaches).map(coach => ({ ...coach, excerpt: coach.paragraphs[0] })),
  {
    name: 'Stéphane', role: 'Fitness', heading: 'Fit & Fun',
    image: '/medias/coachs/Stephane.jpg',
    excerpt: 'Stéphane enseigne les cours Fit & Fun, PowerPulse, Circuit athlétique et Cardio Boxing.',
    width: undefined, height: undefined,
    path: '/coachs/stephane',
  },
];

export default function AboutPage() {
  return <div className="studio-container">
    <section className="page-heading">
      <h1>Qui sommes-nous ?</h1>
      <p>À Thèze, Le Studio Gris réunit danse, disciplines aériennes et fitness dans un espace pensé pour bouger, s’exprimer et progresser.</p>
    </section>
    <section className="studio-section team-section">
      <h2>L’équipe du Studio Gris</h2>
      <div className="team-grid">
        {team.map(coach => <article key={coach.name} className="team-card">
          {coach.image && <img src={coach.image} width={coach.width} height={coach.height} alt={coach.name + ' – ' + coach.role} loading="lazy" />}
          <div className="team-card-copy">
            <h3>{coach.name}</h3>
            {coach.role && <p className="team-role">{coach.role}</p>}
            {coach.heading && <p><strong>{coach.heading}</strong></p>}
            <p>{coach.excerpt}</p>
            {coach.path && <Link className="secondary-button" to={coach.path} aria-label={'Découvrir le profil de ' + coach.name}>Découvrir son profil</Link>}
          </div>
        </article>)}
      </div>
    </section>
  </div>;
}
