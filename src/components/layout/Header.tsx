import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [teamOpen, setTeamOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const closeAllMenus = () => {
    setMobileOpen(false);
    setCoursesOpen(false);
    setTeamOpen(false);
    setAboutOpen(false);
  };

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="site-logo" onClick={closeAllMenus}>
          <img src="/medias/logo/logo_studio_gris.jpg" alt="Studio Gris" />
        </Link>

        <nav className={`site-nav ${mobileOpen ? 'is-open' : ''}`}>
          <NavLink to="/" onClick={closeAllMenus}>
            Accueil
          </NavLink>

          <div
            className="site-nav__dropdown"
            onMouseEnter={() => setCoursesOpen(true)}
            onMouseLeave={() => setCoursesOpen(false)}
          >
            <button
              type="button"
              className="site-nav__dropdown-trigger"
              onClick={() => setCoursesOpen((prev) => !prev)}
            >
              Cours <span className={`caret ${coursesOpen ? 'is-open' : ''}`}>▾</span>
            </button>

            <div className={`site-nav__dropdown-menu ${coursesOpen ? 'is-open' : ''}`}>

              {/* DANSE */}
              <div className="site-nav__dropdown-column">
                <p className="dropdown-title">Danse & aérien</p>
                <Link to="/cours/pole-dance" onClick={closeAllMenus}>Pole Dance</Link>
                <Link to="/cours/cerceau-enfant" onClick={closeAllMenus}>Cerceau enfant</Link>
                <Link to="/cours/cerceau-aerien" onClick={closeAllMenus}>Cerceau adulte</Link>
                <Link to="/cours/heels" onClick={closeAllMenus}>Heels</Link>
              </div>

              {/* FITNESS */}
              <div className="site-nav__dropdown-column">
                <p className="dropdown-title">Fitness & bien-être</p>
                <Link to="/cours/powerpulse" onClick={closeAllMenus}>Powerpulse</Link>
                <Link to="/cours/flow-pilate" onClick={closeAllMenus}>Flow Pilates</Link>
                <Link to="/cours/athletic" onClick={closeAllMenus}>Athletic</Link>
                <Link to="/cours/cardio-boxing" onClick={closeAllMenus}>Cardio Boxing</Link>
                <Link to="/cours/stretching" onClick={closeAllMenus}>Stretching</Link>
              </div>

              {/* ÉQUIPE */}
              <div className="site-nav__dropdown-column">
                <p className="dropdown-title">Les coachs</p>
                <Link to="/coachs/maylis" onClick={closeAllMenus}>Maylis</Link>
                <Link to="/coachs/stephane" onClick={closeAllMenus}>Stéphane</Link>
              </div>

            </div>
          </div>

          <NavLink to="/planning" onClick={closeAllMenus}>
            Planning
          </NavLink>

          <NavLink to="/offers" onClick={closeAllMenus}>
            Offres
          </NavLink>

          <div
            className="site-nav__dropdown"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button
              type="button"
              className="site-nav__dropdown-trigger"
              onClick={() => setAboutOpen((prev) => !prev)}
            >
              À propos <span className={`caret ${aboutOpen ? 'is-open' : ''}`}>▾</span>
            </button>

            <div className={`site-nav__dropdown-menu site-nav__dropdown-menu--small ${aboutOpen ? 'is-open' : ''}`}>
              <div className="site-nav__dropdown-column">
                <Link to="/about" onClick={closeAllMenus}>Qui sommes-nous ?</Link>
                <Link to="/faq" onClick={closeAllMenus}>FAQ</Link>
              </div>
            </div>
          </div>

          <NavLink to="/contact" onClick={closeAllMenus}>
            Contact
          </NavLink>

          <div className="site-nav__socials">
            <a
              href="https://www.facebook.com/profile.php?id=61559492342771"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook Studio Gris"
              title="Facebook"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.6c0-.9.3-1.6 1.7-1.6h1.8V3.1c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.1H7.2v3.2h3.1V21h3.2z" fill="currentColor" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/le_studiogris/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram Studio Gris"
              title="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm0 2.2A1.8 1.8 0 0 0 5.2 7v10c0 1 .8 1.8 1.8 1.8h10c1 0 1.8-.8 1.8-1.8V7c0-1-.8-1.8-1.8-1.8H7zm10.5 1.3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 7.3A4.7 4.7 0 1 1 7.3 12 4.7 4.7 0 0 1 12 7.3zm0 2.2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>

          <a
            href="https://www.instagram.com/le_studiogris/"
            target="_blank"
            rel="noreferrer"
            className="site-nav__cta"
            onClick={closeAllMenus}
          >
            Réserver
          </a>
        </nav>

        <button
          className="burger"
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Ouvrir le menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Header;