import React from 'react';

const CommercialCoach_Form: React.FC = () => {
    return (
        <div className="commercialform">
            <h2 className="formheader"><span className="feature-pinkname">COMMERCIAL</span></h2>

            {/* Section Features */}
            <section className="homepage-features">
                <div className="feature-card" id="coach">
                    <img src={'/medias/coachs/SarahCommercial.png'} alt="CoachSarah" className="banner-image" />
                </div>
                <div className="feature-card" id="commercial">
                    <p>
                    ✨ <span className="feature-pinkname">Sarah</span>, enseigne le commercial et la danse urbaine  au STUDIO <span className="feature-pinkname">GRIS</span> ! 
<br /><br />Avec son énergie lumineuse et sa simplicité, elle transforme chaque cours en un moment unique, puissant et joyeux.
<br /><br />Que vous soyez débutant ou expérimenté, chaque session avec elle devient une aventure inspirante. 
<br /><br /><span className="feature-pinkname">Rejoignez notre communauté dynamique de danseurs passionnés, dès maintenant ! </span>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default CommercialCoach_Form;