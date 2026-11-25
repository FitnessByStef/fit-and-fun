import { Discipline, disciplines } from './studio';

export const offerCategories = [
  { id: 'danse-aerien', label: 'Danse & Aérien' },
  { id: 'fitness', label: 'Fitness' },
  { id: 'mixte', label: 'Mixte' },
  { id: 'kids', label: 'Kids' },
  { id: 'cartes-seances', label: 'Cartes & Séances' },
] as const;

export type OfferCategory = typeof offerCategories[number]['id'];

interface Offer {
  id: string;
  name: string;
  category: OfferCategory;
  type: 'abonnement' | 'carte' | 'séance' | 'autre';
  price: number;
  billing?: 'mois';
  included?: number;
  free?: number;
  commitment?: 'Avec engagement' | 'Sans engagement';
  commitmentDuration?: string;
  validity?: string;
  audience?: 'adultes' | 'enfants';
  compatibleDisciplines?: readonly Discipline[];
  subscription?: { url: string; platformId: string };
  termsConfirmed?: boolean;
  order?: number;
  active?: boolean;
}

const subscriptions: Offer[] = [
  { id: 'essentiel-danse', name: 'Essentiel Danse', category: 'danse-aerien', type: 'abonnement', price: 40, billing: 'mois', included: 4 },
  { id: 'danse-sans-engagement', name: 'Danse sans engagement', category: 'danse-aerien', type: 'abonnement', price: 44, billing: 'mois', included: 4, commitment: 'Sans engagement' },
  { id: 'essentiel-pole-dance', name: 'Essentiel Pole Dance', category: 'danse-aerien', type: 'abonnement', price: 52, billing: 'mois', included: 4 },
  { id: 'envol', name: 'Envol', category: 'danse-aerien', type: 'abonnement', price: 60, billing: 'mois', included: 6 },
  { id: 'eclat', name: 'Éclat', category: 'danse-aerien', type: 'abonnement', price: 85, billing: 'mois', included: 6 },
  { id: 'fit-fun-engagement', name: 'Fit & Fun', category: 'fitness', type: 'abonnement', price: 38, billing: 'mois', commitment: 'Avec engagement' },
  { id: 'fit-fun-sans-engagement', name: 'Fit & Fun', category: 'fitness', type: 'abonnement', price: 44, billing: 'mois', commitment: 'Sans engagement' },
  { id: 'fit-aerien', name: 'Fit & Aérien', category: 'mixte', type: 'abonnement', price: 55, billing: 'mois', included: 8 },
  { id: 'danse-kids-2', name: 'Danse Kids', category: 'kids', type: 'abonnement', price: 22, billing: 'mois', included: 2, audience: 'enfants' },
  { id: 'danse-kids-4', name: 'Danse Kids', category: 'kids', type: 'abonnement', price: 35, billing: 'mois', included: 4, audience: 'enfants' },
];

export const offers: readonly Offer[] = [
  ...subscriptions,
  { id: 'essai', name: 'Cours d’essai', category: 'cartes-seances', type: 'séance', included: 1, price: 10 },
  { id: 'unite-adulte', name: 'Cours à l’unité adulte', category: 'cartes-seances', type: 'séance', included: 1, price: 18, audience: 'adultes' },
  { id: 'unite-enfant', name: 'Cours à l’unité enfant', category: 'cartes-seances', type: 'séance', included: 1, price: 14, audience: 'enfants' },
  { id: 'adulte-5', name: 'Carte adulte 5 séances', category: 'cartes-seances', type: 'carte', included: 5, price: 75, audience: 'adultes' },
  { id: 'adulte-11', name: 'Carte adulte 10 + 1 offerte', category: 'cartes-seances', type: 'carte', included: 11, free: 1, price: 165, audience: 'adultes' },
  { id: 'enfant-11', name: 'Carte enfant 10 + 1 offerte', category: 'cartes-seances', type: 'carte', included: 11, free: 1, price: 130, audience: 'enfants' },
  { id: 'ffd', name: 'Carte Fédération française de danse', category: 'cartes-seances', type: 'autre', price: 24 },
];

export const offersPath = (category: OfferCategory) => category === 'danse-aerien' ? '/offers' : '/offers/' + category;
export const courseOffersPath = (course: Discipline) =>
  offersPath(course === 'kids' ? 'kids' : disciplines[course].group === 'Fitness' ? 'fitness' : 'danse-aerien');

export function activeOffers(category: OfferCategory) {
  return offers.filter(offer => offer.category === category && offer.active !== false)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export const formatOfferPrice = (price: number) =>
  new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(price);
