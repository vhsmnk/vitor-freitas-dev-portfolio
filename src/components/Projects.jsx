
import { useState } from "react";
import { useTranslation } from "react-i18next";

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
  { id: "orbit", number: "01" },
  { id: "nexus", number: "02" },
  { id: "jaguar", number: "03" },
  { id: "econix", number: "04" },
];

const projectCategories = {
  orbit: "landingCategory",
  nexus: "dashboardCategory",
  jaguar: "systemCategory",
  econix: "ecommerceCategory",
};

const landingPages = [
  {
    id: "orbit-landing",
    image: orbitFull,
    thumbnail: orbitPrint,
    url: "https://vhsmnk.github.io/orbit/",
  },
  {
    id: "design-page",
    image: designPageFull,
    thumbnail: designPagePrint,
    url: "https://vhsmnk.github.io/landing-design-page/",
  },
];

const nexusImages = [
  { id: "nexus-1", image: nexusImage1 },
  { id: "nexus-2", image: nexusImage2 },
];

const jaguarVideos = [
  { id: "jaguar-demo-1", video: jaguarVideo1 },
  { id: "jaguar-demo-2", video: jaguarVideo2 },
  { id: "jaguar-demo-3", video: jaguarVideo3 },
  { id: "jaguar-demo-4", video: jaguarVideo4 },
  { id: "jaguar-demo-5", video: jaguarVideo5 },
];

