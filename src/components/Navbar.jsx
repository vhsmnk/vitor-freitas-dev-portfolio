import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";
import iconHex from "../images/iconhex.svg";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  function closeMenu() {
    setOpen(false);
  }

  function changeLanguage(language) {
    i18n.changeLanguage(language);
    closeMenu();
  }

  const currentLanguage = i18n.resolvedLanguage || i18n.language;

  return (
    <header className="site-header">
      <a
        className="brand"
        href="#inicio"
        aria-label="Vitor Hugo Freitas — início"
        onClick={closeMenu}
      >
        <span className="brand-mark">
          <img src={iconHex} alt="" />
        </span>

        <span className="brand-name">
          VITOR FREITAS
          <br />
          <small>{t("navbar.brandSubtitle")}</small>
        </span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={
          open ? t("navbar.closeMenu") : t("navbar.openMenu")
        }
        aria-expanded={open}
        aria-controls="main-navigation"
        onClick={() => setOpen((current) => !current)}
      >
        <span />
        <span />
      </button>

      <nav
        id="main-navigation"
        className={`nav ${open ? "open" : ""}`}
        aria-label={t("navbar.navigationLabel")}
      >
        <a href="#projetos" onClick={closeMenu}>
          {t("navbar.projects")}
        </a>

        <a href="#servicos" onClick={closeMenu}>
          {t("navbar.services")}
        </a>

        <a href="#design" onClick={closeMenu}>
          {t("navbar.design")}
        </a>

        <a
          className="nav-contact"
          href="#contato"
          onClick={closeMenu}
        >
          {t("navbar.contact")} <span>↗</span>
        </a>

        <div className="language-switcher" aria-label="Idioma">
          <button
            type="button"
            className={currentLanguage === "pt" ? "active" : ""}
            aria-label="Português"
            aria-pressed={currentLanguage === "pt"}
            onClick={() => changeLanguage("pt")}
          >
            🇧🇷
          </button>

          <button
            type="button"
            className={currentLanguage === "en" ? "active" : ""}
            aria-label="English"
            aria-pressed={currentLanguage === "en"}
            onClick={() => changeLanguage("en")}
          >
            🇺🇸
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;