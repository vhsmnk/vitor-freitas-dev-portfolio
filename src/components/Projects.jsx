
import { useState } from "react";

import orbitPrint from "../images/orbit_print.png";
import orbitFull from "../images/orbit_full.png";

import designPagePrint from "../images/desingpage_print.png";
import designPageFull from "../images/desingpage_full.png";

import nexusPrint from "../images/nexus_print.png";
import nexusImage1 from "../images/nexus_1.png";
import nexusImage2 from "../images/nexus_2.png";

import jaguarImage from "../images/jaguarai_logo.svg";
import jaguarVideo1 from "../images/jaguar-demo1.mp4";
import jaguarVideo2 from "../images/jaguar-demo2.mp4";
import jaguarVideo3 from "../images/jaguar-demo3.mp4";
import jaguarVideo4 from "../images/jaguar-demo4.mp4";
import jaguarVideo5 from "../images/jaguar-demo5.mp4";

import Econix from "./Econix";

const projects = [
  {
    id: "orbit",
    number: "01",
    category: "LANDING PAGES",
    title: "Landing Pages",
    description:
      "Coleção de landing pages desenvolvidas com foco em identidade visual, experiência do usuário e design responsivo.",
  },
  {
    id: "nexus",
    number: "02",
    category: "DASHBOARDS",
    title: "Nexus Dashboard",
    description:
      "Dashboard desenvolvido como demonstração prática de construção de interfaces analíticas, visualização de dados e integração com APIs.",
    image: nexusPrint,
    imageAlt: "Prévia do dashboard Nexus",
  },
  {
    id: "jaguar",
    number: "03",
    category: "SISTEMAS WEB",
    title: "Jaguar.AI",
    description:
      "Um workspace inteligente baseado em IA para centralizar conversas, conhecimento e documentos em um único ambiente.",
    image: jaguarImage,
    imageAlt: "Logo do sistema Jaguar.AI",
  },
  {
    id: "econix",
    number: "04",
    category: "E-COMMERCE",
    title: "Econix",
    description:
      "Conceito de e-commerce com identidade visual contemporânea, experiência de compra intuitiva e interface responsiva.",
  },
];

const landingPages = [
  {
    id: "orbit-landing",
    title: "Orbit",
    description:
      "Landing page com identidade visual marcante, composição moderna e apresentação objetiva do conteúdo.",
    image: orbitFull,
    thumbnail: orbitPrint,
    url: "https://vhsmnk.github.io/orbit/",
  },
  {
    id: "design-page",
    title: "Design Page",
    description:
      "Landing page com foco em apresentação visual, hierarquia de conteúdo e experiência de navegação.",
    image: designPageFull,
    thumbnail: designPagePrint,
    url: "https://vhsmnk.github.io/landing-design-page/",
  },
];

const nexusImages = [
  {
    id: "nexus-1",
    title: "Visão geral",
    image: nexusImage1,
  },
  {
    id: "nexus-2",
    title: "Detalhes",
    image: nexusImage2,
  },
];

const jaguarVideos = [
  { id: "jaguar-demo-1", video: jaguarVideo1 },
  { id: "jaguar-demo-2", video: jaguarVideo2 },
  { id: "jaguar-demo-3", video: jaguarVideo3 },
  { id: "jaguar-demo-4", video: jaguarVideo4 },
  { id: "jaguar-demo-5", video: jaguarVideo5 },
];

