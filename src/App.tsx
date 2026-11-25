import { Link, Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from './components/layout/SiteLayout';
import CourseSchedule from './components/common/CourseSchedule';
import HomePage from './pages/HomePage';
import PowerpulsePage from './pages/PowerpulsePage';
import AthleticPage from './pages/AthleticPage';
import CerceauAerienPage from './pages/CerceauAerienPage';
import PoleDancePage from './pages/PoleDancePage';
import CerceauEnfantPage from './pages/CerceauEnfantPage';
import CommercialDancePage from './pages/CommercialDancePage';
import CardioBoxingPage from './pages/CardioBoxingPage';
import PlanningPage from './pages/PlanningPage';
import OffersPage from './pages/OffersPage';
import AboutPage from './pages/AboutPage';
import FaqPage from './pages/FaqPage';
import CoachProfilePage from './pages/CoachProfilePage';
import { coaches } from './coaches';
import StephanePage from './pages/StephanePage';
import ContactPage from './pages/ContactPage';
import EventPage from './pages/EventPage';
import UniversePage from './pages/UniversePage';
import { coursePath, Discipline, disciplines, universePaths } from './studio';
import redirects from './redirects.json';
import { offerCategories, offersPath } from './offers';
import './styles/studio.css';

const coursePages = {
  pole: PoleDancePage,
  cerceau: CerceauAerienPage,
  kids: CerceauEnfantPage,
  commerciale: CommercialDancePage,
  power: PowerpulsePage,
  circuit: AthleticPage,
  boxing: CardioBoxingPage,
};

export default function App() {
  return <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        {(Object.keys(coursePages) as Discipline[]).map(course => {
          const Page = coursePages[course];
          return <Route key={course} path={coursePath(disciplines[course].slug)}
            element={<><Page /><CourseSchedule course={course} /></>} />;
        })}
        <Route path={universePaths.aerial} element={<UniversePage />} />
        <Route path={universePaths.fitness} element={<UniversePage fitness />} />
        <Route path="/planning" element={<PlanningPage />} />
        <Route path="/offers" element={<OffersPage />} />
        {offerCategories.slice(1).map(category => <Route key={category.id} path={offersPath(category.id)} element={<OffersPage />} />)}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/evjf-girls-night" element={<EventPage />} />
        <Route path={coaches.sarah.path} element={<CoachProfilePage coachId="sarah" />} />
        <Route path={coaches.sophie.path} element={<CoachProfilePage coachId="sophie" />} />
        <Route path="/coachs/stephane" element={<StephanePage />} />
        {Object.entries(redirects).map(([from, to]) => <Route key={from} path={from} element={<Navigate replace to={to} />} />)}
        <Route path="*" element={<div className="studio-container page-heading"><h1>Page introuvable</h1><p>Retrouvez les disciplines, les horaires ou les tarifs depuis les liens du site.</p><Link className="primary-button" to="/">Retour à l’accueil</Link></div>} />
      </Route>
  </Routes>;
}
