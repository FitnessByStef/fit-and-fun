import React from 'react';
import CoachDeborah from './medias/coachs/Deborah.jpg';

const Heels: React.FC = () => {
    return (
        <div className="heelsform">
            <h2 className="heelsformheader">💃 HEELS 💃</h2>

            {/* Section Features */}
            <section className="homepage-features">
                <div className="feature-card" id="coach">
                    <h3>Heels : Deborah</h3>
                    <img src={CoachDeborah} alt="CoachDeborah" className="banner-image" />
                </div>
                <div className="feature-card" id="heels">
                    <h3>Heels</h3>
                    <p>
                    ✨ Découvrez notre troisième prof de Danse, Deborah, qui enseignera le Heels au 🏃💃STUDIO GRIS 💃🏃.


Deborah, de part sa présence, rayonne l’élégance, la grâce et la douceur. 🌸

Perchée sur ses talons, elle s’est donnée pour mission de vous enseigner sa version du heels, un mélange de danse classique et de gestuelle cabaret.⭐️

Avec sa bienveillance, viens révéler la femme puissante qui sommeille en toi.🥰

Que vous soyez débutant ou confirmé, vous vous sentirez dans votre élément 💋

Le heels c’est quoi ?
Le heels est une danse qui mélange plusieurs styles, offrant des performances revisités.

En effet le heels est une danse qui incorpore son style dans toutes les chorégraphies sensuelles et rythmées. ✨

Sa pratique vous apprend et vous encourage à vous aimer comme vous êtes. 😘

Ainsi vous développer une attitude confiante, forte et féminine.😍🌸

💌 Rejoignez notre communauté vibrante de danseurs !
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Heels;