import React from 'react';
import CoachMaylis from './medias/coachs/Maylis.jpg';

const Twerk: React.FC = () => {
    return (
        <div className="twerkform">
            <h2 className="twerkformheader">🍑 TWERK 🍑</h2>

            {/* Section Features */}
            <section className="homepage-features">
                <div className="feature-card" id="coach">
                    <h3>Coach sportif : Maylis</h3>
                    <img src={CoachMaylis} alt="CoachStephane" className="banner-image" />
                </div>
                <div className="feature-card" id="stretching">
                    <h3>Twerk</h3>
                    <p>
                    Découvrez notre prof de Danse, qui enseignera le Twerk au 🏃💃STUDIO GRIS 💃🏃.

pour Maylis, le Twerk 🍑 est bien plus qu’une danse, c’est une de célébration de la féminité et de la liberté d’expression. 💋

Maylis croit en l’importance de se sentir bien, elle utilise le Twerk comme un moyen de libération. 😍
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Twerk;