import React, { useState } from 'react';
import './HomePage.css';
import { Button } from '@progress/kendo-react-buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faDumbbell, faUtensils, faSpa, faMusic, faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from './components/medias/logo/logo_studio_gris.jpg';
import CardioBoxing from './components/medias/batiment/CardioBoxing_StudioGris.jpg';
import Cerceaux_Aerien from './components/medias/batiment/Cerceaux_Aerien_StudioGris.jpg';
import Plafond_StudioGris from './components/medias/batiment/Plafond_StudioGris.jpg';
import CoinSalon from './components/medias/batiment/CoinSalon_StudioGris.jpg';
import FitAndFun from './components/FitAndFun';
import FitKids from './components/FitKids';
import Stretching from './components/Stretching';
import Twerk from './components/Twerk';
import CommercialForm from './components/CommercialForm';
import DanseUrbaineForm from './components/DanseUrbaineForm';
import CerceauAerienForm from './components/CerceauAerienForm';
import Heels from './components/Heels';
import BachataForm from './components/BachataForm';
import AProposForm from './components/APropos';
import HomeStudioGrisForm from './components/HomeStudioGris';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Import des icônes de réseaux sociaux


const HomePage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('fitness'); // état pour gérer l'onglet actif

    // Fonction pour gérer le changement d'onglet
    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className="homepage-container">
            <nav className="homepage-menu">
                
                <ul className="menu-horizontal">
                    
                    <li><a href="#home" onClick={() => handleTabChange('home')}><FontAwesomeIcon icon={faHome} /> Accueil</a></li>
                    <li className="dropdown-container">
                        <a href="#cours"><FontAwesomeIcon icon={faDumbbell} /> Cours</a>
                        <ul className="dropdown">
                            <li><a href="#fitandfun" onClick={() => handleTabChange('fitandfun')}><FontAwesomeIcon icon={faDumbbell} /> Fit And Fun</a></li>
                            <li><a href="#fitkids" onClick={() => handleTabChange('fitkids')}><FontAwesomeIcon icon={faDumbbell} /> Fit Kids</a></li>
                            <li><a href="#stretching" onClick={() => handleTabChange('stretching')}><FontAwesomeIcon icon={faDumbbell} /> Stretching</a></li>
                            <li><a href="#twerk" onClick={() => handleTabChange('twerk')}><FontAwesomeIcon icon={faMusic} /> Twerk</a></li>
                            <li><a href="#commercial" onClick={() => handleTabChange('commercial')}><FontAwesomeIcon icon={faMusic} /> Commercial</a></li>
                            <li><a href="#danseurbaine" onClick={() => handleTabChange('danseurbaine')}><FontAwesomeIcon icon={faMusic} /> Danse Urbaine</a></li>
                            <li><a href="#cerceauaerien" onClick={() => handleTabChange('cerceauaerien')}><FontAwesomeIcon icon={faMusic} /> Cerceau Aérien</a></li>
                            <li><a href="#heels" onClick={() => handleTabChange('heels')}><FontAwesomeIcon icon={faMusic} /> Heels</a></li>
                            <li><a href="#bachata" onClick={() => handleTabChange('bachata')}><FontAwesomeIcon icon={faMusic} /> Bachata</a></li>
                        </ul>
                    </li>
                    <li><a href="#about" onClick={() => handleTabChange('about')}><FontAwesomeIcon icon={faInfoCircle} /> Qui sommes-nous ?</a></li>
                    <li><a href="#contact" onClick={() => handleTabChange('contact')}><FontAwesomeIcon icon={faEnvelope} /> Contact</a></li>
                    
                </ul>
            </nav>
            {/* Header avec logo statique */}
            <header className="homepage-header">
                <img src={logo} alt="Fitness" className="homepage-logo " />
                <div className="social-media">
                    <p>Suivez-nous sur :</p>
                    <a href="https://www.facebook.com/profile.php?id=61559492342771" target="_blank" rel="noopener noreferrer" className="social-button">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://www.instagram.com/le_studiogris/" target="_blank" rel="noopener noreferrer" className="social-button">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </div>
                
            </header>
            
            {/* Menu avec icônes et sous-menu */}
            
                {/* Bandeau d'images défilantes */}
                <div className="homepage-banner">
                <div className="slider">
                    <div className="slides">
                        <img src={CardioBoxing} alt="Fitness" className="banner-image" />
                        <img src={Cerceaux_Aerien} alt="Nutrition" className="banner-image" />
                        <img src={Plafond_StudioGris} alt="Bien-être" className="banner-image" />
                        <img src={CoinSalon} alt="Danse" className="banner-image" />
                    </div>
                </div>
            </div>
            {/* Contenu affiché en fonction de l'onglet sélectionné */}
            <div className="tab-content">
                {activeTab === 'fitandfun' && <FitAndFun />}
                {activeTab === 'fitkids' && <FitKids />}
                {activeTab === 'stretching' && <Stretching />}
                {activeTab === 'twerk' && <Twerk />}
                {activeTab === 'commercial' && <CommercialForm />}
                {activeTab === 'danseurbaine' && <DanseUrbaineForm />}
                {activeTab === 'cerceauaerien' && <CerceauAerienForm />}
                {activeTab === 'heels' && <Heels />}
                {activeTab === 'bachata' && <BachataForm />}
                {activeTab === 'about' && <AProposForm />}
                {activeTab === 'home' && <HomeStudioGrisForm />}
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
