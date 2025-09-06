import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TruckingPage from './pages/TruckingPage';


// Tax Services
import BusinessTax from './pages/services/tax/BusinessTax.tsx';
import Create1099 from './pages/services/tax/Create1099.tsx';
import PersonalTax from './pages/services/tax/PersonalTax.tsx';
import TaxConsultation from './pages/services/tax/TaxConsultation.tsx';
import TaxID from './pages/services/tax/TaxID.tsx';

// Insurance Services
import Bonds from './pages/services/insurance/Bonds.tsx';
import Commercial from './pages/services/insurance/Commercial.tsx';
import Event from './pages/services/insurance/Event.tsx';
import Life from './pages/services/insurance/Life.tsx';
import PersonalProperty from './pages/services/insurance/PersonalProperty.tsx';

// Real Estate Services
import Buy from './pages/services/realEstate/Buy.tsx';
import Consult from './pages/services/realEstate/Consult.tsx';
import Rent from './pages/services/realEstate/Rent.tsx';
import Sell from './pages/services/realEstate/Sell.tsx';

// Notary Services
import ChildTravel from './pages/services/notary/ChildTravel.tsx';
import GeneralNotary from './pages/services/notary/GeneralNotary.tsx';
import OtherDocuments from './pages/services/notary/OtherDocuments.tsx';
import Power from './pages/services/notary/Power.tsx';

// Legal Document Preparation
import Wills from './pages/services/legal/Wills.tsx';
import Divorce from './pages/services/legal/Divorce.tsx';
import Other from './pages/services/legal/Other.tsx';
import Immigration from './pages/services/legal/Immigration.tsx';

// Business Consulation
import Annual from './pages/services/business/Annual.tsx';
import Labor from './pages/services/business/Labor.tsx';
import OpenClose from './pages/services/business/OpenClose.tsx';
import Secretary from './pages/services/business/Secretary.tsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/trucking-insights" element={<TruckingPage />} />

            {/* Tax Services */}
            <Route path="/business-tax" element={<BusinessTax />} />
            <Route path="/create-1099" element={<Create1099 />} />
            <Route path="/personal-tax" element={<PersonalTax />} />
            <Route path="/tax-consultation" element={<TaxConsultation />} />
            <Route path="/tax-id" element={<TaxID />} />

            {/* Insurance Services */}
            <Route path="/bonds" element={<Bonds />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/event" element={<Event />} />
            <Route path="/life" element={<Life />} />
            <Route path="/personal-property" element={<PersonalProperty />} />

            {/* Real Estate Services */}
            <Route path="/buy-a-house" element={<Buy />} /> 
            <Route path="/real-estate-consultation" element={<Consult />} />
            <Route path="/rent-a-house" element={<Rent />} />
            <Route path="/sell-a-house" element={<Sell />} />

            {/* Notary Services */}
            <Route path="/power-of-attorney" element={<Power />} /> There is a form
            <Route path="/child-travel" element={<ChildTravel />} /> There is a form
            <Route path="/other-documents" element={<OtherDocuments />} /> There is a form
            <Route path="/general-notary" element={<GeneralNotary />} />

            {/* Legal Document Preparation */}
            <Route path="/immigration" element={<Immigration />} />
            <Route path="/wills" element={<Wills />} />
            <Route path="/divorce" element={<Divorce />} />
            <Route path="/other" element={<Other />} />

            {/* Business Consulation */}
            <Route path="/annual" element={<Annual />} />
            <Route path="/labor" element={<Labor />} /> There is a form
            <Route path="/open-close-businesses" element={<OpenClose />} />
            <Route path="/secretary-of-state" element={<Secretary />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
