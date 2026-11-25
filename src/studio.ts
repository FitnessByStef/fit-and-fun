import studio from './studio-config.json';

export { studio };
export const fitnessUniverseImage = '/medias/accueil/fitness.webp';
export const eventImage = '/medias/studio/evjf-girls-night.jpeg';
export const eventImageAlt = 'EVJF & Girls Night, rubans roses et boule à facettes';

export const universePaths = { aerial: '/cours/danse-aerien', fitness: '/cours/fitness' };

export const navigation = [
  ['/', 'Accueil'], ['/planning', 'Planning'], ['/offers', 'Offres'],
  ['/about', 'L’équipe'], ['/evjf-girls-night', 'EVJF & Girls Night'], ['/contact', 'Contact'],
];

export const disciplines = {
  pole: { name: 'Pole Dance', slug: 'pole-dance', group: 'Danse & aérien', image: '/medias/cours/Pole/Pole1.jpeg' },
  cerceau: { name: 'Cerceau aérien', slug: 'cerceau-aerien', group: 'Danse & aérien', image: '/medias/cours/Cerceau Aerien/CerceauAerien.jpeg' },
  kids: { name: 'Danses aériennes Kids', slug: 'danses-aeriennes-kids', group: 'Danse & aérien', image: '/medias/cours/Cerceau enfant/CerceauEnfant1.jpeg' },
  commerciale: { name: 'Danse commerciale', slug: 'danse-commerciale', group: 'Danse & aérien', image: '/medias/coachs/sarah-danse-commerciale.jpeg' },
  power: { name: 'PowerPulse', slug: 'powerpulse', group: 'Fitness', image: '/medias/cours/Powerpulse/Powerpulse1.jpeg' },
  circuit: { name: 'Circuit athlétique', slug: 'circuit-athletique', group: 'Fitness', image: '/medias/cours/Athletic/Athletic.jpeg' },
  boxing: { name: 'Cardio Boxing', slug: 'cardio-boxing', group: 'Fitness', image: '/medias/cours/CardioBoxing/CardioBoxing1.jpeg' },
};

export type Discipline = keyof typeof disciplines;
export const groups = ['Danse & aérien', 'Fitness'];
export const coursePath = (slug: string) => '/cours/' + slug;
export const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
interface Session {
  day: number;
  start: string;
  end: string;
  course: Discipline;
  detail: string;
}
export const sessions: Session[] = [
  { day: 0, start: '19:00', end: '20:00', course: 'pole', detail: 'Débutant' },
  { day: 0, start: '20:00', end: '21:00', course: 'cerceau', detail: 'Tous niveaux' },
  { day: 1, start: '19:00', end: '19:45', course: 'power', detail: 'Fit & Fun – Renforcement en musique' },
  { day: 2, start: '17:00', end: '18:00', course: 'kids', detail: 'Enfants' },
  { day: 2, start: '18:30', end: '19:15', course: 'circuit', detail: 'Fitness' },
  { day: 2, start: '19:30', end: '20:30', course: 'commerciale', detail: 'Danse' },
  { day: 3, start: '19:00', end: '19:45', course: 'boxing', detail: 'Fit & Fun' },
  { day: 4, start: '19:30', end: '20:30', course: 'pole', detail: 'Tous niveaux' },
  { day: 5, start: '10:00', end: '11:00', course: 'kids', detail: 'Enfants' },
];
export const formatTime = (time: string) => time.replace(':', 'h');
export const emailLink = (subject?: string) =>
  'mailto:' + studio.email + (subject ? '?subject=' + encodeURIComponent(subject) : '');