function BackToProjects({ onClick }) {
  const { t } = useTranslation();

  return (
    <div className="project-back-footer">
      <button
        type="button"
        className="project-back-bottom-button"
        onClick={onClick}
      >
        <span aria-hidden="true">←</span>
        {t("projects.back")}
      </button>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const { t } = useTranslation();

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

  function getProjectTitle(project) {
    return t(`projects.${project.id}.title`);
  }

  function getProjectDescription(project) {
    return t(`projects.${project.id}.description`);
  }

  function getProjectCategory(project) {
    return t(`projects.${projectCategories[project.id]}`);
  }

  return (
    <section className="projects-section" id="projetos">
      <div className="projects-container">
        <div className="projects-heading">
          <span className="eyebrow">
            {t("projects.eyebrow")}
          </span>

          <h2>{t("projects.heading")}</h2>

          <p>{t("projects.description")}</p>
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
                    project.id === "orbit"
                      ? "orbit-project-card"
                      : ""
                  } ${
                    project.id === "nexus" ||
                    project.id === "jaguar"
                      ? "projects-image-card"
                      : ""
                  }`}
                  key={project.id}
                  onClick={() => openProject(project)}
                  onKeyDown={(event) =>
                    handleCardKeyDown(event, project)
                  }
                  role="button"
                  tabIndex={0}
                  aria-label={t("projects.openProject", {
                    title: getProjectTitle(project),
                  })}
                >
                  {project.id === "orbit" ? (
                    <div className="orbit-preview-stack">
                      <div className="orbit-preview-image orbit-preview-image-back">
                        <img
                          src={designPagePrint}
                          alt={t("projects.orbit.previewDesign")}
                          loading="lazy"
                        />
                      </div>

                      <div className="orbit-preview-image orbit-preview-image-front">
                        <img
                          src={orbitPrint}
                          alt={t("projects.orbit.previewOrbit")}
                          loading="lazy"
                        />
                      </div>

                      <span className="orbit-preview-label">
                        {t("projects.orbit.previewCount")}
                      </span>
                    </div>
                  ) : (
                    <div className="projects-card-image-wrapper">
                      <img
                        className="projects-card-image"
                        src={
                          project.id === "nexus"
                            ? nexusPrint
                            : jaguarImage
                        }
                        alt={t(
                          `projects.${project.id}.imageAlt`
                        )}
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="projects-card-info">
                    <div className="projects-card-meta">
                      <span>{project.number}</span>
                      <span>{getProjectCategory(project)}</span>
                    </div>

                    <div className="projects-card-title-row">
                      <h3>{getProjectTitle(project)}</h3>

                      <span
                        className="projects-card-arrow"
                        aria-hidden="true"
                      >
                        ↗
                      </span>
                    </div>

                    <p>{getProjectDescription(project)}</p>
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
                  {t("projects.projectLabel")}{" "}
                  {selectedProject.number} /{" "}
                  {getProjectCategory(selectedProject)}
                </span>

                <h3>{getProjectTitle(selectedProject)}</h3>
              </div>

              <button
                type="button"
                className="project-close-button"
                onClick={closeProject}
                aria-label={t("projects.back")}
              >
                <span aria-hidden="true">←</span>
                {t("projects.back")}
              </button>
            </div>

            {selectedProject.id === "orbit" ? (
              <div className="landing-pages-expanded-grid">
                {landingPages.map((page, index) => {
                  const items = t("projects.orbit.items", {
                    returnObjects: true,
                  });
                  const translatedPage = items[index];

                  return (
                    <article
                      className="landing-page-detail-card"
                      key={page.id}
                    >
                      <div className="landing-page-detail-media">
                        <img
                          src={page.image}
                          alt={t("projects.orbit.fullPreview", {
                            title: translatedPage.title,
                          })}
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      </div>

                      <div className="landing-page-detail-content">
                        <span className="eyebrow">
                          LANDING PAGE 0{index + 1}
                        </span>

                        <h4>{translatedPage.title}</h4>
                        <p>{translatedPage.description}</p>

                        <a
                          className="landing-page-detail-button"
                          href={page.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t("projects.orbit.visit")}{" "}
                          <span aria-hidden="true">↗</span>
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : selectedProject.id === "nexus" ? (
              <div className="project-single-detail project-detail-nexus">
                <div className="project-single-copy project-description-nexus">
                  <span className="eyebrow">
                    {t("projects.nexus.development")}
                  </span>

                  <h4>{t("projects.nexus.headline")}</h4>

                  <p>{t("projects.nexus.paragraph1")}</p>
                  <p>{t("projects.nexus.paragraph2")}</p>
                  <p>{t("projects.nexus.paragraph3")}</p>
                </div>

                <div className="nexus-gallery">
                  {nexusImages.map((item, index) => {
                    const imageTitles = t("projects.nexus.images", {
                      returnObjects: true,
                    });

                    return (
                      <figure
                        className="nexus-gallery-item"
                        key={item.id}
                      >
                        <figcaption className="nexus-gallery-caption">
                          <span className="nexus-gallery-dot" />
                          {imageTitles[index]}
                        </figcaption>

                        <div className="nexus-gallery-media">
                          <img
                            src={item.image}
                            alt={t("projects.nexus.imageAltDetail", {
                              title: imageTitles[index],
                            })}
                            loading={index === 0 ? "eager" : "lazy"}
                          />
                        </div>
                      </figure>
                    );
                  })}
                </div>
              </div>
            ) : selectedProject.id === "jaguar" ? (
              <div className="project-single-detail project-detail-jaguar">
                <div className="project-single-copy project-description-jaguar">
                  <span className="eyebrow">
                    {t("projects.jaguar.eyebrow")}
                  </span>

                  <h4>{t("projects.jaguar.headline")}</h4>

                  <p>{t("projects.jaguar.paragraph1")}</p>
                  <p>{t("projects.jaguar.paragraph2")}</p>
                  <p>{t("projects.jaguar.paragraph3")}</p>
                </div>

                <div className="jaguar-video-list">
                  {jaguarVideos.map((item, index) => (
                    <div
                      className="jaguar-video-item"
                      key={item.id}
                    >
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload={index === 0 ? "auto" : "metadata"}
                        aria-label={t("projects.jaguar.demo", {
                          number: index + 1,
                        })}
                      >
                        <source src={item.video} type="video/mp4" />
                        {t("projects.jaguar.videoFallback")}
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
                  <span className="eyebrow">
                    {t("projects.econix.concept")}
                  </span>

                  <h4>{t("projects.econix.headline")}</h4>

                  <p>{getProjectDescription(selectedProject)}</p>

                  <p className="project-development-note">
                    {t("projects.econix.developmentNote")}
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
