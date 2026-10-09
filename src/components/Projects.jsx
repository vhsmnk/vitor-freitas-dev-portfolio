
import { useState } from "react";
import orbitPrint from "../images/orbit_print.png";
import orbitFull from "../images/orbit_full.png";
import designPagePrint from "../images/desingpage_print.png";
import designPageFull from "../images/desingpage_full.png";
const projects = [
  {
    id: "orbit",
    number: "01",
    category: "LANDING PAGES",
    title: "Landing Pages",
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

const landingPages = [
  {
    id: "orbit",
    title: "Orbit",
    image: orbitFull,
    alt: "Visualização completa da landing page Orbit",
    url: "https://vhsmnk.github.io/orbit/",
    description:
      "Uma landing page que combina identidade visual, organização de conteúdo e uma experiência de navegação voltada à apresentação de uma proposta.",
  },
  {
    id: "design-page",
    title: "Design Page",
    image: designPageFull,
    alt: "Visualização completa da landing page Design Page",
    url: "https://vhsmnk.github.io/landing-design-page/",
    description:
      "Um projeto de landing page que apresenta uma experiência visual própria, com estrutura de conteúdo e interface desenvolvidas para a web.",
  },
];

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
                  ? "Explorar projetos de landing pages"
                  : undefined
              }
            >
              {project.id === "orbit" ? (
                <>
                  <div className="landing-page-preview-stack">
                    <div className="landing-page-preview-item">
                      <img
                        className="landing-page-preview-image"
                        src={orbitPrint}
                        alt="Prévia da landing page Orbit"
                        loading="lazy"
                      />
                      <span className="landing-page-preview-label">
                        Orbit
                      </span>
                    </div>

                    <div className="landing-page-preview-item">
                      <img
                        className="landing-page-preview-image"
                        src={designPagePrint}
                        alt="Prévia da landing page Design Page"
                        loading="lazy"
                      />
                      <span className="landing-page-preview-label">
                        Design Page
                      </span>
                    </div>
                  </div>

                  <div className="projects-card-info">
                    <span className="projects-card-category">
                      {project.category}
                    </span>

                    <span className="orbit-card-action">
                      Explorar projetos{" "}
                      <span aria-hidden="true">↗</span>
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

          <div className="landing-pages-expanded-grid">
            {landingPages.map((page, index) => (
              <article
                className="landing-page-detail-card"
                key={page.id}
                style={{ "--page-index": index }}
              >
                <div className="landing-page-detail-media">
                  <img
                    src={page.image}
                    alt={page.alt}
                    loading="lazy"
                  />
                </div>

                <div className="landing-page-detail-content">
                  <p className="eyebrow">LANDING PAGE / 0{index + 1}</p>

                  <h3>
                    {page.title}<span>.</span>
                  </h3>

                  <p className="landing-page-description">
                    {page.description}
                  </p>

                  <a
                    className="button button-primary orbit-test-button"
                    href={page.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Testar {page.title}{" "}
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}