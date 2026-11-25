import { activeOffers, courseOffersPath, offerCategories, offers } from './offers';

test('le catalogue public contient les 10 abonnements et 7 prestations aux tarifs communiqués', () => {
  expect(offers.filter(offer => offer.type === 'abonnement')).toHaveLength(10);
  expect(new Set(offers.map(offer => offer.id)).size).toBe(17);
  expect(offerCategories.map(({ id }) => activeOffers(id).map(offer => offer.price))).toEqual([
    [40, 44, 52, 60, 85], [38, 44], [55], [22, 35], [10, 18, 14, 75, 165, 130, 24],
  ]);
});

test('les deux cartes de 11 séances et la carte fédérale sont représentées séparément', () => {
  const cards = activeOffers('cartes-seances');
  expect(cards.filter(offer => offer.free === 1).map(offer => offer.included)).toEqual([11, 11]);
  expect(cards.find(offer => offer.id === 'ffd')).toMatchObject({ type: 'autre', price: 24 });
  expect(cards.find(offer => offer.id === 'ffd')?.included).toBeUndefined();
});

test('les fiches de cours pointent vers la catégorie pertinente', () => {
  expect(courseOffersPath('kids')).toBe('/offers/kids');
  expect(courseOffersPath('power')).toBe('/offers/fitness');
  expect(courseOffersPath('cerceau')).toBe('/offers');
});
