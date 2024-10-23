import React, { act, useState } from 'react';
import './HomePage.css';
import { Button } from '@progress/kendo-react-buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './components/medias/logo/logo_studio_gris.jpg';
import CardioBoxing from './components/medias/batiment/CardioBoxing_StudioGris.jpg';
import Cerceaux_Aerien from './components/medias/batiment/Cerceaux_Aerien_StudioGris.jpg';
import Plafond_StudioGris from './components/medias/batiment/Plafond_StudioGris.jpg';
import CoinSalon from './components/medias/batiment/CoinSalon_StudioGris.jpg';
import FitAndFunCoach_Form from './components/FitAndFunCoach_Form';
import TwerkCoach_Form from './components/TwerkCoach_Form';
import CommercialCoach_Form from './components/CommercialCoach_Form';
import DanseUrbaineCoach_Form from './components/DanseUrbaineCoach_Form';
import CerceauAerienCoach_Form from './components/CerceauAerienCoach_Form';
import HeelsCoach_Form from './components/HeelsCoach_Form';
import BachataCoach_Form from './components/BachataForm';
import AProposForm from './components/APropos';
import HomeStudioGrisForm from './components/HomeStudioGris';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Import des icônes de réseaux sociaux
import Chatbot from './components/ChatBot';
import { Menu, MenuItemModel  } from '@progress/kendo-react-layout';
import Planning_Form from './components/Planning_Form';
import FitKids_Videos from './components/FitKids_Videos';


const HomePage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('fitness'); // état pour gérer l'onglet actif

    // Fonction pour gérer le changement d'onglet
    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };
    const menuItems: MenuItemModel[] = [
        { text: 'Accueil', data: { tab: 'home' } },
        {
            text: 'Cours', data: { tab: 'cours' },
            items: [
                {
                    text: 'Fit And Fun', data: { tab: 'fitandfun' },
                    items: [
                        { text: 'Les coachs', data: { tab: 'fitandfuncoach' } },
                        { text: 'Fit Kids', data: { tab: 'fitkidsvideos' } },
                    ]
                },
                {
                    text: 'Twerk', data: { tab: 'twerk' },
                    items: [
                        { text: 'La coach', data: { tab: 'twerkcoach' } },
                    ]
                },
                {
                    text: 'Commercial', data: { tab: 'commercial' },
                    items: [
                        { text: 'La coach', data: { tab: 'commercialcoach' } },
                    ]
                },
                {
                    text: 'Danse Urbaine', data: { tab: 'danseurbaine' },
                    items: [
                        { text: 'La coach', data: { tab: 'danseurbainecoach' } },
                    ]
                },
                {
                    text: 'Cerceau Aérien', data: { tab: 'cerceauaerien' },
                    items: [
                        { text: 'La coach', data: { tab: 'cerceauaeriencoach' } },
                    ]
                },
                {
                    text: 'Heels', data: { tab: 'heels' },
                    items: [
                        { text: 'La coach', data: { tab: 'heelscoach' } },
                    ]
                },
                {
                    text: 'Bachata', data: { tab: 'bachata' },
                    items: [
                        { text: 'Le coach', data: { tab: 'bachatacoach' } },
                    ]
                }
            ]
        },
        { text: 'Planning/Réservation', data: { tab: 'planning' } },
        { text: 'Qui sommes-nous ?', data: { tab: 'about' } },
    ];
    
    return (
        <div className="homepage-container">
             {/* Header avec logo statique */}
             <header className="homepage-header">
                <img src={logo} alt="Fitness" className="homepage-logo " />
                <nav className="homepage-menu">
                    <Menu
                        items={menuItems}
                        onSelect={(e) => handleTabChange(e.item.data.tab)}
                    />
                </nav>
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
                {activeTab === 'fitandfuncoach' && <FitAndFunCoach_Form />}
                {activeTab === 'fitkidsvideos' && <FitKids_Videos />}
                {activeTab === 'twerkcoach' && <TwerkCoach_Form />}
                {activeTab === 'commercialcoach' && <CommercialCoach_Form />}
                {activeTab === 'danseurbainecoach' && <DanseUrbaineCoach_Form />}
                {activeTab === 'cerceauaeriencoach' && <CerceauAerienCoach_Form />}
                {activeTab === 'heelscoach' && <HeelsCoach_Form />}
                {activeTab === 'bachatacoach' && <BachataCoach_Form />}
                {activeTab === 'about' && <AProposForm />}
                {activeTab === 'home' && <HomeStudioGrisForm />}
                {activeTab === 'planning' && <Planning_Form />}
                {/* Ajoute d'autres onglets ici si nécessaire */}
            </div>

            {/* Call to Action */}
            <section className="homepage-cta">
                <Button className="cta-button" onClick={() => {
                    window.location.href = "https://studio-gris.sportigo.fr"; 
                }}>Je veux commencer maintenant</Button>
                <Button className="cta-button-secondary">En savoir plus</Button>
            </section>

            <Chatbot /> 
        </div>
    );
};

export default HomePage;
