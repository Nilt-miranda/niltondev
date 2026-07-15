import React from 'react';
import '../styles/theme.css';
import perfil from '../assets/perfil.png';
import { useEffect, useState } from "react";
import { FaNodeJs, FaPython, FaDatabase, FaDocker, FaGitAlt, FaNetworkWired, FaCss3 } from "react-icons/fa";

export default function Home() {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setTimeout(() => setAnimated(true), 300);
  }, []);

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
        <h1 style={{color: '#A64DFF', marginBottom: '0.5rem'}}>Olá, eu sou Nilton Pimentel Miranda!</h1>
        <h2 style={{color: '#EAEAEA', fontWeight: 600, marginBottom: '1rem'}}>Desenvolvedor Fullstack</h2>
        <p className="text-secondary" style={{marginBottom: '1.2rem'}}>Estudando engenheira da Computação na Faculdade de Informática e Administração Paulista (FIAP). Pontos fortes em Python, CSS3, HTML5, Vs Code e uma experiência em Docker e Linux. Comunicativo e com vontade de trabalhar em um ambiente que vá gerar grande processo evolutivo</p>
        
        
        <div style={{marginBottom: '1.2rem'}}>
          <span style={{color: '#A64DFF', fontWeight: 600}}> No momento estudando:</span><br />
          <span className="text-secondary">Python,Django,Cybersegurança e Salesforce</span>
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
          <div className="certifications-container">
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
          </div>
                      
        </section>
        <div style={{width: '100%', display: 'flex', justifyContent: 'left', marginTop: '2rem'}}>
          <a className="button" href="/contato" style={{background: '#A64DFF', color: '#EAEAEA', padding: '0.7rem 1.4rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', boxShadow: '0 2px 8px #A64DFF22'}}>💬 Gostou? entre contato</a>
            </div>
      </div>
    </section>
  );
}
