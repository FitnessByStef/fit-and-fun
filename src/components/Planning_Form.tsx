import React from 'react';
const Planning_Form: React.FC = () => {
    return (
        <div className="planningform">
            <h2 className="formheader">🏋🏼‍♀️💃 <span className="feature-pinkname">PLANNING</span> 💃🏋🏼‍♀️</h2>

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
                    <img src={'/medias/cours/Planning.jpg'} alt="Planning" className="banner-image" />
                </div>
                
                
            </section>
        </div>
    );
};

export default Planning_Form;