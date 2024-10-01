import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
