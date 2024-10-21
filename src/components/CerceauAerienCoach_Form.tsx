import React from 'react';
import CoachMaylisCerceau from './medias/coachs/MaylisCerceau.jpg';

const CerceauAerienCoach_Form: React.FC = () => {
    return (
        <div className="cerceauaerienform">
            <h2 className="cerceauaerienformheader">💃 CERCEAU AERIEN 💃</h2>

            {/* Section Features */}
            <section className="homepage-features">
                <div className="feature-card" id="coach">
                    <h3>Coach sportif : Maylis</h3>
                    <img src={CoachMaylisCerceau} alt="CoachMaylis" className="banner-image" />
                </div>
                <div className="feature-card" id="cerceauaerien">
                    <h3>Cerceau Aérien</h3>
                    <p>
                    ✨Découvrez Maylis dans tout autre discipline : le Cerceau Aérien , qu’elle enseignera au 🏃💃STUDIO GRIS 💃🏃.

Maylis est une fanatique du Cerceau aérien, elle combine technique, créativité et âme attitude enjouée pour offrir une expérience d’apprentissage unique et inspirante.🌪️

Chaque cours avec Maylis est une aventure aérienne, cette passionnée, enseigne de manière accessible et sécurisé. Elle te montrera comment utiliser cette discipline pour t’exprimer et te sentir libre.☀️

Adultes ou enfants, débutant ou confirmé elle vous transmettra sa passion aérienne ❤️‍🔥

Accessible à partir de 5 ans ☺️

le Cerceau aérien c’est quoi ?

Le Cerceau aérien est une discipline acrobatique et artistique qui se pratique en suspension dans les airs à l’aide d’un Cerceau métallique.
les routines peuvent inclure des rotations, des inversions, des balancements et des séquences chorégraphiées. 😍

💌Rejoignez notre communauté vibrante de danseur
                    </p>
                </div>
            </section>
        </div>
    );
};

export default CerceauAerienCoach_Form;