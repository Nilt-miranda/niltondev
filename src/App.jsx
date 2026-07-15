import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/theme.css';
import Home from './pages/Home';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <nav style={{background: '#1E1E1E', padding: '1rem', display: 'flex', gap: '2rem', justifyContent: 'center'}}>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/projetos">Projetos</Link>
        <Link className="link" to="/contato">Contato</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}
