import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import LoadingPage from './components/Loading';
import Melting from './pages/Melting';
import Footer from './components/Footer';
import Rolling from './pages/Rolling';
import Armour from './pages/Armour';
import Defender from './pages/Defender';
import Commander from './pages/Commander';
import AboutUs from './pages/AboutUs';
import Our_testing_philosophy from './pages/Our_testing_philosophy';

// Lazy load the Navbar and Home components
const Navbar = lazy(() => import('./components/Navbar'));
const Home = lazy(() => import('./pages/Home'));

// Custom component to determine if the Navbar should be transparent
const AppWithLocation = () => {
  const location = useLocation();
const aboutUsPaths = new Set([
  '/technology/melting-section',
  '/technology/rolling-section',
  '/our-testing-philosophy'
]);

const isAboutUs = aboutUsPaths.has(location.pathname);
  return (
    <>
      <Navbar isTransparent={isAboutUs} />
      <div className="content">
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/technology/melting-section" element={<Melting />} />
          <Route path="/technology/rolling-section" element={<Rolling/>} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/our-testing-philosophy" element={<Our_testing_philosophy/>} />

          {/* Products Section and Subcategories */}
          <Route path="/products/amour" element={<Armour/>} />
          <Route path="/products/defender" element={<Defender/>} />
          <Route path="/products/commander" element={<Commander/>} />

          <Route path="/sustainability" element={<div>Sustainability</div>} />
          <Route path="/contact-us" element={<div>Contact Us</div>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

function App() {
  return (
    <div className="app-container">
      <Router>
        <Suspense fallback={<LoadingPage />}>
          <AppWithLocation />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
