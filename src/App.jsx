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
        <Route path="/our-testing-philosophy" element={<div>Our Tensting Philosophy</div>} />
        <Route path="/products" element={<div>Products</div>} />
        <Route path="/sustainability" element={<div>Sustainability</div>} />
        <Route path="/contact-us" element={<div>Contact Us</div>} />
      </Routes>
    </Router>
  );
}

export default App;