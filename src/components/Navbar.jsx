import { useState } from "react";
import "./Navbar.css";
import iconHex from "../images/iconhex.svg";

function Navbar() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

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
            <small>DESENVOLVIMENTO DIGITAL</small>
        </span>
        </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
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
        aria-label="Navegação principal"
      >
        <a href="#projetos" onClick={closeMenu}>
          Projetos
        </a>

        <a href="#servicos" onClick={closeMenu}>
          Serviços
        </a>

        <a href="#design" onClick={closeMenu}>
          Design
        </a>

        <a
          className="nav-contact"
          href="#contato"
          onClick={closeMenu}
        >
          Vamos conversar <span>↗</span>
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
