import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SiteLayout from './components/layout/SiteLayout';
import HomePage from './pages/HomePage';
import PowerpulsePage from './pages/PowerpulsePage';
import AthleticPage from './pages/AthleticPage';
import CerceauAerienPage from './pages/CerceauAerienPage';
import PoleDancePage from './pages/PoleDancePage';
import CerceauEnfantPage from './pages/CerceauEnfantPage';
import HeelsPage from './pages/HeelsPage';
import CardioBoxingPage from './pages/CardioBoxingPage';
import FlowPilatesPage from './pages/FlowPilatesPage';
import StretchingPage from './pages/StretchingPage';
import PlanningPage from './pages/PlanningPage';
import OffersPage from './pages/OffersPage';
import AboutPage from './pages/AboutPage';
import FaqPage from './pages/FaqPage';
import MaylisPage from './pages/MaylisPage';
import StephanePage from './pages/StephanePage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cours/powerpulse" element={<PowerpulsePage />} />
          <Route path="/cours/athletic" element={<AthleticPage />} />
          <Route path="/cours/cerceau-aerien" element={<CerceauAerienPage />} />
          <Route path="/cours/pole-dance" element={<PoleDancePage />} />
          <Route path="/cours/cerceau-enfant" element={<CerceauEnfantPage />} />
          <Route path="/cours/heels" element={<HeelsPage />} />
          <Route path="/cours/cardio-boxing" element={<CardioBoxingPage />} />
          <Route path="/cours/flow-pilate" element={<FlowPilatesPage />} />
          <Route path="/cours/stretching" element={<StretchingPage />} />
          <Route path="/planning" element={<PlanningPage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/coachs/maylis" element={<MaylisPage />} />
          <Route path="/coachs/stephane" element={<StephanePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;