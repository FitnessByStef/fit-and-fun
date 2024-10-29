import React from 'react';

const DanseUrbaineCoach_Form: React.FC = () => {
    return (
        <div className="danseurbaineform">
            <h2 className="formheader"><span className="feature-pinkname">DANSE URBAINE</span></h2>

            {/* Section Features */}
            <section className="homepage-features">
                <div className="feature-card" id="coach">
                    <img src={'/medias/coachs/Sarah.jpg'} alt="CoachSarah" className="banner-image" />
                </div>
                <div className="feature-card" id="danseurbaine">
                    <p>
                    ✨<span className="feature-pinkname">Sarah</span>, enseigne le commercial et la danse urbaine  au STUDIO <span className="feature-pinkname">GRIS</span> ! 
Avec son énergie lumineuse et sa simplicité, elle transforme chaque cours en un moment unique, puissant et joyeux.
Que vous soyez débutant ou expérimenté, chaque session avec elle devient une aventure inspirante. 
Rejoignez notre communauté dynamique de danseurs passionnés, dès maintenant ! 
                    </p>
                </div>
            </section>
        </div>
    );
};

export default DanseUrbaineCoach_Form;