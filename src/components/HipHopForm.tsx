import React from 'react';

const HipHopCoach_Form: React.FC = () => {
    return (
        <div className="hiphopform">
            <h2 className="formheader">💃 <span className="feature-pinkname">HIP HOP</span> 💃</h2>

            {/* Section Features */}
            <section className="homepage-features">
                <div className="feature-card" id="coach">
                    <img src={'/medias/coachs/Julia.jpg'} alt="CoachJulia" className="banner-image" />
                </div>
                <div className="feature-card" id="hiphop">
                    <p>
                    ✨ <span className="feature-pinkname">Julia</span>, enseigne le hip-hop au 🏃💃STUDIO GRIS 💃🏃. 
Avec son énergie captivante et son style raffiné arriver tout droit des USA, elle transforme chaque cours en un moment unique, alliant technique et plaisir. 
Que vous soyez novice ou expérimenté, laissez-vous emporter par le rythme et l’élance du moment avec Julia. 
Ne perdez plus de temps, rejoignez nous ! 😍🌸
                    </p>
                </div>
            </section>
        </div>
    );
};

export default HipHopCoach_Form;