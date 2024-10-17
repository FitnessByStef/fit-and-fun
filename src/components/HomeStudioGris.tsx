import React from 'react';
import StudioGris from './medias/batiment/Salle_StudioGris.jpg';

const HomeStudioGrisForm: React.FC = () => {
    return (
        <div className="aproposform">
            <h2 className="aproposformheader">💃 QUI SOMMES NOUS 💃</h2>

            {/* Section Features */}
            <section className="homepage-features">
                <div className="feature-card" id="coach">
                    <h3>Accueil</h3>
                    <img src={StudioGris} alt="StudioGris" className="banner-image" />
                </div>
                <div className="feature-card" id="commercial">
                    <h3>Le Studio Gris</h3>
                    <p>
                    Notre studio climatisé de 150m2, avec une hauteur sous plafond de 6 mètres, offre un cadre unique. Le plafond étoilé crée une ambiance idéale pour vos séances de stretching et de relaxation.
                    <br /><br />
                    A l'étage, un espace détente ainsi qu'un bar sont à votre disposition pour vous restaurer dans un environnement apaisant.
                    <br /><br />
                    Nous proposons également un grand parking gratuit, sécurisé et sous vidéo-surveillance, pour garantir votre tranquillité.
                    <br /><br />
                    Le tout à seulement 12 minutes au nord de Serres-Castet et à 2 minutes de la sortie d'autoroute de Thèze, pour un accès facile et rapide.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default HomeStudioGrisForm;