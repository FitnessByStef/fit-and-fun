import React from 'react';
const FitAndFunCoach_Form: React.FC = () => {
    return (
        <div className="fitandfunform">
            <h2 className="formheader"><span className="feature-pinkname">FIT AND FUN</span></h2>

            {/* Section Features */}
            <section className="homepage-features">
                <div className="feature-card" id="coach">
                    <img src={'/medias/coachs/Stephane.jpg'} alt="CoachStephane" className="banner-image" />
                </div>
                <div className="feature-card" id="fitandfun">
                    <p>
                    ✨ <span className="feature-pinkname">Stéphane</span>, enseigne le fit & fun ( renforcement  musculaire) au STUDIO <span className="feature-pinkname">GRIS</span>. 
<br /><br />Ce passionné de sport, est bien plus qu’un simple entraîneur, c’est une véritable  dynamo d’énergie positive et de motivation contagieuse.
<br /><br />Il personnalise chacune de ses séances pour s’adapter aux besoins spécifiques et au niveau de nos clients,
<br /><br />Stéphane est attentif à ce que chaque personne progresse à son rythme. 
<br /><br />Que vous vous soyez débutant ou confirmé, il saura vous embarquer dans sa passion et sa folie ! <span className="feature-pinkname">Rejoignez notre équipe ! </span>
                    </p>
                </div>

                <div className="feature-card" id="coach">
                    <img src={'/medias/coachs/MaylisFitAndFun.png'} alt="CoachMaylis" className="banner-image" />
                </div>
                <div className="feature-card" id="stretching">
                    <p>
                    ✨ <span className="feature-pinkname">Maylis</span>, enseigne le fit and fun soft au STUDIO <span className="feature-pinkname">GRIS</span> ! 
                    <br /><br />Avec son approche douce et attentive, Maylis vous guide pour gagner en souplesse, en détente et en bien-être. 
                    <br /><br />Elle vous aide à relâcher les tensions, améliorer votre posture et explorer les capacités de votre corps tout en douceur. 
                    <br /><br />Que vous soyez novice ou confirmé, chaque séance devient un moment de reconnexion. <span className="feature-pinkname">Rejoignez-nous ! </span>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default FitAndFunCoach_Form;