function BackToProjects({ onClick }) {
  return (
    <div className="project-back-footer">
      <button
        type="button"
        className="project-back-bottom-button"
        onClick={onClick}
      >
        <span aria-hidden="true">←</span>
        Voltar aos projetos
      </button>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  function openProject(project) {
    setSelectedProject(project);
  }

  function closeProject() {
    setSelectedProject(null);
  }

  function handleCardKeyDown(event, project) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject(project);
    }
  }

  return (
    <section className="projects-section" id="projetos">
      <div className="projects-container">
        <div className="projects-heading">
          <span className="eyebrow">PORTFÓLIO</span>
          <h2>Projetos selecionados</h2>
          <p>
            Uma seleção de interfaces, experiências digitais e sistemas web.
          </p>
        </div>

        {!selectedProject ? (
          <div className="projects-grid">
            {projects.map((project) =>
              project.id === "econix" ? (
                <Econix
                  key={project.id}
                  onClick={() => openProject(project)}
                  onKeyDown={(event) =>
                    handleCardKeyDown(event, project)
                  }
                />
              ) : (
                <article
                  className={`projects-grid-card ${
                    project.id === "orbit" ? "orbit-project-card" : ""
                  } ${project.image ? "projects-image-card" : ""}`}
                  key={project.id}
                  onClick={() => openProject(project)}
                  onKeyDown={(event) =>
                    handleCardKeyDown(event, project)
                  }
                  role="button"
                  tabIndex={0}
                  aria-label={`Abrir projeto ${project.title}`}
                >
                  {project.id === "orbit" ? (
                    <div className="orbit-preview-stack">
                      <div className="orbit-preview-image orbit-preview-image-back">
                        <img
                          src={designPagePrint}
                          alt="Prévia da landing page Design Page"
                          loading="lazy"
                        />
                      </div>

                      <div className="orbit-preview-image orbit-preview-image-front">
                        <img
                          src={orbitPrint}
                          alt="Prévia da landing page Orbit"
                          loading="lazy"
                        />
                      </div>

                      <span className="orbit-preview-label">
                        02 LANDING PAGES
                      </span>
                    </div>
                  ) : (
                    <div className="projects-card-image-wrapper">
                      <img
                        className="projects-card-image"
                        src={project.image}
                        alt={project.imageAlt}
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="projects-card-info">
                    <div className="projects-card-meta">
                      <span>{project.number}</span>
                      <span>{project.category}</span>
                    </div>

                    <div className="projects-card-title-row">
                      <h3>{project.title}</h3>

                      <span
                        className="projects-card-arrow"
                        aria-hidden="true"
                      >
                        ↗
                      </span>
                    </div>

                    <p>{project.description}</p>
                  </div>
                </article>
              )
            )}
          </div>
        ) : (
          <div className="project-expanded" key={selectedProject.id}>
            <div className="project-expanded-header">
              <div>
                <span className="eyebrow">
                  PROJETO {selectedProject.number} /{" "}
                  {selectedProject.category}
                </span>

                <h3>{selectedProject.title}</h3>
              </div>

              <button
                type="button"
                className="project-close-button"
                onClick={closeProject}
                aria-label="Voltar para todos os projetos"
              >
                <span aria-hidden="true">←</span>
                Voltar aos projetos
              </button>
            </div>

            {selectedProject.id === "orbit" ? (
              <div className="landing-pages-expanded-grid">
                {landingPages.map((page, index) => (
                  <article
                    className="landing-page-detail-card"
                    key={page.id}
                  >
                    <div className="landing-page-detail-media">
                      <img
                        src={page.image}
                        alt={`Prévia completa da landing page ${page.title}`}
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>

                    <div className="landing-page-detail-content">
                      <span className="eyebrow">
                        LANDING PAGE 0{index + 1}
                      </span>

                      <h4>{page.title}</h4>
                      <p>{page.description}</p>

                      <a
                        className="landing-page-detail-button"
                        href={page.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visitar projeto <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            ) : selectedProject.id === "nexus" ? (
              <div className="project-single-detail project-detail-nexus">
                <div className="project-single-copy project-description-nexus">
                  <span className="eyebrow">
                    DESENVOLVIMENTO DE DASHBOARDS
                  </span>

                  <h4>Transformando dados em informação visual.</h4>

                  <p>
                    Este projeto representa minha capacidade de desenvolver
                    dashboards, estruturar interfaces analíticas e apresentar
                    informações de maneira organizada e intuitiva.
                  </p>

                  <p>
                    O exemplo utiliza um dashboard voltado ao YouTube,
                    integrando dados por meio da API da plataforma para
                    demonstrar como informações de um serviço externo podem
                    ser apresentadas em uma interface própria.
                  </p>

                  <p>
                    O foco está na construção da interface, na visualização
                    dos indicadores e na integração entre a aplicação e a
                    fonte de dados.
                  </p>
                </div>

                <div className="nexus-gallery">
                  {nexusImages.map((item, index) => (
                    <figure
                      className="nexus-gallery-item"
                      key={item.id}
                    >
                      <figcaption className="nexus-gallery-caption">
                        <span className="nexus-gallery-dot" />
                        {item.title}
                      </figcaption>

                      <div className="nexus-gallery-media">
                        <img
                          src={item.image}
                          alt={`${item.title} do dashboard Nexus`}
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      </div>
                    </figure>
                  ))}
                </div>
              </div>
            ) : selectedProject.id === "jaguar" ? (
              <div className="project-single-detail project-detail-jaguar">
                <div className="project-single-copy project-description-jaguar">
                  <span className="eyebrow">
                    WORKSPACE INTELIGENTE BASEADO EM IA
                  </span>

                  <h4>Uma camada de inteligência para o trabalho.</h4>

                  <p>
                    JAGUAR.AI é um workspace inteligente baseado em IA,
                    desenvolvido para centralizar conversas, conhecimento,
                    documentos e, futuramente, dados organizacionais em um
                    único ambiente.
                  </p>

                  <p>
                    A proposta do Jaguar é evoluir de um assistente
                    conversacional para uma camada de inteligência capaz de
                    interagir com o conhecimento e os sistemas de uma
                    organização.
                  </p>

                  <p>
                    As demonstrações abaixo apresentam diferentes partes da
                    interface e da experiência de uso do projeto.
                  </p>
                </div>

                <div className="jaguar-video-list">
                  {jaguarVideos.map((item, index) => (
                    <div className="jaguar-video-item" key={item.id}>
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload={index === 0 ? "auto" : "metadata"}
                        aria-label={`Demonstração ${index + 1} do Jaguar.AI`}
                      >
                        <source src={item.video} type="video/mp4" />
                        Seu navegador não suporta a reprodução de vídeo.
                      </video>
                    </div>
                  ))}
                </div>
              </div>
            ) : selectedProject.id === "econix" ? (
              <div className="project-single-detail project-detail-econix">
                <div className="project-single-preview econix-detail-preview">
                  <div className="econix-detail-topbar">
                    <span className="econix-detail-brand">econix.</span>

                    <span className="econix-detail-status">
                      EM DESENVOLVIMENTO
                    </span>
                  </div>

                  <div className="econix-detail-hero">
                    <span>DESIGN CONSCIENTE. VIDA MODERNA.</span>
                    <h4>Escolhas melhores começam aqui.</h4>

                    <p>
                      Um conceito de loja online pensado para unir
                      simplicidade, estilo e praticidade.
                    </p>

                    <span className="econix-detail-cta">
                      EXPLORAR COLEÇÃO ↗
                    </span>
                  </div>

                  <div className="econix-detail-products">
                    <div>
                      <span>01</span>
                      <strong>Essenciais</strong>
                    </div>

                    <div>
                      <span>02</span>
                      <strong>Casa &amp; rotina</strong>
                    </div>

                    <div>
                      <span>03</span>
                      <strong>Novidades</strong>
                    </div>
                  </div>
                </div>

                <div className="project-single-copy">
                  <span className="eyebrow">CONCEITO DE E-COMMERCE</span>

                  <h4>Uma experiência de compra mais simples.</h4>

                  <p>{selectedProject.description}</p>

                  <p className="project-development-note">
                    Este projeto está em desenvolvimento. A prévia apresenta
                    a direção visual conceitual da experiência.
                  </p>
                </div>
              </div>
            ) : null}

            <BackToProjects onClick={closeProject} />
          </div>
        )}
      </div>
    </section>
  );
}