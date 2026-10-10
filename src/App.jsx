import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import CodeAtmosphere from "./components/CodeAtmosphere.jsx";
import Navbar from "./components/Navbar.jsx";
import HeroVisual from "./components/HeroVisual.jsx";
import ScrollReveal from "./components/ScrollReveal.jsx";
import Projects from "./components/Projects.jsx";
import SocialMedia from "./socialmedia/SocialMedia.jsx";

function TypingTitle() {
  const { t, i18n } = useTranslation();

  const heroTitleLines = [
    t("hero.titleLine1"),
    t("hero.titleLine2"),
    t("hero.titleLine3"),
  ];

  const [typedCount, setTypedCount] = useState(0);

  const totalCharacters = heroTitleLines.reduce(
    (total, line) => total + line.length,
    0
  );

  useEffect(() => {
    setTypedCount(0);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTypedCount(totalCharacters);
      return;
    }

    let typingTimer;

    const startTimer = window.setTimeout(() => {
      let currentCharacter = 0;

      typingTimer = window.setInterval(() => {
        currentCharacter += 1;
        setTypedCount(currentCharacter);

        if (currentCharacter >= totalCharacters) {
          window.clearInterval(typingTimer);
        }
      }, 42);
    }, 450);

    return () => {
      window.clearTimeout(startTimer);

      if (typingTimer) {
        window.clearInterval(typingTimer);
      }
    };
  }, [totalCharacters, i18n.resolvedLanguage]);

  const getVisibleText = (lineIndex) => {
    const previousCharacters = heroTitleLines
      .slice(0, lineIndex)
      .reduce((total, line) => total + line.length, 0);

    const visibleCharacters = Math.max(
      0,
      Math.min(
        heroTitleLines[lineIndex].length,
        typedCount - previousCharacters
      )
    );

    return heroTitleLines[lineIndex].slice(0, visibleCharacters);
  };

  return (
    <h1
      className="hero-title"
      aria-label={heroTitleLines.join(" ")}
    >
      <span aria-hidden="true">{getVisibleText(0)}</span>

      <br aria-hidden="true" />

      <span className="hero-title-accent" aria-hidden="true">
        {getVisibleText(1)}
      </span>

      <br aria-hidden="true" />

      <span aria-hidden="true">{getVisibleText(2)}</span>

      {typedCount < totalCharacters && (
        <span className="typing-cursor" aria-hidden="true" />
      )}
    </h1>
  );
}

function ServiceItem({ number, icon, title, children }) {
  return (
    <article className="service-item">
      <span className="service-index">{number}</span>

      <div className="service-icon">{icon}</div>

      <div className="service-copy">
        <h3>{title}</h3>
        <p>{children}</p>
      </div>

      <span className="service-arrow">↗</span>
    </article>
  );
}

function App() {
  const { t } = useTranslation();

  const services = t("services.items", {
    returnObjects: true,
  });

  const steps = t("process.steps", {
    returnObjects: true,
  });

  return (
    <>
      <CodeAtmosphere />

      <ScrollReveal />

      <div className="noise" aria-hidden="true" />

      <Navbar />

      <main>
        {/* 01 — HERO */}
        <section className="hero section-shell" id="inicio">
          <div className="hero-content">
            <p className="eyebrow">
              {t("hero.eyebrow")}
            </p>

            <TypingTitle />

            <p className="hero-description">
              {t("hero.description")}
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">
                {t("hero.projectsButton")} <span>↗</span>
              </a>

              <a className="text-link" href="#contato">
                {t("hero.contactButton")} <span>↗</span>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <HeroVisual />
          </div>
        </section>

        {/* 02 — PROJETOS */}
        <Projects />

        {/* 03 — SERVIÇOS */}
        <section className="services section-shell" id="servicos">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                {t("services.eyebrow")}
              </p>

              <h2>
                {t("services.title")}{" "}
                <span>{t("services.titleAccent")}</span>
              </h2>
            </div>

            <p>{t("services.description")}</p>
          </div>

          <div className="service-list">
            {services.map((service, index) => (
              <ServiceItem
                key={service.title}
                number={String(index + 1).padStart(2, "0")}
                icon={["↗", "⌘", "✳"][index]}
                title={service.title}
              >
                {service.description}
              </ServiceItem>
            ))}
          </div>
        </section>

        {/* 04 — DESIGN & COMUNICAÇÃO VISUAL */}
        <section className="design-section section-shell" id="design">
          <div className="design-copy">
            <p className="eyebrow">
              {t("design.eyebrow")}
            </p>

            <h2>
              {t("design.title")}{" "}
              <span>{t("design.titleAccent")}</span>
            </h2>

            <p>{t("design.description")}</p>

            <a
              className="text-link"
              href="https://vitorfreitaspresentate.carrd.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("design.button")} <span>↗</span>
            </a>
          </div>

          <SocialMedia />
        </section>

        {/* 05 — PROCESSO */}
        <section className="process section-shell" id="processo">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                {t("process.eyebrow")}
              </p>

              <h2>
                {t("process.title")}
                <br />
                <span>{t("process.titleAccent")}</span>
              </h2>
            </div>

            <p>{t("process.description")}</p>
          </div>

          <div className="process-grid">
            {steps.map((step, index) => (
              <article key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 06 — CONTATO */}
        <section className="contact section-shell" id="contato">
          <div className="contact-panel">
            <div className="contact-orb" />

            <p className="eyebrow">
              {t("contact.eyebrow")}
            </p>

            <h2>
              {t("contact.title")}
              <br />
              <span>{t("contact.titleAccent")}</span>
            </h2>

            <p className="contact-description">
              {t("contact.description")}
            </p>

            <div className="contact-actions">
              <span className="contact-email">
                vhs.gamesdev@gmail.com
              </span>

              <a
                className="text-link contact-social-link"
                href="https://wa.me/5521973560200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("contact.whatsapp")} <span>↗</span>
              </a>

              <a
                className="text-link contact-social-link"
                href="https://www.instagram.com/freitasveetor/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("contact.instagram")} <span>↗</span>
              </a>
            </div>

            <span className="contact-signature">
              {t("contact.signature")}
            </span>
          </div>
        </section>
      </main>

      {/* RODAPÉ */}
      <footer className="site-footer section-shell">
        <a className="brand footer-brand" href="#inicio">
          <span className="brand-mark">
            VF<span>.</span>
          </span>

          <span className="brand-name">
            VITOR FREITAS
            <br />
            <small>{t("footer.brandSubtitle")}</small>
          </span>
        </a>

        <span>
          © {new Date().getFullYear()} {t("footer.copyright")}
        </span>

        <a href="#inicio">{t("footer.backToTop")}</a>
      </footer>
    </>
  );
}

export default App;