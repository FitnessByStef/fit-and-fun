import React from 'react';

const BachataCoach_Form: React.FC = () => {
    return (
        <div className="bachataform">
            <h2 className="formheader"><span className="feature-pinkname">Bachata</span></h2>

            {/* Section Features */}
            <section className="homepage-features">
                <div className="feature-card" id="coach">
                    
                </div>
                <div className="feature-card" id="bachata">
                    <p>
                    ✨ <span className="feature-pinkname">Mickaël</span>, enseigne la Bachata au STUDIO <span className="feature-pinkname">GRIS</span>. 
Son style est un parfait mélange de technique et de passion, vous guidant à chaque pas pour que vous ressentiez la musique et la connexion unique qu'offre la Bachata. 
Que vous soyez débutant ou danseur confirmé, laissez-vous entraîner par son énergie et sa bienveillance pour vivre pleinement l'âme de la Bachata. Rejoignez-nous dès à présent ! 
                    </p>
                </div>
            </section>
        </div>
    );
};

export default BachataCoach_Form;