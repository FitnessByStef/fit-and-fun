import React from 'react';

const PoleDanceCoach_Form: React.FC = () => {
    return (
        <div className="poledanceform">
            <h2 className="formheader"><span className="feature-pinkname">POLE DANCE</span></h2>

            {/* Section Features */}
            <section className="homepage-features">
                <div className="feature-card" id="coach">
                    <img src={'/medias/coachs/MaylisPoleDance.png'} alt="CoachMaylis" className="banner-image" />
                </div>
                <div className="feature-card" id="poledance">
                    <p>
                    ✨<span className="feature-pinkname">Maylis</span> enseigne la Pole Dance au STUDIO <span className="feature-pinkname">GRIS</span>.
<br /><br />Sa passion pour l'enseignement et sa détermination à vous faire progresser font de ses cours une véritable bulle d'oxygène.
<br /><br />Que vous soyez débutant ou que vous pratiquiez déjà, elle saura s'adapter à vos besoins et vous faire évoluer à votre rythme.
<br /><br /><span className="feature-pinkname">Ne perdez plus de temps, venez tester la pole dance, vous allez adorer ! </span> 
                    </p>
                </div>
            </section>
        </div>
    );
};

export default PoleDanceCoach_Form;