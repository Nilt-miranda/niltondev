import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import './styles/theme.css';
import Home from './pages/Home';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';

// WhatsApp: 55 + DDD + número (só dígitos). Ex: "5511999999999"
const WHATSAPP = "5511972270401";

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="app-shell">
        <nav style={{background: '#1E1E1E', padding: '1rem', display: 'flex', gap: '2rem', justifyContent: 'center'}}>
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/projetos">Projetos</Link>
          <Link className="link" to="/contato">Contato</Link>
        </nav>

        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>

        {/* Rodapé global */}
        <footer className="site-footer">
          <div className="footer-inner">
            <div>
              <h3 className="footer-title">Nilton Pimentel Miranda</h3>
              <p className="text-secondary" style={{ margin: 0 }}>Desenvolvedor Fullstack</p>
            </div>

            <div className="footer-contact">
              <a className="link footer-email" href="mailto:niltonpgvm@gmail.com">
                <FaEnvelope /> niltonpgvm@gmail.com
              </a>
              <div className="social-icons">
                <a href="https://github.com/Nilt-miranda" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub size={24} /></a>
                <a href="https://www.linkedin.com/in/nilton-pgvmiranda" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin size={24} /></a>
                <a href="https://www.instagram.com/nilton_88" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size={24} /></a>
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp size={24} /></a>
              </div>
            </div>
          </div>
          <p className="footer-copy text-secondary">
            © {new Date().getFullYear()} Nilton Pimentel Miranda. Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </Router>
  );
}
