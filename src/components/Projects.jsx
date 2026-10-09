
import { useState } from "react";
import orbitPrint from "../images/orbit_print.png";
import orbitFull from "../images/orbit_full.png";

const projects = [
  {
    id: "orbit",
    number: "01",
    category: "LANDING PAGES",
    title: "Orbit",
  },
  {
    id: "nexus",
    number: "02",
    category: "DASHBOARDS",
    title: "Nexus",
  },
  {
    id: "jaguar",
    number: "03",
    category: "SISTEMAS WEB",
    title: "Jaguar",
  },
  {
    id: "econix",
    number: "04",
    category: "E-COMMERCE",
    title: "Econix",
  },
];

const orbitUrl = "COLE_AQUI_O_LINK_DO_ORBIT";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  function openProject(project) {
    if (project.id === "orbit") {
      setSelectedProject(project);
    }
  }

  function closeProject() {
    setSelectedProject(null);
  }

  return (
    <section className="projects section-shell" id="projetos">
      <div className="section-heading">
        <div>
          <p className="eyebrow">02 / PROJETOS SELECIONADOS</p>

          <h2>
            Trabalho em <span>construção.</span>
          </h2>
        </div>

        <p>
          Projetos que demonstram diferentes frentes do desenvolvimento web
          — da interface à organização de informações.
        </p>
      </div>

      {!selectedProject ? (
        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className={`projects-grid-card ${
                project.id === "orbit" ? "orbit-project-card" : ""
              }`}
              key={project.id}
              onClick={() => openProject(project)}
              onKeyDown={(event) => {
                if (
                  project.id === "orbit" &&
                  (event.key === "Enter" || event.key === " ")
                ) {
                  event.preventDefault();
                  openProject(project);
                }
              }}
              role={project.id === "orbit" ? "button" : undefined}
              tabIndex={project.id === "orbit" ? 0 : undefined}
              aria-label={
                project.id === "orbit"
                  ? "Explorar projeto Orbit"
                  : undefined
              }
            >
              {project.id === "orbit" ? (
                <>
                  <div className="projects-card-image-wrapper">
                    <img
                      className="projects-card-image"
                      src={orbitPrint}
                      alt="Prévia da landing page Orbit"
                      loading="lazy"
                    />
                  </div>

                  <div className="projects-card-info">
                    <span className="projects-card-category">
                      {project.category}
                    </span>

                    <span className="orbit-card-action">
                      Explorar projeto <span aria-hidden="true">↗</span>
                    </span>
                  </div>
                </>
              ) : (
                <div className="projects-card-info projects-card-info-placeholder">
                  <span className="projects-card-number">
                    {project.number}
                  </span>

                  <span className="projects-card-category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>
                </div>
              )}
            </article>
          ))}
        </div>
      ) : (
        <div className="project-expanded">
          <div className="project-expanded-header">
            <span className="eyebrow">
              PROJETO 01 / LANDING PAGES
            </span>

            <button
              type="button"
              className="project-close-button"
              onClick={closeProject}
              aria-label="Voltar para os projetos"
            >
              <span aria-hidden="true">×</span>
              Voltar aos projetos
            </button>
          </div>

          <div className="project-expanded-layout">
            <div className="project-expanded-media">
              <img
                src={orbitFull}
                alt="Visualização completa da landing page Orbit"
              />
            </div>

            <div className="project-expanded-content">
              <p className="eyebrow">LANDING PAGES</p>

              <h3>
                Orbit<span>.</span>
              </h3>

              <p>
                Uma landing page é uma página criada com foco em apresentar
                um produto, serviço ou ideia de forma clara e direcionar
                o visitante para uma ação, como conhecer uma solução,
                entrar em contato ou iniciar uma experiência.
              </p>

              <p>
                O Orbit é um exemplo prático desse conceito, reunindo
                identidade visual, organização de conteúdo e uma experiência
                de navegação pensada para apresentar uma proposta ao público.
              </p>

              <p>
                E esta própria página de portfólio também funciona como
                uma demonstração de landing page: sua estrutura apresenta
                projetos, comunica competências e direciona o visitante
                para conhecer o trabalho.
              </p>

              <a
                className="button button-primary orbit-test-button"
                href={orbitUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Testar Orbit <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}