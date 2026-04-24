import '../styles/planning.css';

const reservationUrl = 'https://studio-gris.sportigo.fr/reservation/';

const planning = [
  {
    day: 'Lundi',
    sessions: [
      { time: '18:15 - 19:00', title: 'Stretching', type: 'Bien-être' },
      { time: '19:00 - 20:00', title: 'Pole Dance', type: 'Initiation' },
      { time: '20:00 - 21:00', title: 'Cerceau aérien', type: 'Adulte' },
    ],
  },
  {
    day: 'Mardi',
    sessions: [
      { time: '18:15 - 19:00', title: 'Fit & Fun Pilate', type: 'Flow Pilates' },
      { time: '19:00 - 19:45', title: 'Fit & Fun Powerpulse', type: 'Renfo musique' },
    ],
  },
  {
    day: 'Mercredi',
    sessions: [
      { time: '18:30 - 19:15', title: 'Fit & Fun Athletic', type: 'Cardio explosif' },
      { time: '19:30 - 20:30', title: 'Pole Dance', type: 'Débutant +' },
    ],
  },
  {
    day: 'Jeudi',
    sessions: [
      { time: '18:00 - 19:00', title: 'Open Aérien', type: 'Entraînement libre' },
      { time: '19:00 - 19:45', title: 'Fit & Fun Cardio Boxing', type: 'Défouloir cardio' },
      { time: '20:00 - 21:00', title: 'Heels', type: 'Adulte' },
    ],
  },
  {
    day: 'Vendredi',
    sessions: [
      { time: '19:00 - 20:00', title: 'Pole Dance', type: 'Cours' },
    ],
  },
  {
    day: 'Samedi',
    sessions: [
      { time: '10:00 - 11:00', title: 'Danses aériennes', type: 'Enfant' },
      { time: '11:00 - 12:00', title: 'Danses aériennes', type: 'Enfant' },
      { time: '12:00 - 13:00', title: 'Open Compétition Défi Danse', type: 'Training' },
      { time: '13:00 - 14:00', title: 'Open Aérien', type: 'Libre' },
    ],
  },
];

const PlanningPage = () => {
  return (
    <div className="planning-page">
      <section className="planning-hero">
        <p className="overline">Planning & réservation</p>
        <h1>Réserve ta séance au Studio Gris</h1>
        <p>
          Danse, aérien, fitness, bien-être : retrouve les créneaux de la semaine
          et réserve directement ta place en ligne.
        </p>

        <a
          href={reservationUrl}
          target="_blank"
          rel="noreferrer"
          className="primary-button"
        >
          Réserver sur Sportigo
        </a>
      </section>

      <section className="planning-section">
        <div className="planning-heading">
          <h2>Planning de la semaine</h2>
          <p>
            Les créneaux peuvent évoluer. La réservation officielle se fait sur Sportigo.
          </p>
        </div>

        <div className="planning-grid">
          {planning.map((day) => (
            <article key={day.day} className="planning-day">
              <h3>{day.day}</h3>

              <div className="planning-sessions">
                {day.sessions.map((session) => (
                  <a
                    key={`${day.day}-${session.time}-${session.title}`}
                    href={reservationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="planning-card"
                  >
                    <span className="planning-time">{session.time}</span>
                    <strong>{session.title}</strong>
                    <span className="planning-type">{session.type}</span>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PlanningPage;