import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home.tsx';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TruckingPage from './pages/TruckingPage';


// IRP Registration
import IrpNewRegistration from './pages/services/IrpNewRegistration.tsx';
import IrpAddition from './pages/services/IrpAddition';
import IrpTransfer from './pages/services/IrpTransfer';
import IrpRenewal from './pages/services/IrpRenewal';
import IrpTempRegistration from './pages/services/IrpTempRegistration';
import TrailerRegistration from './pages/services/TrailerRegistration';
import TruckTitleTransfer from './pages/services/TruckTitleTransfer';

// // IFTA Filing
import IftaRegistration from './pages/services/IftaRegistration';
import IftaQuarterly from './pages/services/IftaQuarterly';
import StateQuarterlyKyNmNy from './pages/services/StateQuarterlyKyNmNy';
import CtQuarterly from './pages/services/CtQuarterly';
import OrQuarterly from './pages/services/OrQuarterly';

// // Company Formation
import Corporations from './pages/services/Corporations';
import LlcFormation from './pages/services/LlcFormation';
import EinRegistration from './pages/services/EinRegistration';
import MotorCarrierAuthority from './pages/services/MotorCarrierAuthority';
import DotNumberRegistration from './pages/services/DotNumberRegistration';
import BrokerAuthority from './pages/services/BrokerAuthority';
import IllinoisIntrastateAuthority from './pages/services/IllinoisIntrastateAuthority';

// // Tax Filing
import Form2290 from './pages/services/Form2290';
import Boc3 from './pages/services/Boc3';
import UcrRegistration from './pages/services/UcrRegistration';
import Payroll from './pages/services/Payroll';

// // Training
import CdlEnglishTraining from './pages/services/CdlEnglishTraining.tsx';

// // Miscellaneous
import Audits from './pages/services/Audits';
import ScacRegistration from './pages/services/ScacRegistration';
import Bookkeeping from './pages/services/Bookkeeping';
import NotaryPublic from './pages/services/NotaryPublic';

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

            {/* IRP Registration */}
            <Route path="/irp-new-registration" element={<IrpNewRegistration />} />
            <Route path="/irp-addition" element={<IrpAddition />} />
            <Route path="/irp-transfer" element={<IrpTransfer />} />
            <Route path="/irp-renewal" element={<IrpRenewal />} />
            <Route path="/irp-temp-registration" element={<IrpTempRegistration />} />
            <Route path="/trailer-registration" element={<TrailerRegistration />} />
            <Route path="/truck-title-transfer" element={<TruckTitleTransfer />} />

            {/* IFTA Filing */}
            <Route path="/ifta-registration" element={<IftaRegistration />} /> There is a form
            <Route path="/ifta-quarterly" element={<IftaQuarterly />} />
            <Route path="/state-quarterly-ky-nm-ny" element={<StateQuarterlyKyNmNy />} />
            <Route path="/ct-quarterly" element={<CtQuarterly />} />
            <Route path="/or-quarterly" element={<OrQuarterly />} />

            {/* Company Formation */}
            <Route path="/corporations" element={<Corporations />} /> There is a form
            <Route path="/llc-formation" element={<LlcFormation />} /> There is a form
            <Route path="/ein-registration" element={<EinRegistration />} /> There is a form
            <Route path="/motor-carrier-authority" element={<MotorCarrierAuthority />} /> There is a form
            <Route path="/dot-number-registration" element={<DotNumberRegistration />} /> There is a form
            <Route path="/broker-authority" element={<BrokerAuthority />} /> There is a form
            <Route path="/illinois-intrastate-authority" element={<IllinoisIntrastateAuthority />} /> There is a form

            {/* Tax Filing */}
            <Route path="/form-2290" element={<Form2290 />} /> There is a form
            <Route path="/boc-3" element={<Boc3 />} /> There is a form
            <Route path="/ucr-registration" element={<UcrRegistration />} /> There is a form
            <Route path="/payroll" element={<Payroll />} />

            {/* Training */}
            <Route path="/cdl-english-training" element={<CdlEnglishTraining />} />

            {/* Miscellaneous */}
            <Route path="/audits" element={<Audits />} />
            <Route path="/scac-registration" element={<ScacRegistration />} /> There is a form
            <Route path="/bookkeeping" element={<Bookkeeping />} />
            <Route path="/notary-public" element={<NotaryPublic />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
