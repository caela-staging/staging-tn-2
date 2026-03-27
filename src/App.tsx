import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Coaching } from './pages/Coaching';
import { WhoWeServe } from './pages/WhoWeServe';
import { HvacPage } from './pages/trades/HvacPage';
import { PlumbingPage } from './pages/trades/PlumbingPage';
import { ElectricalPage } from './pages/trades/ElectricalPage';
import { GarageDoorsPage } from './pages/trades/GarageDoorsPage';
import { OtherTradesPage } from './pages/trades/OtherTradesPage';
import { CsrCoachingPage } from './pages/coaching/CsrCoachingPage';
import { BusinessCoachingPage } from './pages/coaching/BusinessCoachingPage';
import { SalesCoachingPage } from './pages/coaching/SalesCoachingPage';
import { TrainingCoachingPage } from './pages/coaching/TrainingCoachingPage';
import { MarketingCoachingPage } from './pages/coaching/MarketingCoachingPage';
import { Connect } from './pages/Connect';
import { About } from './pages/About';
import { Events } from './pages/Events';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsAndConditions } from './pages/TermsAndConditions';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Placeholder routes for other pages */}
            <Route path="/about" element={<About />} />
            <Route path="/coaching" element={<Coaching />} />
            <Route path="/coaching/csr" element={<CsrCoachingPage />} />
            <Route path="/coaching/business" element={<BusinessCoachingPage />} />
            <Route path="/coaching/sales" element={<SalesCoachingPage />} />
            <Route path="/coaching/training" element={<TrainingCoachingPage />} />
            <Route path="/coaching/marketing" element={<MarketingCoachingPage />} />
            <Route path="/who-we-serve" element={<WhoWeServe />} />
            <Route path="/who-we-serve/hvac" element={<HvacPage />} />
            <Route path="/who-we-serve/plumbing" element={<PlumbingPage />} />
            <Route path="/who-we-serve/electrical" element={<ElectricalPage />} />
            <Route path="/who-we-serve/garage-doors" element={<GarageDoorsPage />} />
            <Route path="/who-we-serve/other-trades" element={<OtherTradesPage />} />
            <Route path="/events" element={<Events />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
