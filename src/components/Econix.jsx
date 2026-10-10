
import "./econix.css";
import { useTranslation } from "react-i18next";

export default function Econix({ onClick, onKeyDown }) {
  const { t } = useTranslation();

  return (
    <article
      className="econix-card projects-grid-card"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={onKeyDown}
      aria-label={t("projects.openProject", {
        title: t("projects.econix.title"),
      })}
    >
      <div className="econix-card__preview">
        <div className="econix-card__topbar">
          <span className="econix-card__brand">econix.</span>
          <span className="econix-card__menu" aria-hidden="true">
            ☰
          </span>
        </div>

        {/* Prévia ilustrativa: permanece em português */}
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

      {/* Área explicativa: traduzida pelo i18next */}
      <div className="econix-card__info">
        <div>
          <span className="econix-card__category">
            {t("projects.econix.cardCategory")}
          </span>

          <h3>{t("projects.econix.title")}</h3>

          <p>{t("projects.econix.description")}</p>
        </div>

        <span className="econix-card__number">04</span>
      </div>
    </article>
  );
}
