import '../styles/faq.css';

const faqs = [
  {
    question: 'Où se situe votre studio de danse à Thèze ?',
    answer:
      'Notre studio de danse et de sport est situé à Thèze, dans les Pyrénées-Atlantiques (64), à deux pas de Pau. Nous accueillons des élèves venant de Thèze et des communes voisines dans un espace dédié au mouvement, à la danse et au bien-être.',
  },
  {
    question: 'Quels cours propose Le Studio Gris ?',
    answer:
      'Le Studio Gris propose Pole Dance, Cerceau aérien, Heels, Stretching, Fitness, Powerpulse, Cardio Boxing, Athletic, Flow Pilates et des cours adaptés aux enfants.',
  },
  {
    question: 'Les cours sont-ils accessibles aux débutants ?',
    answer:
      'Oui. Tous nos cours de danse et de sport sont accessibles aux débutants. Aucune expérience préalable n’est nécessaire. Les enseignants adaptent les séances au niveau de chacun.',
  },
  {
    question: 'Proposez-vous des cours pour les enfants ?',
    answer:
      'Oui. Le studio propose également des cours pour enfants à partir de 3 ans, notamment en cerceau aérien et dans certaines disciplines adaptées, selon les créneaux.',
  },
  {
    question: 'Puis-je faire un cours d’essai ?',
    answer:
      'Oui. Il est possible de réserver un cours d’essai dans notre studio à Thèze afin de découvrir l’ambiance, les disciplines et l’accompagnement proposé.',
  },
  {
    question: 'Faut-il être sportif pour s’inscrire ?',
    answer:
      'Non. Nos cours s’adressent aussi bien aux personnes en reprise d’activité qu’aux pratiquants plus confirmés. L’objectif est d’évoluer à son rythme, dans un cadre bienveillant.',
  },
  {
    question: 'Les cours sont-ils réservés aux femmes ?',
    answer:
      'La majorité de nos cours est orientée vers un public féminin, notamment pour la Pole Dance, le Heels et le Cerceau aérien. Certains cours de fitness et de renforcement musculaire sont ouverts à tous selon les créneaux.',
  },
  {
    question: 'Quel est l’objectif de votre studio à Thèze ?',
    answer:
      'Notre studio a pour objectif de proposer un espace de danse, de sport et de bien-être, où le mouvement devient un outil de confiance, d’expression et d’équilibre entre le corps et l’esprit.',
  },
  {
    question: 'Comment s’inscrire aux cours ?',
    answer:
      'L’inscription se fait lors d’un cours d’essai, via l’application du studio Sportigo, ou en contactant directement le studio par message ou téléphone.',
  },
  {
    question: 'Pourquoi choisir votre studio de danse à Thèze ?',
    answer:
      'Le Studio Gris se distingue par un accompagnement personnalisé, des cours en petits groupes, une approche bienveillante et professionnelle, ainsi qu’une offre variée de danse, fitness et bien-être.',
  },
];

const FaqPage = () => {
  return (
    <div className="faq-page">
      <section className="faq-hero">
        <p className="overline">Questions fréquentes</p>
        <h1>FAQ</h1>
        <p>
          Retrouvez les réponses aux questions les plus fréquentes sur les cours,
          les inscriptions et le fonctionnement du Studio Gris.
        </p>
      </section>

      <section className="faq-section">
        {faqs.map((faq) => (
          <article key={faq.question} className="faq-card">
            <h2>{faq.question}</h2>
            <p>{faq.answer}</p>
          </article>
        ))}
      </section>
    </div>
  );
};

export default FaqPage;