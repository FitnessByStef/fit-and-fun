import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import SocialLinks from '../common/SocialLinks';
import { coursePath, disciplines, fitnessUniverseImage, groups, navigation, studio, universePaths } from '../../studio';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const nav = useRef<HTMLElement>(null);
  const coursesButton = useRef<HTMLButtonElement>(null);
  const burger = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  const closeMenus = () => {
    setMobileOpen(false);
    setCoursesOpen(false);
  };

  useEffect(closeMenus, [location.key]);
  useEffect(() => {
    if (mobileOpen) nav.current?.querySelector('a')?.focus();
  }, [mobileOpen]);
  useEffect(() => {
    function dismiss(event: PointerEvent) {
      if (!header.current?.contains(event.target as Node)) closeMenus();
    }
    document.addEventListener('pointerdown', dismiss);
    return () => document.removeEventListener('pointerdown', dismiss);
  }, []);

  return (
    <header ref={header} className="site-header" onKeyDown={event => {
      if (event.key !== 'Escape') return;
      if (coursesOpen) {
        setCoursesOpen(false);
        coursesButton.current?.focus();
      } else if (mobileOpen) {
        closeMenus();
        burger.current?.focus();
      }
    }}>
      <div className="site-header__inner">
        <Link to="/" className="site-logo" onClick={closeMenus}>
          <img src={studio.logo} width="591" height="591" alt="Le Studio Gris, accueil" />
        </Link>
        <nav ref={nav} id="main-navigation" aria-label="Navigation principale" className={mobileOpen ? 'site-nav is-open' : 'site-nav'}>
          <NavLink to="/" end onClick={closeMenus}>Accueil</NavLink>
          <div className="site-nav__dropdown">
            <button ref={coursesButton} className="site-nav__dropdown-trigger" type="button" aria-expanded={coursesOpen}
              aria-controls="course-navigation" onClick={() => setCoursesOpen(!coursesOpen)}>Cours <span aria-hidden="true">▾</span></button>
            <div id="course-navigation" className={coursesOpen ? 'site-nav__dropdown-menu is-open' : 'site-nav__dropdown-menu'}>
              {groups.map((group, index) => <div className="site-nav__dropdown-column" key={group}>
                <Link className="dropdown-universe" to={index === 0 ? universePaths.aerial : universePaths.fitness} onClick={closeMenus}>
                  <img src={index === 0 ? '/medias/accueil/danse-aerien.webp' : fitnessUniverseImage} alt="" loading="lazy" className={index === 1 ? 'dropdown-fitness-image' : undefined} />
                  <span>{group}</span>
                </Link>
                {Object.values(disciplines).filter(course => course.group === group).map(course =>
                  <NavLink key={course.slug} to={coursePath(course.slug)} onClick={closeMenus}>{course.name}</NavLink>
                )}
              </div>)}
            </div>
          </div>
          {navigation.slice(1).map(([path, label]) => <NavLink key={path} to={path} onClick={closeMenus}>{label}</NavLink>)}
        </nav>
        <div className="header-actions">
          <SocialLinks />
          <a className="site-nav__cta" href={studio.booking} target="_blank" rel="noreferrer" onClick={closeMenus}>Réserver</a>
          <button ref={burger} className="burger" type="button" aria-controls="main-navigation" aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'} onClick={() => {
              setMobileOpen(!mobileOpen);
              setCoursesOpen(false);
            }}>
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
