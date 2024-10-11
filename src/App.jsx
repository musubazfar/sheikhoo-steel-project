import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import LoadingPage from './components/Loading';

// Lazy load the Navbar and Home components
const Navbar = lazy(() => import('./components/Navbar'));
const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingPage/>}>
        <Navbar />
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/technology/melting-section" element={<div>Melting Section</div>} />
          <Route path="/technology/rolling-section" element={<div>Rolling Section</div>} />
          <Route path="/about-us" element={<div>About Us</div>} />
          <Route path="/our-testing-philosophy" element={<div>Our Testing Philosophy</div>} />
          
          {/* Products Section and Subcategories */}
          <Route path="/products/amour" element={<div>Amour</div>} />
          <Route path="/products/defender" element={<div>Defender</div>} />
          <Route path="/products/commander" element={<div>Commander</div>} />
          
          <Route path="/sustainability" element={<div>Sustainability</div>} />
          <Route path="/contact-us" element={<div>Contact Us</div>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
