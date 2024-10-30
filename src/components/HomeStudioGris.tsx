import './CarrouselStudioGris.css';
import CarrouselImg from './CarrouselImg';

const HomeStudioGrisForm: React.FC = () => {
    
    const images = [
        '/medias/batiment/BarEtage_StudioGris.jpg',
        '/medias/batiment/BarEtage2_StudioGris.jpg',
        '/medias/batiment/Escalier_StudioGris.jpg',
        '/medias/batiment/Salle_StudioGris.jpg',
        '/medias/batiment/Plafond_StudioGris.jpg',
        '/medias/batiment/CoinSalon_StudioGris.jpg'
    ];

    
    return (
        <div className="aproposform">
            <h2 className="formheader"><span className="feature-pinkname">ACCUEIL</span></h2>

            {/* Section Features */}
            <section className="homepage-features">
                <CarrouselImg images={images} />

                <div className="feature-card" id="commercial">
                    <h3><span className="feature-pinkname">Le Studio Gris</span></h3>
                    <p>
                        Notre studio climatisé de 150m2, avec une hauteur sous plafond de 6 mètres, offre un cadre unique. Le plafond étoilé crée une ambiance idéale pour vos séances de stretching et de relaxation.
                        <br /><br />
                        A l'étage, un espace détente ainsi qu'un bar sont à votre disposition pour vous restaurer dans un environnement apaisant.
                        <br /><br />
                        Nous proposons également un grand parking gratuit, sécurisé et sous vidéo-surveillance, pour garantir votre tranquillité.
                        <br /><br />
                        Le tout à seulement 12 minutes au nord de Serres-Castet et à 2 minutes de la sortie d'autoroute de Thèze, pour un accès facile et rapide.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default HomeStudioGrisForm;
