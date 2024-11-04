import './CarrouselStudioGris.css';
import CarrouselImg from './CarrouselImg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faContactCard } from '@fortawesome/free-solid-svg-icons';

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
                
                <div className="feature-card-center" id="contact">
                    <p>
                    <span className="feature-pinkname-title">LE STUDIO GRIS</span>
                        <br />
                        <br />9 route de Lalonquette
                        <br />
                        64450 THEZE
                        <br />
                        <br />
                        <FontAwesomeIcon icon={faWhatsapp} size="2x" /> 07 81 57 76 73
                        <br />
                        <br />
                        <FontAwesomeIcon icon={faContactCard} size="2x" /> lafuente.sante@gmail.com
                    </p>
                </div>
            </section>
        </div>
    );
}
export default ContactForm;