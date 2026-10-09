
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import HeroVisual from "./components/HeroVisual.jsx";
import ScrollReveal from "./components/ScrollReveal.jsx";
import Projects from "./components/Projects.jsx";
import SocialMedia from "./socialmedia/SocialMedia.jsx";

const heroTitleLines = [
  "Ideias bem pensadas.",
  "Soluções digitais",
  "bem construídas.",
];

function TypingTitle() {
  const [typedCount, setTypedCount] = useState(0);

  const totalCharacters = heroTitleLines.reduce(
    (total, line) => total + line.length,
    0
  );

  useEffect(() => {
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
  }, [totalCharacters]);

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
    <h1 className="hero-title" aria-label={heroTitleLines.join(" ")}>
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
  return (
    <>
      <ScrollReveal />

      <div className="noise" aria-hidden="true" />

      <Navbar />

      <main>
        {/* 01 — HERO */}
        <section className="hero section-shell" id="inicio">
          <div className="hero-content">
            <p className="eyebrow">
              DESENVOLVIMENTO WEB · DESIGN DIGITAL
            </p>

            <TypingTitle />

            <p className="hero-description">
              Desenvolvo experiências digitais que unem tecnologia,
              funcionalidade e cuidado visual — de landing pages a sistemas
              web.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">
                Explorar projetos <span>↗</span>
              </a>

              <a className="text-link" href="#contato">
                Vamos conversar <span>↗</span>
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
              <p className="eyebrow">03 / COMO POSSO AJUDAR</p>

              <h2>
                O que podemos <span>construir?</span>
              </h2>
            </div>

            <p>
              Soluções pensadas de acordo com o objetivo, o contexto e as
              necessidades de cada projeto.
            </p>
          </div>

          <div className="service-list">
            <ServiceItem
              number="01"
              icon="↗"
              title="Sites & landing pages"
            >
              Páginas de apresentação, sites institucionais e páginas
              comerciais para apresentar sua marca e facilitar o contato com
              seus clientes.
            </ServiceItem>

            <ServiceItem
              number="02"
              icon="⌘"
              title="Sistemas & aplicações web"
            >
              Interfaces administrativas, dashboards e ferramentas internas
              para organizar fluxos de trabalho e informações.
            </ServiceItem>

            <ServiceItem
              number="03"
              icon="✳"
              title="Design digital"
            >
              Identidade visual e peças para redes sociais que ajudam marcas
              a comunicar com mais consistência e personalidade.
            </ServiceItem>
          </div>
        </section>

        {/* 04 — DESIGN & COMUNICAÇÃO VISUAL */}
        <section className="design-section section-shell" id="design">
          <div className="design-copy">
            <p className="eyebrow">04 / DESIGN & COMUNICAÇÃO VISUAL</p>

            <h2>
              Desenvolvimento com <span>sensibilidade visual.</span>
            </h2>

            <p>
              Além do código, trago experiência com design gráfico e
              comunicação visual. Explore uma seleção de peças para redes
              sociais que valorizam composição, identidade e comunicação.
            </p>

            <a
              className="text-link"
              href="https://vitorfreitaspresentate.carrd.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Conheça meu portfólio <span>↗</span>
            </a>
          </div>

          <SocialMedia />
        </section>

        {/* 05 — PROCESSO */}
        <section className="process section-shell" id="processo">
          <div className="section-heading">
            <div>
              <p className="eyebrow">05 / PROCESSO</p>

              <h2>
                Do primeiro papo
                <br />
                <span>à entrega.</span>
              </h2>
            </div>

            <p>
              Um processo direto, com escopo claro e decisões alinhadas ao que
              o projeto realmente precisa.
            </p>
          </div>

          <div className="process-grid">
            <article>
              <span>01</span>
              <h3>Entender</h3>
              <p>
                Conversamos sobre o negócio, o público e o que precisa ser
                resolvido.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Planejar</h3>
              <p>
                Definimos escopo, funcionalidades, prazo e investimento.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Construir</h3>
              <p>
                Desenvolvo a solução acompanhando os objetivos combinados.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>Entregar</h3>
              <p>
                Organizamos a publicação, a entrega e possíveis necessidades
                futuras.
              </p>
            </article>
          </div>
        </section>

        {/* 06 — CONTATO */}
        <section className="contact section-shell" id="contato">
          <div className="contact-panel">
            <div className="contact-orb" />

            <p className="eyebrow">06 / CONTATO</p>

            <h2>
              Tem uma ideia?
              <br />
              <span>Vamos conversar.</span>
            </h2>

            <p className="contact-description">
              Me conte o que você precisa construir. A partir daí, podemos
              entender o projeto e pensar no próximo passo.
            </p>

            <div className="contact-actions">
              {/* E-MAIL: altere o endereço se necessário */}
              <a
                className="button button-primary"
                href="mailto:vhs.gamesdev@gmail.com?subject=Vamos%20conversar%20sobre%20um%20projeto"
              >
                E-mail <span>↗</span>
              </a>

              {/* WHATSAPP: substitua 55SEUNUMERO pelo número completo */}
              <a
                className="text-link"
                href="https://wa.me/5521973560200"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp <span>↗</span>
              </a>

              {/* INSTAGRAM: substitua SEU_USUARIO pelo seu usuário */}
              <a
                className="text-link"
                href="https://www.instagram.com/freitasveetor/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram <span>↗</span>
              </a>
            </div>

            <span className="contact-signature">
              VITOR HUGO FREITAS / DESENVOLVIMENTO DIGITAL
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
            <small>DESENVOLVIMENTO DIGITAL</small>
          </span>
        </a>

        <span>
          © {new Date().getFullYear()} Vitor Hugo Freitas
        </span>

        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </>
  );
}

export default App;