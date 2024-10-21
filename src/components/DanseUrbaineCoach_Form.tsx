import React from 'react';
import CoachSarah from './medias/coachs/Sarah.jpg';

const DanseUrbaineCoach_Form: React.FC = () => {
    return (
        <div className="danseurbaineform">
            <h2 className="danseurbaineformheader">💃 DANSE URBAINE 💃</h2>

            {/* Section Features */}
            <section className="homepage-features">
                <div className="feature-card" id="coach">
                    <h3>Coach sportif : Sarah</h3>
                    <img src={CoachSarah} alt="CoachSarah" className="banner-image" />
                </div>
                <div className="feature-card" id="danseurbaine">
                    <h3>Danse Urbaine</h3>
                    <p>
                    ✨Découvrez première prof de danse, Sarah, qui enseignera la danse Urbaine au 🏃💃STUDIO GRIS 💃🏃.

Sarah , sait comment motiver ses élèves et créer une atmosphère positive.☺️

Son énergie solaire et sa folie rendent les cours agréables et fun.🤩☀️

Que vous soyez débutant ou confirmé, elle saura vous embarquer dans son univers unique.🌸

La Danse Urbaine c’est quoi ?

Ce style de danse évolue, perpétuellement au fur et à mesure que les styles se mélangent.

Dans lequel chacun peut s’exprimer. (danse africaine, New school, pop, lock…) 💪🏻

💌 Rejoignez notre communauté vibrante de danseurs !
                    </p>
                </div>
            </section>
        </div>
    );
};

export default DanseUrbaineCoach_Form;