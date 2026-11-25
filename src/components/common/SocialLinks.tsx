import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { studio } from '../../studio';

export default function SocialLinks() {
  return <div className="studio-socials">
    <a className="social-instagram" aria-label="Instagram du Studio Gris" href={studio.instagram} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
    <a className="social-facebook" aria-label="Facebook du Studio Gris" href={studio.facebook} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
  </div>;
}
