import React from 'react';
import CoachJulia from './medias/coachs/Julia.jpg';

const CommercialForm: React.FC = () => {
    return (
        <div className="commercialform">
            <h2 className="commercialformheader">💃 COMMERCIAL 💃</h2>

            {/* Section Features */}
            <section className="homepage-features">
                <div className="feature-card" id="coach">
                    <h3>Coach sportif : Julia</h3>
                    <img src={CoachJulia} alt="CoachJulia" className="banner-image" />
                </div>
                <div className="feature-card" id="commercial">
                    <h3>Commercial</h3>
                    <p>
                    Découvrez notre prof de Danse, Julia, qui enseignera le commercial au🏃💃STUDIO GRIS 💃🏃.

Elle allie simplicité et bonne humeur, rendant les cours puissants et originaux.🌸

Que vous soyez débutant ou confirmé chaque cours est une aventure. 😎
💌 Rejoignez notre communauté vibrante de danseur
                    </p>
                </div>
            </section>
        </div>
    );
};

export default CommercialForm;