import { Link } from 'react-router-dom';
import { coursePath, days, disciplines, formatTime, sessions, studio } from '../studio';
import '../styles/planning.css';

export default function PlanningPage() {
  return <div className="studio-container">
    <section className="page-heading">
      <h1>Planning des cours</h1>
      <p>Les horaires de la semaine au Studio Gris à Thèze.</p>
      <a className="primary-button" href={studio.booking + 'reservation/'} target="_blank" rel="noreferrer">Réserver sur Sportigo</a>
    </section>
    <div className="planning-week">
      {days.map((day, index) => {
        const classes = sessions.filter(session => session.day === index);
        return <section className="planning-day" key={day}>
          <h2>{day}</h2>
          {classes.length ? <ul>{classes.map(session => {
            const course = disciplines[session.course];
            return <li key={session.start} className={course.group === 'Fitness' ? 'session fitness-session' : 'session'}>
              <span className="session-time"><time>{formatTime(session.start)}</time> – <time>{formatTime(session.end)}</time></span>
              <Link to={coursePath(course.slug)}>{course.name}</Link>
              <span>{session.detail}</span>
            </li>;
          })}</ul> : <p>Aucun cours</p>}
        </section>;
      })}
    </div>
  </div>;
}
