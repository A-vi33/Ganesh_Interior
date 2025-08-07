import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import BedroomDesign from './pages/BedroomDesign';
import KitchenDesign from './pages/KitchenDesign';
import TVUnits from './pages/TVUnits';
import PoojaRooms from './pages/PoojaRooms';
import LivingArch from './pages/LivingArch';

// ScrollToTop component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/bedroom-design" element={<BedroomDesign />} />
            <Route path="/kitchen-design" element={<KitchenDesign />} />
            <Route path="/tv-units" element={<TVUnits />} />
            <Route path="/pooja-rooms" element={<PoojaRooms />} />
            <Route path="/living-arch" element={<LivingArch />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;