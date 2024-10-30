import React from 'react';

const HeelsCoach_Form: React.FC = () => {
    return (
        <div className="heelsform">
            <h2 className="formheader"><span className="feature-pinkname">HEELS</span></h2>

            {/* Section Features */}
            <section className="homepage-features">
                <div className="feature-card" id="coach">
                    <img src={'/medias/coachs/Deborah.jpg'} alt="CoachDeborah" className="banner-image" />
                </div>
                <div className="feature-card" id="heels">
                    <p>
                    ✨ <span className="feature-pinkname">Déborah</span>, enseigne le Heels au STUDIO <span className="feature-pinkname">GRIS</span>. 
<br /><br />Avec sa douceur, elle incarne l'élégance et la grâce. 
<br /><br />Dans ses cours, elle vous  propose une approche du Heels mêlant danse modern'jazz et gestuelle cabaret. 
<br /><br />Sa bienveillance , vous permettra de révéler  la femme qui sommeille en vous. 
<br /><br />Débutant ou confirmé, trouvez votre place dans cette danse qui célèbre la confiance et l’expression personnelle. 
<br /><br /><span className="feature-pinkname">N’hésitez pas à nous rejoindre dès à présent ! </span>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default HeelsCoach_Form;