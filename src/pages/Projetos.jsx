import React from 'react';
import '../styles/theme.css';
import anjosLogo from '../assets/anjosit.png';
import saltcodeLogo from '../assets/saltcode.png';

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
          <h4 className="text-main">OUTUBRO 2025 - Presente</h4>
          <h4 className="text-main">Desenvolvedor Backend - Estagiário</h4>

          <p className="text-secondary">
            Auxílio na criação de APIs, integração de sistemas, correções de bugs e modelagem de banco de dados.
            Participação no desenvolvimento backend utilizando boas práticas, Git e Docker.
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
      {/* Projetos Pessoais */}
      {/* ------------------------ */}
      <h2 style={{ color: '#A64DFF' }}>Projetos Pessoais</h2>

      {/* Importador CSV */}
      <div className="card-bg project-card">
        <div>
          <h2 className="text-main">Importador de CSV</h2>
          <p className="text-secondary">
            Criação de um importador de CSV para auto-criação de cliente, eliminando a necessidade de criação manual
            e acelerando o fluxo da equipe de CX.
          </p>
        </div>

        {/* Badges + botão alinhados à direita */}
        <div className="project-footer">
          <div className="tech-badges">
            <span className="badge">React</span>
            <span className="badge">Python</span>
            <span className="badge">CSS</span>
            <span className="badge">Django</span>
            <span className="badge">JSON</span>
          </div>

          <a className="link-button" href="#" target="_blank" rel="noopener noreferrer">
            Ver projeto
          </a>
        </div>
      </div>

      {/* Portfolio */}
      <div className="card-bg project-card">
        <div>
          <h2 className="text-main">Portfolio Web</h2>
          <p className="text-secondary">
            Site pessoal desenvolvido com React e Vite.
          </p>
        </div>

        {/* Badges + botão alinhados à direita */}
        <div className="project-footer">
          <div className="tech-badges">
            <span className="badge">React</span>
            <span className="badge">Vite</span>
            <span className="badge">CSS</span>
            <span className="badge">HTML</span>
            <span className="badge">JSON</span>
          </div>

          <a className="link-button" href="#" target="_blank" rel="noopener noreferrer">
            Ver projeto
          </a>
        </div>
      </div>

      <ul>
        <li className="text-secondary">
          💡 Dica: Edite este conteúdo em <code>src/pages/Projetos.jsx</code> para adicionar seus próprios projetos.
        </li>
      </ul>

    </section>
  );
}
