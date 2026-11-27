import pages from './seo.json';
import { coursePath, disciplines, studio, universePaths } from './studio';

export const canonicalUrl = (path: string) => new URL(path === '/' ? '/' : path + '/', studio.url).href;
export const imageUrl = (path: string) => new URL(path, studio.url).href;
export const notFoundPath = '/404.html';

const siteId = canonicalUrl('/') + '#site';
const studioId = canonicalUrl('/') + '#studio';
const localBusiness = {
  '@type': 'SportsActivityLocation',
  '@id': studioId,
  name: 'Le Studio Gris',
  url: canonicalUrl('/'),
  image: [imageUrl('/medias/studio/Salle_StudioGris.jpg'), imageUrl(studio.darkLogo)],
  logo: imageUrl(studio.darkLogo),
  telephone: studio.tel.replace('tel:', ''),
  email: studio.email,
  sameAs: [studio.instagram, studio.facebook],
  address: {
    '@type': 'PostalAddress',
    streetAddress: studio.address,
    postalCode: '64450',
    addressLocality: 'Thèze',
    addressRegion: 'Nouvelle-Aquitaine',
    addressCountry: 'FR',
  },
};

export function pageMetadata(path: string) {
  return Object.prototype.hasOwnProperty.call(pages, path) ? pages[path as keyof typeof pages] : undefined;
}

export function breadcrumbs(path: string, title: string) {
  const course = Object.values(disciplines).find(item => coursePath(item.slug) === path);
  if (course?.slug === disciplines.commerciale.slug) return [{ path: '/', label: 'Accueil' }, { path, label: course.name }];
  const parent = course
    ? { path: course.group === 'Fitness' ? universePaths.fitness : universePaths.aerial, label: course.group === 'Fitness' ? course.group : 'Aérien' }
    : path.startsWith('/coachs/') ? { path: '/about', label: 'L’équipe' } : null;
  return parent ? [{ path: '/', label: 'Accueil' }, parent, { path, label: course?.name ?? title.split(',')[0] }] : [];
}

export function structuredData(path: string, title: string, description: string) {
  const url = canonicalUrl(path);
  const trail = breadcrumbs(path, title);
  const breadcrumbId = url + '#fil-ariane';
  return {
    '@context': 'https://schema.org',
    '@graph': [
      ...(path === '/' || path === '/contact' ? [localBusiness] : []),
      { '@type': 'WebSite', '@id': siteId, name: 'Le Studio Gris', url: canonicalUrl('/'), inLanguage: 'fr-FR', publisher: { '@id': studioId } },
      {
        '@type': path === '/contact' ? 'ContactPage' : path === '/about' ? 'AboutPage' : 'WebPage',
        '@id': url + '#page', url, name: title, description, inLanguage: 'fr-FR',
        isPartOf: { '@id': siteId }, about: { '@id': studioId },
        ...(trail.length ? { breadcrumb: { '@id': breadcrumbId } } : {}),
      },
      ...(trail.length ? [{
        '@type': 'BreadcrumbList',
        '@id': breadcrumbId,
        itemListElement: trail.map(({ label, path: item }, index) => ({
          '@type': 'ListItem', position: index + 1, name: label, item: canonicalUrl(item),
        })),
      }] : []),
    ],
  };
}
