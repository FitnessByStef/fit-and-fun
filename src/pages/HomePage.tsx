import '../styles/home.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero-placeholder">
        <div
          className="hero-placeholder__content"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(8,8,8,0.82) 0%, rgba(8,8,8,0.56) 42%, rgba(8,8,8,0.18) 100%),
              url('/medias/studio/Salle_StudioGris.jpg')
            `,
          }}
        >
          <p className="overline">Studio de danse & fitness</p>

          <h1 className="hero-title">Le Studio Gris</h1>

          <h2 className="hero-subtitle">Un lieu unique pour bouger, respirer et se retrouver</h2>

          <div className="hero-text">
            <p>
              Notre studio climatisé de 150m², avec 6 mètres de hauteur sous plafond,
              offre un cadre unique. Le plafond étoilé crée une ambiance idéale pour les
              séances de stretching et de relaxation.
            </p>

            <p>
              À l’étage, un espace détente ainsi qu’un bar sont à votre disposition dans
              un environnement apaisant.
            </p>

            <p>
              Grand parking gratuit, sécurisé et sous vidéo-surveillance, à seulement
              12 minutes au nord de Serres-Castet et 2 minutes de la sortie d’autoroute
              de Thèze.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;