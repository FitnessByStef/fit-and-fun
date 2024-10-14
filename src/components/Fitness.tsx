import React from 'react';

const Fitness: React.FC = () => {
    return (
        <div>
            <h2>Programme Fitness</h2>
            <p>Des programmes adaptés pour booster votre forme physique.</p>

            {/* Section Features */}
            <section className="homepage-features">
                <div className="feature-card" id="fitness">
                    <h3>Power Pulse</h3>
                    <p>Des programmes adaptés pour booster votre forme physique.</p>
                </div>
                <div className="feature-card" id="nutrition">
                    <h3>Athletic blast</h3>
                    <p>Des conseils et plans nutritionnels personnalisés pour vous sentir mieux.</p>
                </div>
                <div className="feature-card" id="bien-etre">
                    <h3>PowerFlow Pilates</h3>
                    <p>Atteignez un bien-être mental grâce à des techniques éprouvées.</p>
                </div>
                <div className="feature-card" id="danse">
                    <h3>Cardio Boxing</h3>
                    <p>Apprenez la danse et améliorez votre forme physique tout en vous amusant.</p>
                </div>
                <div className="feature-card" id="danse">
                    <h3>Fit Kids</h3>
                    <p>Apprenez la danse et améliorez votre forme physique tout en vous amusant.</p>
                </div>
            </section>
        </div>
    );
};

export default Fitness;