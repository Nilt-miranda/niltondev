import React from 'react';
import '../styles/theme.css';
import anjosLogo from '../assets/anjosit.png';
import saltcodeLogo from '../assets/saltcode.png';
import { FaGraduationCap } from 'react-icons/fa';

export default function Projetos() {
  return (
    <section className="main-bg text-main" style={{ padding: '2rem' }}>
      
      {/* ------------------------ */}
      {/* Experiências Profissionais */}
      {/* ------------------------ */}
      <h2 style={{ color: '#A64DFF' }}>Experiências Profissionais</h2>

      {/* Anjos IT */}
      <div className="card-bg experience-card">
        <img src={anjosLogo} alt="Logo Anjos IT" className="company-logo" />

        <div className="experience-content">
          <h2 className="text-main">Anjos IT</h2>
          <h4 className="text-main">MAIO 2023 - OUTUBRO 2023</h4>
          <h4 className="text-main">Desenvolvedor ABAP - Estagiário</h4>

          <p className="text-secondary">
            Desenvolvendo e realizando suporte em programas ABAP e atendimento a clientes internos.
            Auxílio na construção de relatórios, ajustes em sistemas SAP e resolução de chamados técnicos.
          </p>

          <div className="tech-badges">
            <span className="badge">ABAP</span>
            <span className="badge">SAP</span>
            <span className="badge">SQL</span>
            <span className="badge">Atendimento Técnico</span>
          </div>

          <a className="link-button"
            href="https://www.linkedin.com/in/nilton-pgvmiranda"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver mais
          </a>
        </div>
      </div>

      {/* SaltCode */}
      <div className="card-bg experience-card">
        <img src={saltcodeLogo} alt="Logo SaltCode" className="company-logo" />

        <div className="experience-content">
          <h2 className="text-main">SaltCode</h2>
          <h4 className="text-main">FEVEREIRO 2026 - Presente</h4>
          <h4 style={{ color: '#A64DFF', margin: '0.2rem 0' }}>
            Desenvolvedor Júnior · Tempo integral
          </h4>

          <p className="text-secondary">
            Desenvolvimento e implementação de funcionalidades, criação de novas APIs para
            comunicação entre o front-end e o banco de dados, correção de bugs em partes
            específicas do código para manter o sistema funcionando corretamente e execução de
            operações em banco de dados. Trabalho com boas práticas, Git e Docker.
          </p>

          <div className="tech-badges">
            <span className="badge">Node.js</span>
            <span className="badge">Python</span>
            <span className="badge">Docker</span>
            <span className="badge">API REST</span>
            <span className="badge">Git</span>
            <span className="badge">SQL</span>
          </div>

          <a className="link-button"
            href="https://www.linkedin.com/in/nilton-pgvmiranda"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver mais
          </a>
        </div>
      </div>

      {/* SaltCode - Estágio (anterior) */}
      <div className="card-bg experience-card">
        <img src={saltcodeLogo} alt="Logo SaltCode" className="company-logo" />

        <div className="experience-content">
          <h2 className="text-main">SaltCode</h2>
          <h4 className="text-main">OUTUBRO 2025 - FEVEREIRO 2026</h4>
          <h4 style={{ color: '#A64DFF', margin: '0.2rem 0' }}>
            Desenvolvedor Backend · Estágio
          </h4>

          <p className="text-secondary">
            Início na empresa como estagiário de desenvolvimento backend: auxílio na criação de
            APIs, integração de sistemas, correção de bugs e modelagem de banco de dados.
            Primeiro contato com o fluxo de trabalho da equipe, boas práticas, Git e Docker.
          </p>

          <div className="tech-badges">
            <span className="badge">Node.js</span>
            <span className="badge">Python</span>
            <span className="badge">Docker</span>
            <span className="badge">API REST</span>
            <span className="badge">Git</span>
            <span className="badge">SQL</span>
          </div>

          <a className="link-button"
            href="https://www.linkedin.com/in/nilton-pgvmiranda"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver mais
          </a>
        </div>
      </div>

      {/* Divisor */}
      <hr style={{ borderColor: '#333', margin: '2rem 0' }} />

      {/* ------------------------ */}
      {/* Formação Acadêmica */}
      {/* ------------------------ */}
      <h2 style={{ color: '#A64DFF' }}>Formação Acadêmica</h2>

      <div className="card-bg experience-card">
        <div className="company-logo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#2a2a2a', color: '#A64DFF' }}>
          <FaGraduationCap size={26} />
        </div>

        <div className="experience-content">
          <h2 className="text-main">FIAP</h2>
          <h4 className="text-main">FEVEREIRO 2023 - DEZEMBRO 2027</h4>
          <h4 style={{ color: '#A64DFF', margin: '0.2rem 0' }}>
            Bacharelado em Engenharia da Computação
          </h4>

          <p className="text-secondary">
            Graduação em andamento na Faculdade de Informática e Administração Paulista (FIAP),
            com foco em desenvolvimento de software, infraestrutura e sistemas.
          </p>
        </div>
      </div>

      {/* Divisor */}
      <hr style={{ borderColor: '#333', margin: '2rem 0' }} />

      {/* ------------------------ */}
      {/* Projetos Pessoais */}
      {/* ------------------------ */}
      <h2 style={{ color: '#A64DFF' }}>Projetos Pessoais</h2>

      {/* Site Dra. Isabelle Sudario */}
      <div className="card-bg project-card">
        <div>
          <h2 className="text-main">Site — Dra. Isabelle Sudario (Neurologia Pet)</h2>
          <p className="text-secondary">
            Landing page para médica veterinária especializada em neurologia e neurocirurgia.
            Site de página única, responsivo, com SEO, agendamento via WhatsApp e domínio próprio.
          </p>
        </div>

        <div className="project-footer">
          <div className="tech-badges">
            <span className="badge">HTML</span>
            <span className="badge">CSS</span>
            <span className="badge">JavaScript</span>
            <span className="badge">SEO</span>
            <span className="badge">Responsivo</span>
          </div>

          <a className="link-button" href="https://www.neurologiapet.com" target="_blank" rel="noopener noreferrer">
            Ver site
          </a>
        </div>
      </div>

      {/* Barracão da Praça */}
      <div className="card-bg project-card">
        <div>
          <h2 className="text-main">Barracão da Praça — Sistema de Pedidos</h2>
          <p className="text-secondary">
            Sistema web PWA para restaurante: o cliente escaneia o QR Code da mesa, vê o cardápio e
            faz o pedido pelo celular. Os pedidos são agrupados por lote e enviados para as
            impressoras da cozinha e do bar.
          </p>
        </div>

        <div className="project-footer">
          <div className="tech-badges">
            <span className="badge">Next.js</span>
            <span className="badge">TypeScript</span>
            <span className="badge">NestJS</span>
            <span className="badge">PostgreSQL</span>
            <span className="badge">Prisma</span>
            <span className="badge">Tailwind</span>
          </div>
        </div>
      </div>

      {/* Marcação de Consultas Médicas */}
      <div className="card-bg project-card">
        <div>
          <h2 className="text-main">Marcação de Consultas Médicas</h2>
          <p className="text-secondary">
            Aplicativo mobile em React Native / TypeScript para agendamento de consultas, com
            painel administrativo, fluxo de marcação e gestão de consultas consumindo API REST.
          </p>
        </div>

        <div className="project-footer">
          <div className="tech-badges">
            <span className="badge">React Native</span>
            <span className="badge">TypeScript</span>
            <span className="badge">API REST</span>
          </div>

          <a className="link-button" href="https://github.com/Nilt-miranda/marcacaoDeConsultasMedicas-EC" target="_blank" rel="noopener noreferrer">
            Ver no GitHub
          </a>
        </div>
      </div>

      {/* Challenge FESTO - Digital Twin */}
      <div className="card-bg project-card">
        <div>
          <h2 className="text-main">Digital Twin — Challenge FESTO / FIAP</h2>
          <p className="text-secondary">
            Gêmeo digital de um sistema pneumático com ESP32 e sensores de pressão, temperatura e
            fluxo, transmitindo dados em tempo real via MQTT. Backend em Node.js processa e
            armazena no MongoDB, e um dashboard exibe as leituras em tempo real.
          </p>
        </div>

        <div className="project-footer">
          <div className="tech-badges">
            <span className="badge">ESP32</span>
            <span className="badge">MQTT</span>
            <span className="badge">Node.js</span>
            <span className="badge">Express</span>
            <span className="badge">MongoDB</span>
            <span className="badge">Chart.js</span>
          </div>

          <a className="link-button" href="https://github.com/Nilt-miranda/challegerfesto" target="_blank" rel="noopener noreferrer">
            Ver no GitHub
          </a>
        </div>
      </div>

    </section>
  );
}
