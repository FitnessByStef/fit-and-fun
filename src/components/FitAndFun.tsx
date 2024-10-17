import React from 'react';
import CoachStephane from './medias/coachs/Stephane.jpg';
const FitAndFun: React.FC = () => {
    return (
        <div className="fitandfunform">
            <h2 className="fitandfunformheader">🏋🏼‍♀️ FIT AND FUN 🏋🏼‍♀️</h2>

            {/* Section Features */}
            <section className="homepage-features">
                <div className="feature-card" id="coach">
                    <h3>Coach sportif : Stéphane</h3>
                    <img src={CoachStephane} alt="CoachStephane" className="banner-image" />
                </div>
                <div className="feature-card" id="fitandfun">
                    <h3>Fit And Fun</h3>
                    <p>
                        Découvrez notre prof de renforcement musculaire, qui enseignera du Renforcement Musculaire au 🏃💃STUDIO GRIS 💃🏃.
Stephane est un passionné de sport, il est bien plus qu’un simple entraîneur, c’est un dynamo d’énergie positive et de motivation contagieuse. 🤩✨
Il personnalise les séances pour s’adapter aux besoins spécifiques, et au niveau de ses clients, en s’assurant que chacun progresse à son rythme. 💪🏻
Que vous vous soyez débutant ou confirmé, il saura vous embarquer dans sa passion ❤️‍🔥
le renforcement musculaire c’est quoi ?
Un cours de renforcement musculaire est une séance, d’exercices vise à augmenté la force et l’endurance des muscles.☺️
L’objectif est de tonifier, raffermir et améliorer la performance musculaire globale.🏋🏼‍♀️
💌 Rejoignez notre communauté vibrante de sportif
                    </p>
                </div>
            </section>
        </div>
    );
};

export default FitAndFun;