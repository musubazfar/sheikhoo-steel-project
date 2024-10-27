import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import LoadingPage from './components/Loading';
import Melting from './pages/Melting';
import Footer from './components/Footer';

// Lazy load the Navbar and Home components
const Navbar = lazy(() => import('./components/Navbar'));
const Home = lazy(() => import('./pages/Home'));

// Custom component to determine if the Navbar should be transparent
const AppWithLocation = () => {
  const location = useLocation();
  const isAboutUs = location.pathname === '/technology/melting-section';

  return (
    <>
      <Navbar isTransparent={isAboutUs} />
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/technology/melting-section" element={<Melting/>} />
        <Route path="/technology/rolling-section" element={<div>Rolling Section</div>} />
        <Route path="/about-us" element={<div>About US</div>} />
        <Route path="/our-testing-philosophy" element={<div>Our Testing Philosophy</div>} />
        
        {/* Products Section and Subcategories */}
        <Route path="/products/amour" element={<div>Amour</div>} />
        <Route path="/products/defender" element={<div>Defender</div>} />
        <Route path="/products/commander" element={<div>Commander</div>} />
        
        <Route path="/sustainability" element={<div>Sustainability</div>} />
        <Route path="/contact-us" element={<div>Contact Us</div>} />
      </Routes>
      <Footer/>
    </>
  );
};

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingPage />}>
        <AppWithLocation />
      </Suspense>
    </Router>
  );
}

export default App;
