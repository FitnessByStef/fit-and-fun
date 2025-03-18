import React, { useState } from 'react';
import './HomePage.css';
import { Button } from '@progress/kendo-react-buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FitAndFunCoach_Form from './components/FitAndFunCoach_Form';
import TwerkCoach_Form from './components/TwerkCoach_Form';
import CommercialCoach_Form from './components/CommercialCoach_Form';
import CerceauAerienCoach_Form from './components/CerceauAerienCoach_Form';
import HeelsCoach_Form from './components/HeelsCoach_Form';
import AProposForm from './components/APropos';
import HomeStudioGrisForm from './components/HomeStudioGris';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Chatbot from './components/ChatBot';
import Planning_Form from './components/Planning_Form';
import CardioBoxing_Videos from './components/CardioBoxingVideos';
import Twerk_Videos from './components/Twerk_Videos';
import Heels_Videos from './components/Heels_Videos';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import ContactForm from './components/Contact';
import PoleDanceCoach_Form from './components/PoleDanceCoach_Form';
import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Offers_Form from './components/Offers_Form';
 
interface IProps {
}

interface MenuItem {
    text: string;
    data: { tab: string };
    items?: MenuItem[];
}

const HomePage: React.FC<IProps> = (props: IProps) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeTab, setActiveTab] = useState<string>(location.pathname.substring(1) || "home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        setOpenMenus({});
        setIsMenuOpen(false);
        navigate(`/${tab}`); 
    };

    const handleMenuToggle = (key: string, level: number) => {
        setOpenMenus((prev) => {
            const newOpenMenus = { ...prev };
    
            // Si c'est le premier niveau, fermer les autres menus de premier niveau
            if (level === 0) {
                Object.keys(newOpenMenus).forEach(k => {
                    if (!k.includes('.') && k !== key) {
                        newOpenMenus[k] = false;
                    }
                });
            }
    
            // Basculer l'état d'ouverture du menu sélectionné
            newOpenMenus[key] = !prev[key];
            return newOpenMenus;
        });
    };
    const menuItems: MenuItem[] = [
        { text: 'Accueil', data: { tab: 'home' } },
        {
            text: 'Cours', data: { tab: 'cours' },
            items: [
                {
                    text: 'Fit And Fun', data: { tab: 'fitandfun' },
                    items: [
                        { text: 'Maylis & Stéphane', data: { tab: 'fitness' } },
                        { text: 'Cardio Boxing', data: { tab: 'cardioboxing' } }
                    ]
                },
                {
                    text: 'Twerk', data: { tab: 'twerk' },
                    items: [
                        { text: 'Maylis', data: { tab: 'twerk' } },
                        { text: 'Twerk', data: { tab: 'twerkvideos' } },
                    ]
                },
                {
                    text: 'Commercial', data: { tab: 'commercial' },
                    items: [
                        { text: 'Sarah', data: { tab: 'commercial' } },
                    ]
                },
                {
                    text: 'Cerceau Aérien', data: { tab: 'cerceauaerien' },
                    items: [
                        { text: 'Maylis', data: { tab: 'cerceauaerien' } },
                    ]
                },
                {
                    text: 'Pole Dance', data: { tab: 'poledance' },
                    items: [
                        { text: 'Maylis', data: { tab: 'poledance' } },
                    ]
                },
                {
                    text: 'Heels', data: { tab: 'heels' },
                    items: [
                        { text: 'Déborah', data: { tab: 'heels' } },
                        { text: 'Heels', data: { tab: 'heelsvideos' } },
                    ]
                }
            ]
        },
        { text: 'Planning/Réservation', data: { tab: 'planning' } },
        { text: 'Nos offres', data: { tab: 'offers' } },
        { text: 'Qui sommes-nous ?', data: { tab: 'about' } },
    ];

    const renderMenuItems = (items: MenuItem[], level = 0, parentKey = '') => {
        return items.map((item) => {
            const key = `${parentKey}${item.data.tab}`;
            const hasChildren = item.items && item.items.length > 0;
            const isOpen = openMenus[key];
    
            return (
                <div
                    key={key}
                    className="menu-item"
                    onClick={(e) => {
                        e.stopPropagation();
                        if (hasChildren) {
                            handleMenuToggle(key, level);
                        } else {
                            handleTabChange(item.data.tab);
                        }
                    }}
                >
                    <div className="menu-title">
                        <span className="highlight-text">{item.text}</span>
                        {hasChildren && (
                            <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronRight} className="chevron-icon" />
                        )}
                    </div>
                    {hasChildren && isOpen && (
                        <div className="sub-menu">
                            {renderMenuItems(item.items as MenuItem[], level + 1, `${key}.`)}
                        </div>
                    )}
                </div>
            );
        });
    };
    
    

    return (
        <div className="homepage-container">
            <Helmet>
                <title>Studio Gris - Fitness, Danse & Coaching Personnalisé</title>
                <meta name="description" content="Cours de fitness, Renforcement musculaire, Cardio-training, Stretching, Pilate, Danse aérienne, Pole dance, Coaching sportif, Bien-être et santé, Perte de poids" />
                <meta name="robots" content="index, follow" />
                
                {/* Balises Open Graph pour le partage sur Facebook */}
                <meta property="og:title" content="Studio Gris - Fitness, Danse & Coaching Personnalisé" />
                <meta property="og:description" content="Cours de fitness, Renforcement musculaire, Cardio-training, Stretching, Pilate, Danse aérienne, Pole dance, Coaching sportif, Bien-être et santé, Perte de poids" />
                <meta property="og:url" content="https://www.studiogris.fr" />
                <meta property="og:image" content="https://www.studiogris.fr/medias/logo/logo_studio_gris.jpg" />

                {/* Balises Twitter Card pour le partage sur Twitter */}
                <meta name="twitter:title" content="Studio Gris - Fitness, Danse & Coaching" />
                <meta name="twitter:description" content="Cours de fitness, Renforcement musculaire, Cardio-training, Stretching, Pilate, Danse aérienne, Pole dance, Coaching sportif, Bien-être et santé, Perte de poids" />
                <meta name="twitter:image" content="https://www.studiogris.fr/medias/logo/logo_studio_gris.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <header className="homepage-header">
                <div className="logo-toggle-wrapper">
                    <img src={'/medias/logo/logo_studio_gris.jpg'} alt="Fitness" className="homepage-logo" />
                    <div className="menu-toggle" onClick={toggleMenu}>☰</div>
                </div>
                {isMenuOpen && (
                    <div className="menu-content">
                        {renderMenuItems(menuItems)}
                    </div>
                )}
                <div className="header-title">STUDIO DE DANSES ET FITNESS</div>
                <div className="social-media">
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
                {activeTab === 'fitness' && <FitAndFunCoach_Form />}
                {activeTab === 'cardioboxing' && <CardioBoxing_Videos />}
                {activeTab === 'twerk' && <TwerkCoach_Form />}
                {activeTab === 'twerkvideos' && <Twerk_Videos />}
                {activeTab === 'commercial' && <CommercialCoach_Form />}
                {activeTab === 'cerceauaerien' && <CerceauAerienCoach_Form />}
                {activeTab === 'heels' && <HeelsCoach_Form />}
                {activeTab === 'heelsvideos' && <Heels_Videos />}
                {activeTab === 'about' && <AProposForm />}
                {activeTab === 'home' && <HomeStudioGrisForm />}
                {activeTab === 'planning' && <Planning_Form />}
                {activeTab === 'contact' && <ContactForm />}
                {activeTab === 'poledance' && <PoleDanceCoach_Form />}
                {activeTab === 'offers' && <Offers_Form />}
            </div>

            <div className="homepage-cta">
                <Button className="cta-button-secondary" onClick={() => setActiveTab('contact')}>Contact</Button>
            </div>

            <Chatbot />
        </div>
    );
};

export default HomePage;
