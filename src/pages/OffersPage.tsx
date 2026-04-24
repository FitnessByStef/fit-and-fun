import '../styles/offers.css';

const offersUrl = 'https://studio-gris.sportigo.fr/offers/';

const offers = [
  {
    category: 'Fitness',
    items: [
      { title: 'Fit&Fun - Avec engagement', detail: 'Engagement 6 mois', price: '38€ / mois' },
      { title: 'Fit&Fun - Sans engagement', detail: 'Sans engagement', price: '44€ / mois' },
      { title: 'Carte 5 séances Fit&Fun', detail: '5 séances utilisables 2 mois', price: '55€' },
    ],
  },
  {
    category: 'Danse & aérien',
    items: [
      { title: 'Abonnement Essentiel', detail: '4 cours de danse, pole ou cerceau / mois', price: '52€ / mois' },
      { title: 'Abonnement Envol', detail: '6 cours d’aérien + 2 opens / mois', price: '60€ / mois' },
      { title: 'Abonnement Éclat', detail: '8 séances / mois + 4 opens inclus', price: '85€ / mois' },
      { title: 'Abonnement Illimité', detail: 'Accès à tous les cours + opens illimités', price: '125€ / mois' },
    ],
  },
  {
    category: 'Cartes & unité',
    items: [
      { title: 'Cours à l’unité', detail: 'Accès à une séance', price: '18€' },
      { title: 'Carte 5 séances', detail: '5 séances utilisables 2 mois', price: '75€' },
      { title: 'Carte 10 séances + 1 offert', detail: '10 séances + 1 cours offert', price: '130€' },
      { title: 'Séance d’essai', detail: 'Découverte du studio', price: '10€' },
    ],
  },
  {
    category: 'Enfants',
    items: [
      { title: 'Danse enfant - 4 séances', detail: '4 séances par mois', price: '35€ / mois' },
      { title: 'Aérien enfant', detail: '2 séances par mois', price: '22€ / mois' },
      { title: 'Cours enfant à l’unité', detail: 'Cours à l’unité', price: '14€' },
    ],
  },
  {
    category: 'Autres',
    items: [
      { title: 'Consultation naturopathie', detail: 'Consultation individuelle', price: '60€' },
      { title: 'Fédération Française de Danse', detail: 'Adhésion 2025', price: '24€' },
    ],
  },
];

const OffersPage = () => {
  return (
    <div className="offers-page">
      <section className="offers-hero">
        <p className="overline">Tarifs & abonnements</p>
        <h1>Nos offres</h1>
        <p>
          Choisissez la formule qui correspond à votre rythme : fitness, danse,
          aérien, cartes de séances ou abonnements mensuels.
        </p>
        <a href={offersUrl} target="_blank" rel="noreferrer" className="primary-button">
          Voir les offres sur Sportigo
        </a>
      </section>

      <section className="offers-section">
        {offers.map((group) => (
          <div key={group.category} className="offers-group">
            <h2>{group.category}</h2>

            <div className="offers-grid">
              {group.items.map((offer) => (
                <a
                  key={offer.title}
                  href={offersUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="offer-card"
                >
                  <div>
                    <h3>{offer.title}</h3>
                    <p>{offer.detail}</p>
                  </div>

                  <strong>{offer.price}</strong>
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default OffersPage;