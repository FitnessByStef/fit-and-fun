import React from 'react';

const CerceauAerienCoach_Form: React.FC = () => {
    return (
        <div className="cerceauaerienform">
            <h2 className="formheader"><span className="feature-pinkname">CERCEAU AERIEN</span></h2>

            {/* Section Features */}
            <section className="homepage-features">
                <div className="feature-card" id="coach">
                    <img src={'/medias/coachs/MaylisCerceau.jpg'} alt="CoachMaylis" className="banner-image" />
                </div>
                <div className="feature-card" id="cerceauaerien">
                    <p>
                    ✨<span className="feature-pinkname">Maylis</span> enseigne le Cerceau Aérien au STUDIO <span className="feature-pinkname">GRIS</span>.
<br /><br />Maylis est une fanatique du Cerceau aérien, elle combine technique, créativité et âme attitude enjouée pour offrir une expérience d’apprentissage unique et inspirante.
<br /><br />Chaque cours avec Maylis est une aventure aérienne, cette passionnée, enseigne de manière accessible et sécurisé. Elle te montrera comment utiliser cette discipline pour t’exprimer et te sentir libre.
<br /><br />Adultes ou enfants, débutant ou confirmé elle vous transmettra sa passion aérienne
<br /><br /><span className="feature-pinkname">Ne perdez plus de temps, Rejoignez-nous !</span> 
                    </p>
                </div>
            </section>
        </div>
    );
};

export default CerceauAerienCoach_Form;