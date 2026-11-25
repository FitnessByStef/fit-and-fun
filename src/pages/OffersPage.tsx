import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { activeOffers, formatOfferPrice, offerCategories, offersPath } from '../offers';
import { emailLink } from '../studio';
import '../styles/offers.css';

function OfferCard({ offer }: { offer: ReturnType<typeof activeOffers>[number] }) {
  const price = formatOfferPrice(offer.price);
  const quantity = offer.included && (offer.billing ? offer.included + ' cours par mois' : offer.included + (offer.included === 1 ? ' séance' : ' séances'));
  const subject = ['Offre Studio Gris', offer.name, price + (offer.billing ? ' / mois' : ''), offer.commitment].filter(Boolean).join(' – ');
  const action = offer.termsConfirmed && offer.subscription;

  return <article className="offer-card">
    <h3>{offer.name}</h3>
    <p className="offer-price"><strong>{price}</strong>{offer.billing && <span> / mois</span>}</p>
    {quantity && <p>{quantity}</p>}
    {offer.commitment && <p>{offer.commitment}{offer.commitmentDuration ? ' · ' + offer.commitmentDuration : ''}</p>}
    {offer.validity && <p>{offer.validity}</p>}
    {offer.free && <p className="offer-free">{offer.free} séance offerte</p>}
    <a className="offer-action" href={action ? action.url : emailLink(subject)}
      aria-label={(action ? 'Choisir ' : 'Contacter le studio pour ') + offer.name + ', ' + price + (offer.billing ? ' par mois' : '')}>
      {action ? (offer.type === 'carte' ? 'Choisir cette carte' : 'Choisir cette formule') : 'Contacter le studio'}
    </a>
  </article>;
}

export default function OffersPage() {
  const [params] = useSearchParams();
  const { pathname } = useLocation();
  const path = pathname.replace(/\/$/, '');
  const category = offerCategories.find(item => path === offersPath(item.id) && item.id !== 'danse-aerien')
    || offerCategories.find(item => item.id === params.get('categorie')) || offerCategories[0];
  const catalog = activeOffers(category.id);
  const lessonOffers = catalog.filter(offer => offer.type !== 'autre');
  const otherOffers = catalog.filter(offer => offer.type === 'autre');

  return <div className="studio-container catalog">
    <section className="catalog-heading">
      <h1>Nos offres</h1>
      <p>Trouvez la formule qui vous ressemble.</p>
    </section>
    <nav className="offer-categories" aria-label="Catégories des offres">
      {offerCategories.map(item => <Link key={item.id} to={offersPath(item.id)} preventScrollReset
        aria-current={category.id === item.id ? 'true' : undefined}>{item.label}</Link>)}
    </nav>
    <section className="catalog-section" aria-labelledby="current-category">
      <h2 id="current-category">{category.label}</h2>
      <div className="offer-grid">{lessonOffers.map(offer => <OfferCard key={offer.id} offer={offer} />)}</div>
    </section>
    {otherOffers.length > 0 && <section className="catalog-section">
      <h2>Fédération française de danse</h2>
      <div className="offer-grid">{otherOffers.map(offer => <OfferCard key={offer.id} offer={offer} />)}</div>
    </section>}
  </div>;
}
