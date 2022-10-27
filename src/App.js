import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Apple from './pages/apple/Apple';
import Apricot from './pages/apricot/Apricot';
import Lime from './pages/lime/Lime';
import Lychee from './pages/lychee/Lychee';
import Navbar from './pages/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apple" element={<Apple />} />
        <Route path="/apricot" element={<Apricot />} />
        <Route path="/lime" element={<Lime />} />
        <Route path="/lychee" element={<Lychee />} />
      </Routes>
    </Router>
  );
}

export default App;
