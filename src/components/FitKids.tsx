import React from 'react';
import CoachStephane from './medias/coachs/Stephane.jpg';
const FitKids: React.FC = () => {
    return (
        <div className="fitkidsform">
            <h2 className="fitkidsformheader">🏋🏼‍♀️ FIT KIDS 🏋🏼‍♀️</h2>

            {/* Section Features */}
            <section className="homepage-features">
                <div className="feature-card" id="coach">
                    <h3>Coach sportif Kids : Stéphane</h3>
                    <img src={CoachStephane} alt="CoachStephane" className="banner-image" />
                </div>
                <div className="feature-card" id="fitkids">
                    <h3>Fit And Fun</h3>
                    <p>
                        Découvrez notre prof de renforcement musculaire, qui enseignera le fitness pour les enfants au 🏃💃STUDIO GRIS 💃🏃.
Les enfants pourront apprendre les bases de l'athlétisme, du circuit training, du cardio boxing, bref une multitude de sport 🤩✨
Que vous vous soyez débutant ou confirmé, il saura vous embarquer dans sa passion ❤️‍🔥

💌 Rejoignez notre communauté vibrante de sportif
                    </p>
                </div>
            </section>
        </div>
    );
};

export default FitKids;