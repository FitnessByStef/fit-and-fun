import '../styles/course.css';

const CerceauEnfantPage = () => {
  return (
    <div className="course-page">
      <div className="course-hero-wrap">
        <section
          className="course-hero"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(8,8,8,0.86) 0%, rgba(8,8,8,0.58) 48%, rgba(8,8,8,0.22) 100%),
              url('/medias/cours/Cerceau enfant/CerceauEnfant5.jpeg')
            `,
            backgroundPosition: 'center 52%'
          }}
        >
          <div className="course-hero__content">
            <p className="overline">Danse & aérien enfant</p>
            <h1>CERCEAU ENFANT</h1>
            <p>
              Une activité aérienne ludique et artistique pour développer motricité,
              confiance, coordination et plaisir de bouger.
            </p>
          </div>
        </section>
      </div>

      <section className="course-section">
        <h2>Le concept</h2>
        <p>
          Le cerceau aérien enfant permet aux plus jeunes de découvrir une discipline
          originale, ludique et expressive, dans un cadre sécurisé et adapté à leur âge.
        </p>
        <p>
          Les séances mêlent jeux, mobilité, coordination, équilibre et premières figures
          autour du cerceau. L’objectif est de progresser tout en gardant le plaisir,
          l’imaginaire et la confiance au centre de la pratique.
        </p>
        <p>
          Les enfants apprennent à mieux connaître leur corps, à se concentrer, à oser
          essayer, et à gagner petit à petit en autonomie.
        </p>
      </section>

      <section className="course-section course-split">
        <div className="course-split__content">
          <h2>Pourquoi les enfants adorent</h2>
          <p>
            Le cerceau aérien donne aux enfants une sensation unique : celle de grimper,
            tourner, se suspendre et créer des formes dans les airs. C’est une activité
            à la fois sportive, créative et très valorisante.
          </p>

          <div className="course-benefits">
            <div>🤸 Développe la motricité</div>
            <div>🧠 Améliore coordination et concentration</div>
            <div>🌟 Renforce la confiance en soi</div>
            <div>🩰 Travaille souplesse et posture</div>
            <div>🎨 Encourage l’expression corporelle</div>
            <div>😊 Activité ludique et sécurisée</div>
          </div>
        </div>

        <div className="course-split__media">
          <img
            src="/medias/cours/Cerceau enfant/CerceauEnfant2.jpeg"
            alt="Cours de cerceau aérien enfant au Studio Gris"
          />
        </div>
      </section>

      <section className="course-section">
        <h2>Un cadre rassurant pour les parents</h2>
        <p>
          Les exercices sont proposés progressivement, avec une attention portée à la
          sécurité, à l’écoute et au rythme de chaque enfant. Le but n’est pas de forcer,
          mais de permettre à chacun d’oser, de découvrir et de progresser avec plaisir.
        </p>
      </section>

      <section className="course-section course-split">
        <div className="course-split__media">
          <img
            src="/medias/cours/Cerceau enfant/CerceauEnfant4.jpeg"
            alt="Échauffement enfant au Studio Gris"
          />
        </div>

        <div className="course-split__content">
          <h2>Pour quel enfant ?</h2>
          <p>
            Ce cours est idéal pour les enfants qui aiment bouger, grimper, danser,
            explorer ou simplement essayer une activité différente.
          </p>
          <p>
            Il convient aussi aux enfants plus réservés, car le travail se fait dans une
            ambiance bienveillante, où chaque progrès est encouragé.
          </p>
        </div>
      </section>

      <section className="course-cta">
        <h2>Envie de faire découvrir le cerceau à votre enfant ?</h2>
        <p>
          Contactez le Studio Gris pour connaître les créneaux, les âges concernés et
          réserver une séance d’essai.
        </p>
        <a
          href="https://www.instagram.com/le_studiogris/"
          target="_blank"
          rel="noreferrer"
          className="primary-button"
        >
          Réserver une séance
        </a>
      </section>
    </div>
  );
};

export default CerceauEnfantPage;