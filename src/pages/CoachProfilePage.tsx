import { Link } from 'react-router-dom';
import { coaches } from '../coaches';
import { coursePath, disciplines } from '../studio';
import '../styles/coach.css';

export default function CoachProfilePage({ coachId }: { coachId: 'sarah' | 'sophie' }) {
  const coach = coaches[coachId];

  return <div className="studio-container coach-profile">
    <Link className="coach-back" to="/about">Retour à l’équipe</Link>
    <section className="coach-profile-grid">
      <img src={coach.image} width={coach.width} height={coach.height} alt={coach.name + ' – ' + coach.role} />
      <div>
        <h1>{coach.name}</h1>
        <p className="coach-profile-role">{coach.role}</p>
        <h2>{coach.heading}</h2>
        {coach.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        <h2>Ses disciplines</h2>
        <div className="button-row">
          {coach.courses.map(key => <Link key={key} className="secondary-button" to={coursePath(disciplines[key].slug)}>{disciplines[key].name}</Link>)}
        </div>
      </div>
    </section>
  </div>;
}
