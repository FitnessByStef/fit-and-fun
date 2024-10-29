import React from 'react';

const AProposForm: React.FC = () => {
    return (
        <div className="aproposform">
            <h2 className="formheader"><span className="feature-pinkname">QUI SOMMES-NOUS ?</span></h2>

            {/* Section Features */}
            <section className="homepage-features">
                <div className="feature-card" id="coach">
                    <img src={'/medias/coachs/SophieMaylis.jpg'} alt="CoachStephane" className="banner-image" />
                </div>
                <div className="feature-card" id="commercial">
                    <p>
                    Il y a quelques temps, ensemble, nous avons mis toute notre énergie et notre vision commune pour créer un lieu qui vous inspire et vous invite à prendre soin de vous. Notre studio est bien plus qu'un simple espace d'entrainement, c'est un lieu d'expressions, de mouvements, d'échange et de confiance.
                    <br /> <br /> 
                    <span className="feature-pinkname">Maylis</span> (à droite), véritable passionnée de danse depuis son plus jeune âge, a fait de cet art son métier. Enseignante depuis plus de 10 ans, elle partage son savoir-faire et sa passion à travers des disciplines originales telles que le cerceau aérien, le twerk et le stretching.
                    Elle trouve dans ces pratiques, une façon unique de libérer les énergies et de permettre à chacun de s'exprimer à travers des formes variées et créatives.
                    <br /> <br /> 
                    <span className="feature-pinkname">Sophie</span> (à gauche), de son côté, est thérapeute dans le bien-être, bouger chaque jour est essentiel pour une vie épanouie et en bonne santé. Son approche repose sur l'idée que le mouvement ne se limite pas à l'activité physique pure, mais qu'il contribue aussi à un équilibre mental et émotionnel. Sophie apporte aussi une dimension plus profonde à notre projet, en liant le sport à une véritable philosophie du bien-être, dans laquelle corps et esprit sont en harmonie.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default AProposForm;