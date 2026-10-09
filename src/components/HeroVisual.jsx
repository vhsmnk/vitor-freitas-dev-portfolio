import iconHex from "../images/iconhex.svg";

function HeroVisual() {
  return (
    <div
      className="hero-visual"
      aria-label="Composição abstrata de interface digital"
    >
      <div className="visual-orbit orbit-one" />
      <div className="visual-orbit orbit-two" />

     
      <div className="visual-core">
        <img
          src={iconHex}
          alt="Logo Vitor Freitas Dev"
          className="visual-hexagon"
        />
        <i />
      </div>

      <div className="float-card card-top">
        <span className="mini-label">DIGITAL SYSTEMS</span>

        <strong>
          Construído
          <br />
          para funcionar.
        </strong>

        <span className="card-line" />
      </div>

      <div className="float-card card-bottom">
        <span className="pulse-bars">
          <i />
          <i />
          <i />
          <i />
          <i />
        </span>

        <span>
          Ideia <b>→</b> Estrutura <b>→</b> Solução
        </span>
      </div>

      <div className="visual-index">PORTFÓLIO / 2026</div>
    </div>
  );
}

export default HeroVisual;