import { Link } from 'react-router-dom';
import { courseOffersPath } from '../../offers';
import { days, Discipline, formatTime, sessions } from '../../studio';

export default function CourseSchedule({ course }: { course: Discipline }) {
  return <section className="studio-container course-schedule">
    <h2>Les créneaux de la semaine</h2>
    <ul>{sessions.filter(session => session.course === course).map(session => <li key={session.day}>
      <strong>{days[session.day]}</strong> · {formatTime(session.start)} – {formatTime(session.end)} · {session.detail}
    </li>)}</ul>
    <div className="button-row"><Link className="primary-button" to="/planning">Voir le planning complet</Link><Link className="secondary-button" to={courseOffersPath(course)}>Voir les offres</Link></div>
  </section>;
}
