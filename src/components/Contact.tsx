import './CarrouselStudioGris.css';
import CarrouselImg from './CarrouselImg';

const ContactForm: React.FC = () => {
    
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
            <h2 className="formheader"><span className="feature-pinkname">CONTACT</span></h2>

            {/* Section Features */}
            <section className="homepage-features">
                <CarrouselImg images={images} />
                </section>
                </div>
    );
}
export default ContactForm;