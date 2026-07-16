import React from 'react';
import '../styles/theme.css';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

// WhatsApp: 55 + DDD + número (só dígitos). Ex: "5511999999999"
const WHATSAPP = "SEU_NUMERO_AQUI";

export default function Contato() {
  return (
    <section className="main-bg text-main">
      <div className="contact-content">
        <h2 style={{ color: '#ffffffff' }}>Contato:</h2>
        <p>✉️ <a className="link" href="mailto:niltonpgvm@gmail.com">niltonpgvm@gmail.com</a></p>

        <a className="whatsapp-btn" style={{ marginTop: '0.5rem' }}
          href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Olá, Nilton! Vi seu portfólio e gostaria de conversar.')}`}
          target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={20} /> Falar no WhatsApp
        </a>

        <div className="social-icons" style={{ marginTop: '1.2rem' }}>
          <a href="https://github.com/Nilt-miranda" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub size={28} /></a>
          <a href="https://www.linkedin.com/in/nilton-pgvmiranda" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin size={28} /></a>
          <a href="https://www.instagram.com/nilton_88" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size={28} /></a>
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp size={28} /></a>
        </div>
      </div>
    </section>
  );
}
