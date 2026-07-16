import React from 'react';
import '../styles/theme.css';
import perfil from '../assets/perfil.png';
import { useEffect, useState, useRef } from "react";
import { FaNodeJs, FaPython, FaDatabase, FaDocker, FaGitAlt, FaNetworkWired, FaCss3, FaWhatsapp, FaGraduationCap, FaLinux, FaComments, FaReact, FaFistRaised, FaFutbol, FaTv } from "react-icons/fa";

// WhatsApp: 55 + DDD + número (só dígitos). Ex: "5511999999999"
const WHATSAPP = "5511972270401";

export default function Home() {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setTimeout(() => setAnimated(true), 300);
  }, []);

  const certRef = useRef(null);
  const scrollCerts = (dir) => {
    if (certRef.current) certRef.current.scrollBy({ left: dir * 280, behavior: "smooth" });
  };

  const skills = [
    { name: "Node.js", level: 65, icon: <FaNodeJs /> },
    { name: "Python (Django / Flask)", level: 100, icon: <FaPython /> },
    { name: "SQL / PostgreSQL / MySQL", level: 65, icon: <FaDatabase /> },
    { name: "API REST / GraphQL", level: 70, icon: <FaNetworkWired /> },
    { name: "Docker e Docker Compose", level: 50, icon: <FaDocker /> },
    { name: "Git / GitHub / GitFlow", level: 100, icon: <FaGitAlt /> },
    { name: "HTML / CSS", level: 75, icon: <FaCss3 /> },
  ];

  return (
    <section className="main-bg text-main" style={{padding: '2rem', display: 'flex', alignItems: 'flex-start', gap: '2.5rem', flexWrap: 'wrap'}}>
      <div style={{flex: '0 0 160px', display: 'flex', justifyContent: 'center'}}>
        <img src={perfil} alt="Foto de Nilton Miranda" style={{width: '160px', height: '160px', objectFit: 'cover', borderRadius: '50%', boxShadow: '0 2px 16px #A64DFF44'}} />
      </div>
      <div style={{flex: 1, minWidth: '260px'}}>
        <h1 style={{color: '#A64DFF', marginBottom: '0.5rem'}}>Olá, eu sou Nilton Miranda!</h1>
        <h2 style={{color: '#EAEAEA', fontWeight: 600, marginBottom: '1rem'}}>Desenvolvedor Fullstack</h2>
        <p className="text-secondary" style={{marginBottom: '0.8rem'}}>
          Estudante de Engenharia da Computação na FIAP, com pontos fortes em Python, CSS3,
          JavaScript e React, além de experiência prática em Docker e Linux.
        </p>
        <p className="text-secondary" style={{marginBottom: '1.4rem'}}>
          Comunicativo e com vontade de trabalhar em um ambiente que gere um grande processo evolutivo.
        </p>

        {/* Quadrados de destaque */}
        <div className="highlight-grid">
          <div className="highlight-box">
            <span className="highlight-icon"><FaGraduationCap /></span>
            <div>
              <strong>Eng. da Computação</strong>
              <span className="text-secondary">Graduação em andamento</span>
            </div>
          </div>
          <div className="highlight-box">
            <span className="highlight-icon"><FaPython /></span>
            <div>
              <strong>Python & Django</strong>
              <span className="text-secondary">Backend & APIs</span>
            </div>
          </div>
          <div className="highlight-box">
            <span className="highlight-icon"><FaReact /></span>
            <div>
              <strong>React & TypeScript</strong>
              <span className="text-secondary">Front-end & mobile</span>
            </div>
          </div>
          <div className="highlight-box">
            <span className="highlight-icon"><FaNodeJs /></span>
            <div>
              <strong>Node.js & APIs</strong>
              <span className="text-secondary">Back-end JavaScript</span>
            </div>
          </div>
          <div className="highlight-box">
            <span className="highlight-icon"><FaLinux /></span>
            <div>
              <strong>Docker & Linux</strong>
              <span className="text-secondary">Ambientes & deploy</span>
            </div>
          </div>
          <div className="highlight-box">
            <span className="highlight-icon"><FaComments /></span>
            <div>
              <strong>Comunicativo</strong>
              <span className="text-secondary">Trabalho em equipe</span>
            </div>
          </div>
        </div>
        
        
        <div style={{marginBottom: '1.2rem'}}>
          <span style={{color: '#A64DFF', fontWeight: 600}}>Curiosidades / Hobbies:</span>
          <div className="hobbies-container">
            <span className="hobby-item"><FaFistRaised /> Jiu-jitsu & Judô</span>
            <span className="hobby-item"><FaFutbol /> Futebol</span>
            <span className="hobby-item"><FaTv /> Séries</span>
          </div>
        </div>

        {/* Habilidades */}
        <section style={{marginTop: '2rem'}}>
          <h2 style={{ color: "#A64DFF" }}>Linguagens:</h2>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div key={index} className="skill">
                <div className="skill-header">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                  
                </div>
                
                  <div
                    className="skill-level"
                    style={{ width: animated ? `${skill.level}%` : "0%" }}
                  ></div>
                </div>
              
            ))}
          </div>
          <h2 style={{ color: "#A64DFF", marginTop: "2rem" }}>Idiomas:</h2>
          <ul>
            <li className="text-secondary emoji">🇺🇸​ Inglês — Intermediário</li>
            <li className="text-secondary emoji">🇪🇸 Espanhol — Intermediário</li>
          </ul>
          <h2 style={{ color: "#A64DFF", marginTop: "2rem" }}>Certificações</h2>
          <div className="cert-carousel">
            <button type="button" className="cert-nav" onClick={() => scrollCerts(-1)} aria-label="Anterior">‹</button>
            <div className="certifications-container" ref={certRef}>
            <div className="cert-item">
              <h4>Python</h4>
              <p> ALURA - 2023</p>
              <a href="https://cursos.alura.com.br/certificate/89fd15e1-8de8-4108-b65f-4e83665135b2" target="_blank" >Ver certificado</a>
            </div>
            <div className="cert-item">
              <h4>Gestão de Infraestrutura de TI</h4>
              <p>FIAP - 2023</p>
              <a href="https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/93794/3f7d2065669b76cafd0386e57e9946c8/certificado.png" target="_blank">Ver certificado</a>
            </div>
            <div className="cert-item">
              <h4>Python</h4>
              <p>FIAP - 2024</p>
              <a href="https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/118183/6bc52a8e78672c7a3a0175860b937e63/certificado.png" target="_blank">Ver certificado</a>
            </div>
            <div className="cert-item">
              <h4>Front End</h4>
              <p>FIAP - 2024</p>
              <a href="https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/119058/93303bd463bb2a4ebfd38f8cc4ccc7a0/certificado.png" target="_blank">Ver certificado</a>
            </div>
            <div className="cert-item">
              <h4>Blockchain</h4>
              <p>FIAP - 2025</p>
              <a href="https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=f7c94786b6e3e91babd960c524c1fa51&action=view" target="_blank" rel="noopener noreferrer">Ver certificado</a>
            </div>
            <div className="cert-item">
              <h4>DevOps</h4>
              <p>FIAP - 2026</p>
              <a href="https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=94e680191a71e44f6251e56a90c2ea1b&action=view" target="_blank" rel="noopener noreferrer">Ver certificado</a>
            </div>
            <div className="cert-item">
              <h4>Business Management &amp; IT Services</h4>
              <p>FIAP - 2026</p>
              <a href="https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=f14b6b2410b8c2af8a328374cb540875&action=view" target="_blank" rel="noopener noreferrer">Ver certificado</a>
            </div>
            </div>
            <button type="button" className="cert-nav" onClick={() => scrollCerts(1)} aria-label="Próximo">›</button>
          </div>

        </section>
        <div style={{width: '100%', display: 'flex', justifyContent: 'left', marginTop: '2rem', gap: '1rem', flexWrap: 'wrap'}}>
          <a className="whatsapp-btn"
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Olá, Nilton! Vi seu portfólio e gostaria de conversar.')}`}
            target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={20} /> Gostou? Chama no WhatsApp
          </a>
            </div>
      </div>
    </section>
  );
}
