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

// // Company Formation
// import Corporations from './pages/services/Corporations';
// import LlcFormation from './pages/services/LlcFormation';
// import EinRegistration from './pages/services/EinRegistration';
// import MotorCarrierAuthority from './pages/services/MotorCarrierAuthority';
// import DotNumberRegistration from './pages/services/DotNumberRegistration';
// import BrokerAuthority from './pages/services/BrokerAuthority';
// import IllinoisIntrastateAuthority from './pages/services/IllinoisIntrastateAuthority';

// // Tax Filing
// import Form2290 from './pages/services/Form2290';
// import Boc3 from './pages/services/Boc3';
// import UcrRegistration from './pages/services/UcrRegistration';
// import Payroll from './pages/services/Payroll';

// // Training
// import CdlEnglishTraining from './pages/services/CdlEnglishTraining.tsx';

// // Miscellaneous
// import Audits from './pages/services/PersonalTax.tsx';
// import ScacRegistration from './pages/services/ScacRegistration';
// import Bookkeeping from './pages/services/Bookkeeping';
// import NotaryPublic from './pages/services/NotaryPublic';

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

            {/* Company Formation */}
            {/* <Route path="/corporations" element={<Corporations />} /> There is a form
            <Route path="/llc-formation" element={<LlcFormation />} /> There is a form
            <Route path="/ein-registration" element={<EinRegistration />} /> There is a form
            <Route path="/motor-carrier-authority" element={<MotorCarrierAuthority />} /> There is a form
            <Route path="/dot-number-registration" element={<DotNumberRegistration />} /> There is a form
            <Route path="/broker-authority" element={<BrokerAuthority />} /> There is a form
            <Route path="/illinois-intrastate-authority" element={<IllinoisIntrastateAuthority />} /> There is a form */}

            {/* Tax Filing */}
            {/* <Route path="/form-2290" element={<Form2290 />} /> There is a form
            <Route path="/boc-3" element={<Boc3 />} /> There is a form
            <Route path="/ucr-registration" element={<UcrRegistration />} /> There is a form
            <Route path="/payroll" element={<Payroll />} /> */}

            {/* Training */}
            {/* <Route path="/cdl-english-training" element={<CdlEnglishTraining />} /> */}

            {/* Miscellaneous */}
            {/* <Route path="/audits" element={<Audits />} />
            <Route path="/scac-registration" element={<ScacRegistration />} /> There is a form
            <Route path="/bookkeeping" element={<Bookkeeping />} />
            <Route path="/notary-public" element={<NotaryPublic />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
