import '../styles/course.css';

const HeelsPage = () => {
  return (
    <div className="course-page">
      <div className="course-hero-wrap">
        <section
          className="course-hero"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(8,8,8,0.86) 0%, rgba(8,8,8,0.58) 48%, rgba(8,8,8,0.22) 100%),
              url('/medias/cours/Heels/Heels3.jpg')
            `,
            backgroundPosition: 'center 90%',
          }}
        >
          <div className="course-hero__content">
            <p className="overline">Danse</p>
            <h1>HEELS</h1>
            <p>
              Un cours pour travailler l’attitude, la féminité, la confiance,
              la posture et l’expression à travers une danse élégante et assumée.
            </p>
          </div>
        </section>
      </div>

      <section className="course-section">
        <h2>Le concept</h2>
        <p>
          Le Heels est une danse expressive qui mêle élégance, attitude, musicalité
          et confiance en soi. On y apprend à bouger avec précision, à marcher,
          à poser son corps et à assumer pleinement sa présence.
        </p>
        <p>
          Les séances travaillent la posture, les lignes, la coordination, les transitions
          et l’interprétation. L’objectif n’est pas seulement d’apprendre une chorégraphie,
          mais de se sentir plus libre, plus forte et plus à l’aise dans son corps.
        </p>
        <p>
          Le cours se déroule dans une ambiance bienveillante, progressive et motivante,
          où chacune peut avancer à son rythme.
        </p>
      </section>

      <section className="course-section course-split">
        <div className="course-split__content">
          <h2>Pourquoi on aime ce cours</h2>
          <p>
            Le Heels permet de développer une vraie présence corporelle. C’est un cours
            qui aide à prendre confiance, à travailler sa posture et à révéler son style,
            sans jugement et avec beaucoup d’énergie.
          </p>

          <div className="course-benefits">
            <div>👠 Travaille l’attitude et la posture</div>
            <div>✨ Développe la confiance en soi</div>
            <div>🎭 Favorise l’expression corporelle</div>
            <div>🩰 Améliore coordination et fluidité</div>
            <div>🔥 Renforce jambes, gainage et maintien</div>
            <div>🌟 Aide à assumer son style</div>
          </div>
        </div>

        <div className="course-split__media">
          <img
            src="/medias/cours/Heels/Heels1.jpg"
            alt="Cours de Heels au Studio Gris"
          />
        </div>
      </section>

      <section className="course-section">
        <h2>L’expérience Studio Gris</h2>
        <p>
          Dans l’ambiance moderne et intimiste du Studio Gris, le Heels devient un vrai
          moment pour se reconnecter à soi, se libérer, progresser et danser avec
          assurance.
        </p>
      </section>

      <section className="course-section course-split">
        <div className="course-split__media">
          <img
            src="/medias/cours/Heels/Heels2.jpg"
            alt="Danse Heels au Studio Gris"
          />
        </div>

        <div className="course-split__content">
          <h2>Pour qui ?</h2>
          <p>
            Le cours s’adresse aux personnes qui veulent danser, gagner en confiance,
            travailler leur féminité, leur posture et leur expression.
          </p>
          <p>
            Il n’est pas nécessaire d’avoir un niveau avancé : l’important est d’oser,
            d’apprendre progressivement et de se laisser porter par la musique.
          </p>
        </div>
      </section>

      <section className="course-cta">
        <h2>Prête à essayer le Heels ?</h2>
        <p>
          Viens découvrir une danse élégante, puissante et libératrice au Studio Gris.
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

export default HeelsPage;