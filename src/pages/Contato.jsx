import React from 'react';
import '../styles/theme.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Contato() {
  return (
    <section className="main-bg text-main">
      <div className="contact-content">
        <h2 style={{ color: '#ffffffff' }}>Contato:</h2>
        <p>✉️ <a className="link" href="mailto:niltonpgvm@gmail.com">niltonpgvm@gmail.com</a></p>
        

        <div className="social-icons" >
          
          <a href="https://github.com/Nilt-miranda" target="_blank"><FaGithub size={28} /></a>
          <a href="https://www.linkedin.com/in/nilton-pgvmiranda" target="_blank"><FaLinkedin size={28} /></a>
          <a href="https://www.instagram.com/nilton_88" target="_blank"><FaInstagram size={28} /></a>
        </div>
      </div>
    </section>
  );
}
