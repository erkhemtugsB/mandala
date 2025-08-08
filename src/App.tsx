import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import IrpNewRegistration from './pages/IrpNewRegistration';
// import IrpAddition from './pages/IrpAddition';
// import IrpTransfer from './pages/IrpTransfer';
// import IrpRenewal from './pages/IrpRenewal';
// import IrpTempRegistration from './pages/IrpTempRegistration';
// import TrailerRegistration from './pages/TrailerRegistration';
// import TruckTitleTransfer from './pages/TruckTitleTransfer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/irp-new-registration" element={<IrpNewRegistration />} />
            {/* <Route path="/irp-addition" element={<IrpAddition />} />
            <Route path="/irp-transfer" element={<IrpTransfer />} />
            <Route path="/irp-renewal" element={<IrpRenewal />} />
            <Route path="/irp-temp-registration" element={<IrpTempRegistration />} />
            <Route path="/trailer-registration" element={<TrailerRegistration />} />
            <Route path="/truck-title-transfer" element={<TruckTitleTransfer />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
