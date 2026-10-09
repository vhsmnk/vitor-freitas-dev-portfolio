import "./econix.css";

export default function Econix({ onClick, onKeyDown }) {
return ( <article
   className="econix-card projects-grid-card"
   role="button"
   tabIndex={0}
   onClick={onClick}
   onKeyDown={onKeyDown}
   aria-label="Abrir projeto Econix"
 > <div className="econix-card__preview"> <div className="econix-card__topbar"> <span className="econix-card__brand">econix.</span> <span className="econix-card__menu" aria-hidden="true">
☰ </span> </div>

    <div className="econix-card__content">
      <span className="econix-card__eyebrow">
        NOVA EXPERIÊNCIA DE COMPRA
      </span>

      <h2>
        Seu estilo.
        <br />
        Suas escolhas.
      </h2>

      <p>
        Uma nova forma de descobrir produtos para o seu dia a dia.
      </p>

      <span className="econix-card__button">
        EXPLORAR COLEÇÃO ↗
      </span>
    </div>

    <div className="econix-card__decoration" aria-hidden="true">
      E
    </div>

    <span className="econix-card__status">
      EM DESENVOLVIMENTO
    </span>
  </div>

  <div className="econix-card__info">
    <div>
      <span className="econix-card__category">
        E-COMMERCE · UI/UX
      </span>

      <h3>Econix</h3>

      <p>
        Conceito de loja virtual com identidade visual própria,
        navegação intuitiva e experiência de compra moderna.
      </p>
    </div>

    <span className="econix-card__number">04</span>
  </div>
</article>


);
}
