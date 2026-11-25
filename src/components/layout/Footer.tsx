import { Link } from 'react-router-dom';
import SocialLinks from '../common/SocialLinks';
import { coursePath, disciplines, emailLink, navigation, studio } from '../../studio';
import '../../styles/footer.css';

export default function Footer() {
  return <footer className="site-footer">
    <div className="site-footer__inner">
      <div className="footer-block">
        <Link to="/" className="site-logo"><img src={studio.logo} width="591" height="591" loading="lazy" alt="Le Studio Gris, accueil" /></Link>
        <p>Danse, aérien et fitness à Thèze.</p>
      </div>
      <nav className="footer-block" aria-label="Navigation de pied de page">
        <h2>Le studio</h2>
        <ul>{[...navigation, ['/faq', 'FAQ']].map(([path, label]) => <li key={path}><Link to={path}>{label}</Link></li>)}</ul>
      </nav>
      <nav className="footer-block" aria-label="Disciplines">
        <h2>Les cours</h2>
        <ul>{Object.values(disciplines).map(course => <li key={course.slug}><Link to={coursePath(course.slug)}>{course.name}</Link></li>)}</ul>
      </nav>
      <div className="footer-block">
        <h2>Contact</h2>
        <p>{studio.address}<br />{studio.city}</p>
        <p><a href={studio.tel}>{studio.phone}</a></p>
        <p><a href={emailLink()}>{studio.email}</a></p>
        <SocialLinks />
        <a className="footer-booking" href={studio.booking} target="_blank" rel="noreferrer">Réserver une séance</a>
      </div>
    </div>
    <div className="site-footer__bottom"><p>© {new Date().getFullYear()} Le Studio Gris</p></div>
  </footer>;
}
