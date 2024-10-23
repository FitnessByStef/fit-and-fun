import React from 'react';
import Planning from './medias/cours/Planning.jpg';
const Planning_Form: React.FC = () => {
    return (
        <div className="planningform">
            <h2 className="planningformheader">🏋🏼‍♀️💃 PLANNING 💃🏋🏼‍♀️</h2>

            {/* Section Features */}
            <section className="homepage-features">
                <div className="feature-card" id="planning">
                    <h3>
                        <div className="feature-card" id="planning">
                            <p>
                                Réservez vos séances <a href='https://studio-gris.sportigo.fr/'target="_blank" rel="noopener noreferrer" className="social-button">ici</a>
                            </p>
                        </div>
                    </h3>
                    <img src={Planning} alt="Planning" className="banner-image" />
                </div>
                
                
            </section>
        </div>
    );
};

export default Planning_Form;