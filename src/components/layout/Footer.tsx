import '../../styles/footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">

        {/* LOGO + POSITIONNEMENT */}
        <div className="footer-block">
          <h3 className="footer-logo">Studio Gris</h3>
          <p>
            Studio de danse, fitness et bien-être à Thèze.
          </p>
          <p className="footer-muted">
            Un lieu pour bouger, progresser et prendre confiance.
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="footer-block">
          <h4>Navigation</h4>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/planning">Planning</a></li>
            <li><a href="/offers">Offres</a></li>
            <li><a href="/about">Qui sommes-nous</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        {/* COURS */}
        <div className="footer-block">
          <h4>Les cours</h4>
          <ul>
            <li><a href="/cours/pole-dance">Pole Dance</a></li>
            <li><a href="/cours/cerceau-aerien">Cerceau aérien</a></li>
            <li><a href="/cours/heels">Heels</a></li>
            <li><a href="/cours/powerpulse">Powerpulse</a></li>
            <li><a href="/cours/athletic">Athletic</a></li>
          </ul>
        </div>

        {/* CONTACT + CTA */}
        <div className="footer-block">
          <h4>Contact</h4>

          <p>📍 Thèze (64)</p>

          <p>
            <a href="tel:+33781577673">📞 07 81 57 76 73</a>
          </p>

          <p>
            <a href="mailto:lafuente.sante@gmail.com">
              ✉️ Envoyer un email
            </a>
          </p>

          <div className="footer-socials">
            <a
              href="https://www.instagram.com/le_studiogris/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61559492342771"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>

          <a
            href="https://studio-gris.sportigo.fr/"
            target="_blank"
            rel="noreferrer"
            className="footer-cta"
          >
            Réserver une séance
          </a>
        </div>
      </div>

      {/* BAS DE PAGE */}
      <div className="site-footer__bottom">
        <p>© {new Date().getFullYear()} Studio Gris — Tous droits réservés</p>
      </div>
    </footer>
  );
};

export default Footer;