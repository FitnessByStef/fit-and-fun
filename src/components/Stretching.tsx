import React from 'react';
import CoachMaylis from './medias/coachs/Maylis.jpg';
const Stretching: React.FC = () => {
    return (
        <div className="stretchingform">
            <h2 className="stretchingformheader">🏋🏼‍♀️ FIT AND FUN : STRETCHING 🏋🏼‍♀️</h2>

            {/* Section Features */}
            <section className="homepage-features">
                <div className="feature-card" id="coach">
                    <h3>Stretching : Maylis</h3>
                    <img src={CoachMaylis} alt="CoachMaylis" className="banner-image" />
                </div>
                <div className="feature-card" id="stretching">
                    <h3>Fit And Fun</h3>
                    <p>
                        Découvrez notre prof de stretching, qui enseignera le stretching au 🏃💃STUDIO GRIS 💃🏃.

💌 Rejoignez notre communauté vibrante de sportif
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Stretching;
