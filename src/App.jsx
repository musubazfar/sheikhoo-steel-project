import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// Lazy load the Navbar and Home components
const Navbar = lazy(() => import('./components/Navbar'));
const Home = lazy(() => import('./pages/Home'));
const LoadingPage = lazy(() => import('./components/Loading'));
const Melting = lazy(() => import('./pages/Melting'));
const Footer = lazy(() => import('./components/Footer'));
const Rolling = lazy(() => import('./pages/Rolling'));
const Armour = lazy(() => import('./pages/Armour'));
const Defender = lazy(() => import('./pages/Defender'));
const Commander = lazy(() => import('./pages/Commander'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Our_testing_philosophy = lazy(() => import('./pages/Our_testing_philosophy'));
const Sustainability = lazy(() => import('./pages/Sustainability'));
const Contact_us = lazy(() => import('./pages/Contact_us'));

// Custom component to determine if the Navbar should be transparent
const AppWithLocation = () => {
  const location = useLocation();
  const aboutUsPaths = new Set([
    '/technology/melting-section',
    '/technology/rolling-section',
    '/our-testing-philosophy'
  ]);
  
  const isAboutUs = aboutUsPaths.has(location.pathname);
  const showFooter = location.pathname !== '/contact-us'; // Determine if the footer should be shown

  return (
    <>
      <Navbar isTransparent={isAboutUs} />
      <div className="content">
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/technology/melting-section" element={<Melting />} />
          <Route path="/technology/rolling-section" element={<Rolling />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-testing-philosophy" element={<Our_testing_philosophy />} />

          {/* Products Section and Subcategories */}
          <Route path="/products/armour" element={<Armour />} />
          <Route path="/products/defender" element={<Defender />} />
          <Route path="/products/commander" element={<Commander />} />

          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/contact-us" element={<Contact_us />} />
        </Routes>
      </div>
      {showFooter && <Footer />} {/* Render Footer based on the showFooter condition */}
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
