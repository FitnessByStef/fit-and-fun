import '../styles/course.css';

const CerceauAerienPage = () => {
  return (
    <div className="course-page">
      <div className="course-hero-wrap">
        <section
          className="course-hero"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(8,8,8,0.84) 0%, rgba(8,8,8,0.56) 42%, rgba(8,8,8,0.20) 100%),
              url('/medias/cours/Cerceau Aerien/CerceauAerien.jpeg')
            `,
            backgroundPosition: 'center 30%',
          }}
        >
          <div className="course-hero__content">
            <p className="overline">Danse & aérien</p>
            <h1>CERCEAU AÉRIEN</h1>
            <p>
              Une discipline artistique et aérienne pour gagner en grâce,
              en force, en souplesse et en confiance dans un univers unique.
            </p>
          </div>
        </section>
      </div>

      <section className="course-section">
        <h2>Le concept</h2>
        <p>
          Le cerceau aérien est une discipline qui mêle expression corporelle,
          élégance, gainage et mobilité. On y apprend à évoluer autour de l’agrès
          avec fluidité, contrôle et créativité.
        </p>
        <p>
          Chaque séance permet de développer la conscience du corps, la coordination,
          la souplesse et la tonicité, tout en découvrant le plaisir d’un travail
          aérien à la fois artistique et stimulant.
        </p>
        <p>
          Le cours s’adapte à la progression de chacun pour permettre de prendre
          confiance, de s’exprimer et de ressentir de vraies sensations aériennes
          dans un cadre sécurisé et bienveillant.
        </p>
      </section>

      <section className="course-section course-split">
        <div className="course-split__content">
          <h2>Pourquoi on aime ce cours</h2>
          <p>
            Le cerceau aérien offre une expérience différente, à la fois physique
            et artistique. C’est un cours qui aide à se renforcer, à gagner en aisance
            et à révéler une vraie présence corporelle.
          </p>

          <div className="course-benefits">
            <div>✨ Développe la grâce et l’élégance</div>
            <div>💪 Renforce le centre du corps</div>
            <div>🩰 Améliore la souplesse et la mobilité</div>
            <div>🎭 Favorise l’expression corporelle</div>
            <div>🧠 Renforce la coordination et le contrôle</div>
            <div>🌟 Fait gagner en confiance en soi</div>
          </div>
        </div>

        <div className="course-split__media">
          <img
            src="/medias/cours/Cerceau Aerien/CerceauAerien3.jpeg"
            alt="Cerceau aérien au Studio Gris"
          />
        </div>
      </section>

      <section className="course-section">
        <h2>L’expérience Studio Gris</h2>
        <p>
          Dans l’univers immersif du Studio Gris, le cerceau aérien prend une dimension
          encore plus forte. L’ambiance, l’espace et l’esthétique du lieu créent un cadre
          idéal pour progresser, se dépasser et vivre une expérience hors du quotidien.
        </p>
      </section>

      <section className="course-section course-split">
        <div className="course-split__media">
          <img
            src="/medias/cours/Cerceau Aerien/CerceauAerien5.jpeg"
            alt="Pratique du cerceau aérien au Studio Gris"
          />
        </div>

        <div className="course-split__content">
          <h2>Pour qui ?</h2>
          <p>
            Le cours s’adresse à celles et ceux qui veulent découvrir une discipline
            originale, esthétique et accessible. Que l’on cherche à se renforcer,
            à s’assouplir, à s’exprimer ou simplement à essayer quelque chose de nouveau,
            le cerceau aérien offre une pratique complète et valorisante.
          </p>
          <p>
            C’est aussi un excellent choix pour sortir de sa routine sportive et vivre
            une expérience plus artistique, plus aérienne et plus inspirante.
          </p>
        </div>
      </section>

      <section className="course-cta">
        <h2>Prêt à découvrir le cerceau aérien ?</h2>
        <p>
          Viens essayer une discipline aérienne élégante, forte et captivante au Studio Gris.
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

export default CerceauAerienPage;