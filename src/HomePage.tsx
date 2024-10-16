import React, { useState } from 'react';
import './HomePage.css';
import { Button } from '@progress/kendo-react-buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faDumbbell, faUtensils, faSpa, faMusic, faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Fitness from './components/Fitness';
import Nutrition from './components/Nutrition';
import BienEtre from './components/BienEtre';
import Danse from './components/Danse';
import logo from './logo_studio_gris.jpg';
import fitness from './fitness.jpg';
import nutrition from './nutrition.jpg';
import wellBeing from './bienetre.jpg';
import danse from './danse.jpg';

const HomePage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('fitness'); // état pour gérer l'onglet actif

    // Fonction pour gérer le changement d'onglet
    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className="homepage-container">
            {/* Header avec logo statique */}
            <header className="homepage-header">
                
            </header>
            
            {/* Menu avec icônes et sous-menu */}
            <nav className="homepage-menu">
                
                <ul className="menu-horizontal">
                    
                    <li><a href="#home" onClick={() => handleTabChange('home')}><FontAwesomeIcon icon={faHome} /> Accueil</a></li>
                    <li className="dropdown-container">
                        <a href="#services"><FontAwesomeIcon icon={faDumbbell} /> Services</a>
                        <ul className="dropdown">
                            <li><a href="#fitness" onClick={() => handleTabChange('fitness')}><FontAwesomeIcon icon={faDumbbell} /> Fitness</a></li>
                            <li><a href="#nutrition" onClick={() => handleTabChange('nutrition')}><FontAwesomeIcon icon={faUtensils} /> Nutrition</a></li>
                            <li><a href="#bien-etre" onClick={() => handleTabChange('bien-etre')}><FontAwesomeIcon icon={faSpa} /> Bien-être</a></li>
                            <li><a href="#danse" onClick={() => handleTabChange('danse')}><FontAwesomeIcon icon={faMusic} /> Danse</a></li>
                        </ul>
                    </li>
                    <li><a href="#about" onClick={() => handleTabChange('about')}><FontAwesomeIcon icon={faInfoCircle} /> À propos</a></li>
                    <li><a href="#contact" onClick={() => handleTabChange('contact')}><FontAwesomeIcon icon={faEnvelope} /> Contact</a></li>
                </ul>
            </nav>
                {/* Bandeau d'images défilantes */}
                <div className="homepage-banner">
                <div className="slider">
                    <div className="slides">
                        <img src={fitness} alt="Fitness" className="banner-image" />
                        <img src={nutrition} alt="Nutrition" className="banner-image" />
                        <img src={wellBeing} alt="Bien-être" className="banner-image" />
                        <img src={danse} alt="Danse" className="banner-image" />
                    </div>
                </div>
            </div>
            {/* Contenu affiché en fonction de l'onglet sélectionné */}
            <div className="tab-content">
                {activeTab === 'fitness' && <Fitness />}
                {activeTab === 'nutrition' && <Nutrition />}
                {activeTab === 'bien-etre' && <BienEtre />}
                {activeTab === 'danse' && <Danse />}
                {/* Ajoute d'autres onglets ici si nécessaire */}
            </div>

            {/* Call to Action */}
            <section className="homepage-cta">
                <Button className="cta-button">Je veux commencer maintenant</Button>
                <Button className="cta-button-secondary">En savoir plus</Button>
            </section>

        </div>
    );
};

export default HomePage;
