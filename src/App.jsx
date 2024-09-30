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
        <Route path="/inbox" element={<div>Inbox Page</div>} />
        <Route path="/starred" element={<div>Starred Page</div>} />
        <Route path="/send-email" element={<div>Send Email Page</div>} />
        <Route path="/drafts" element={<div>Drafts Page</div>} />
        <Route path="/all-mail" element={<div>All Mail Page</div>} />
        <Route path="/trash" element={<div>Trash Page</div>} />
        <Route path="/spam" element={<div>Spam Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
