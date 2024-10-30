import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import LoadingPage from './components/Loading';
import Melting from './pages/Melting';
import Footer from './components/Footer';
import Rolling from './pages/Rolling';

// Lazy load the Navbar and Home components
const Navbar = lazy(() => import('./components/Navbar'));
const Home = lazy(() => import('./pages/Home'));

// Custom component to determine if the Navbar should be transparent
const AppWithLocation = () => {
  const location = useLocation();
  const isAboutUs = location.pathname === '/technology/melting-section' || location.pathname === '/technology/rolling-section';

  return (
    <>
      <Navbar isTransparent={isAboutUs} />
      <div className="content">
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/technology/melting-section" element={<Melting />} />
          <Route path="/technology/rolling-section" element={<Rolling/>} />
          <Route path="/about-us" element={<div>About US</div>} />
          <Route path="/our-testing-philosophy" element={<div>Our Testing Philosophy</div>} />

          {/* Products Section and Subcategories */}
          <Route path="/products/amour" element={<div>Amour</div>} />
          <Route path="/products/defender" element={<div>Defender</div>} />
          <Route path="/products/commander" element={<div>Commander</div>} />

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
