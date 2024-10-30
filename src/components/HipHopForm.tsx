import React from 'react';

const HipHopCoach_Form: React.FC = () => {
    return (
        <div className="hiphopform">
            <h2 className="formheader"><span className="feature-pinkname">HIP HOP</span></h2>

            {/* Section Features */}
            <section className="homepage-features">
                <div className="feature-card" id="coach">
                    <img src={'/medias/coachs/Julia.jpg'} alt="CoachJulia" className="banner-image" />
                </div>
                <div className="feature-card" id="hiphop">
                    <p>
                    ✨ <span className="feature-pinkname">Julia</span>, enseigne le hip-hop au STUDIO <span className="feature-pinkname">GRIS</span>. 
<br /><br />Avec son énergie captivante et son style raffiné arriver tout droit des USA, elle transforme chaque cours en un moment unique, alliant technique et plaisir. 
<br /><br />Que vous soyez novice ou expérimenté, laissez-vous emporter par le rythme et l’élance du moment avec Julia. 
<br /><br />Ne perdez plus de temps, <span className="feature-pinkname">rejoignez nous !</span>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default HipHopCoach_Form;