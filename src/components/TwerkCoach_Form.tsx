import React from 'react';

const TwerkCoach_Form: React.FC = () => {
    return (
        <div className="twerkform">
            <h2 className="formheader"><span className="feature-pinkname">TWERK</span></h2>

            {/* Section Features */}
            <section className="homepage-features">
                <div className="feature-card" id="coach">
                    <img src={'/medias/coachs/Maylis.jpg'} alt="CoachStephane" className="banner-image" />
                </div>
                <div className="feature-card" id="stretching">
                    <p>
                    ✨ <span className="feature-pinkname">Maylis</span>, enseigne le Twerk au STUDIO <span className="feature-pinkname">GRIS</span> ! 
<br /><br />Le twerk  est bien plus qu'une danse : c'est une explosion de féminité et une célébration totale de la liberté d’expression. 
<br /><br />Maylis est là pour vous faire vibrer, vous libérer, et vous aider à vous sentir bien dans votre corps. Avec elle, chaque cours est un shot de confiance et de fun pur. 
<br /><br />Prêt.e à tout donner et à lâcher prise ? <span className="feature-pinkname">Rejoignez-nous ! </span>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default TwerkCoach_Form;