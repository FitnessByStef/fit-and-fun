import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Chatbot from '../common/ChatBot';
import { breadcrumbs, canonicalUrl, imageUrl, pageMetadata, structuredData } from '../../metadata';
import { offerCategories, offersPath } from '../../offers';
import { studio } from '../../studio';
import '../../styles/layout.css';

export default function SiteLayout() {
  const { pathname, hash, search } = useLocation();
  const path = pathname.replace(/\/$/, '') || '/';
  const legacyCategory = path === '/offers' ? new URLSearchParams(search).get('categorie') : null;
  const category = offerCategories.find(item => item.id === legacyCategory);
  const contentPath = category ? offersPath(category.id) : path;
  const metadata = pageMetadata(contentPath);
  const [title, description, image = studio.darkLogo, imageAlt = 'Le Studio Gris à Thèze'] =
    metadata ?? ['Page introuvable | Le Studio Gris', 'Cette page du site Le Studio Gris est introuvable.'];
  const trail = metadata ? breadcrumbs(path, title.split(' | ')[0]) : [];

  const scrollPath = path.startsWith('/offers/') ? '/offers' : path;
  useEffect(() => {
    const anchor = hash && document.getElementById(hash.slice(1));
    if (anchor) anchor.scrollIntoView({ block: 'start' });
    else window.scrollTo(0, 0);
  }, [scrollPath, hash]);

  return <div className="site-shell">
    {metadata ? <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content="Le Studio Gris" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl(image)} />
        <meta property="og:image:alt" content={imageAlt} />
        <meta property="og:url" content={canonicalUrl(contentPath)} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={canonicalUrl(contentPath)} />
        {path === '/' && <link rel="preload" as="image" href="/medias/accueil/salle.webp" />}
        <script type="application/ld+json">{JSON.stringify(structuredData(contentPath, title.split(' | ')[0], description)).replace(/</g, '\\u003c')}</script>
    </Helmet> : <Helmet><title>{title}</title><meta name="robots" content="noindex" /></Helmet>}
    <a className="skip-link" href="#main-content">Aller au contenu</a>
    <Header />
    <main id="main-content" className="site-main" tabIndex={-1}>
      {trail.length > 0 && <nav className="studio-container breadcrumb" aria-label="Fil d’Ariane">
        <ol>{trail.map((item, index) => <li key={item.path}>
          {index === trail.length - 1 ? <span aria-current="page">{item.label}</span> : <Link to={item.path}>{item.label}</Link>}
        </li>)}</ol>
      </nav>}
      <Outlet />
    </main>
    <Footer />
    <Chatbot />
  </div>;
}
