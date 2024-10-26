import React, { useState } from 'react';
import './HomePage.css';
import { Button } from '@progress/kendo-react-buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FitAndFunCoach_Form from './components/FitAndFunCoach_Form';
import TwerkCoach_Form from './components/TwerkCoach_Form';
import CommercialCoach_Form from './components/CommercialCoach_Form';
import DanseUrbaineCoach_Form from './components/DanseUrbaineCoach_Form';
import CerceauAerienCoach_Form from './components/CerceauAerienCoach_Form';
import HeelsCoach_Form from './components/HeelsCoach_Form';
import BachataCoach_Form from './components/BachataForm';
import AProposForm from './components/APropos';
import HomeStudioGrisForm from './components/HomeStudioGris';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Chatbot from './components/ChatBot';
import { Menu, MenuItemModel } from '@progress/kendo-react-layout';
import Planning_Form from './components/Planning_Form';
import FitKids_Videos from './components/FitKids_Videos';
import CardioBoxing_Videos from './components/CardioBoxingVideos';
import Twerk_Videos from './components/Twerk_Videos';
import HipHopCoach_Form from './components/HipHopForm';

const HomePage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('home');

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
                        { text: 'Maylis & Stéphane', data: { tab: 'fitandfuncoach' } },
                        { text: 'Fit Kids', data: { tab: 'fitkidsvideos' } },
                        { text: 'Cardio Boxing', data: { tab: 'cardioboxingvideos' } }
                    ]
                },
                {
                    text: 'Twerk', data: { tab: 'twerk' },
                    items: [
                        { text: 'Maylis', data: { tab: 'twerkcoach' } },
                        { text: 'Twerk', data: { tab: 'twerkvideos' } },
                    ]
                },
                {
                    text: 'Commercial', data: { tab: 'commercial' },
                    items: [
                        { text: 'Sarah', data: { tab: 'commercialcoach' } },
                    ]
                },
                {
                    text: 'Hip-Hop', data: { tab: 'hiphop' },
                    items: [
                        { text: 'Julia', data: { tab: 'hiphopcoach' } },
                    ]
                },
                {
                    text: 'Danse Urbaine', data: { tab: 'danseurbaine' },
                    items: [
                        { text: 'Sarah', data: { tab: 'danseurbainecoach' } },
                    ]
                },
                {
                    text: 'Cerceau Aérien', data: { tab: 'cerceauaerien' },
                    items: [
                        { text: 'Maylis', data: { tab: 'cerceauaeriencoach' } },
                    ]
                },
                {
                    text: 'Heels', data: { tab: 'heels' },
                    items: [
                        { text: 'Déborah', data: { tab: 'heelscoach' } },
                    ]
                },
                {
                    text: 'Bachata', data: { tab: 'bachata' },
                    items: [
                        { text: 'Mickaël', data: { tab: 'bachatacoach' } },
                    ]
                }
            ]
        },
        { text: 'Planning/Réservation', data: { tab: 'planning' } },
        { text: 'Qui sommes-nous ?', data: { tab: 'about' } },
    ];

    return (
        <div className="homepage-container">
            <header className="homepage-header">
                <img src={'/medias/logo/logo_studio_gris.jpg'} alt="Fitness" className="homepage-logo" />
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

            <div className="homepage-banner">
                <div className="slider">
                    <div className="slides">
                        <img src={'/medias/batiment/CardioBoxing_StudioGris.jpg'} alt="Fitness" className="banner-image" />
                        <img src={'/medias/batiment/Cerceaux_Aerien_StudioGris.jpg'} alt="Nutrition" className="banner-image" />
                        <img src={'/medias/batiment/Plafond_StudioGris.jpg'} alt="Bien-être" className="banner-image" />
                        <img src={'/medias/batiment/CoinSalon_StudioGris.jpg'} alt="Danse" className="banner-image" />
                    </div>
                </div>
            </div>

            <div className="tab-content">
                {activeTab === 'fitandfuncoach' && <FitAndFunCoach_Form />}
                {activeTab === 'fitkidsvideos' && <FitKids_Videos />}
                {activeTab === 'cardioboxingvideos' && <CardioBoxing_Videos />}
                {activeTab === 'twerkcoach' && <TwerkCoach_Form />}
                {activeTab === 'twerkvideos' && <Twerk_Videos />}
                {activeTab === 'commercialcoach' && <CommercialCoach_Form />}
                {activeTab === 'danseurbainecoach' && <DanseUrbaineCoach_Form />}
                {activeTab === 'cerceauaeriencoach' && <CerceauAerienCoach_Form />}
                {activeTab === 'hiphopcoach' && <HipHopCoach_Form />}
                {activeTab === 'heelscoach' && <HeelsCoach_Form />}
                {activeTab === 'bachatacoach' && <BachataCoach_Form />}
                {activeTab === 'about' && <AProposForm />}
                {activeTab === 'home' && <HomeStudioGrisForm />}
                {activeTab === 'planning' && <Planning_Form />}
            </div>

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
