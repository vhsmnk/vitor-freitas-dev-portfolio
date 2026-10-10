
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./SocialMedia.css";

import sm1 from "./sm1.jpg";
import sm2 from "./sm2.jpg";
import sm3 from "./sm3.jpg";
import sm4 from "./sm4.jpg";

const portfolioImages = [
  { id: "sm-1", src: sm1 },
  { id: "sm-2", src: sm2 },
  { id: "sm-3", src: sm3 },
  { id: "sm-4", src: sm4 },
];

const portfolioUrl = "https://vitorfreitaspresentate.carrd.co/";

export default function SocialMedia() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const { t } = useTranslation();

  const currentImage = portfolioImages[currentIndex];

  function previousImage() {
    setDirection("prev");
    setCurrentIndex(
      (index) =>
        (index - 1 + portfolioImages.length) % portfolioImages.length
    );
  }

  function nextImage() {
    setDirection("next");
    setCurrentIndex((index) => (index + 1) % portfolioImages.length);
  }

  function selectImage(index) {
    if (index === currentIndex) return;

    setDirection(index > currentIndex ? "next" : "prev");
    setCurrentIndex(index);
  }

  return (
    <div className="sm-portfolio">
      <div className="sm-portfolio-heading">
        <div>
          <span className="eyebrow">
            {t("socialMedia.eyebrow")}
          </span>

          <h3>
            {t("socialMedia.title")}{" "}
            <span>{t("socialMedia.titleAccent")}</span>
          </h3>

          <p>{t("socialMedia.description")}</p>
        </div>

        <span className="sm-portfolio-counter" aria-live="polite">
          {String(currentIndex + 1).padStart(2, "0")} /{" "}
          {String(portfolioImages.length).padStart(2, "0")}
        </span>
      </div>

      <div className="sm-portfolio-carousel">
        <button
          type="button"
          className="sm-portfolio-arrow"
          onClick={previousImage}
          aria-label={t("socialMedia.previous")}
        >
          ←
        </button>

        <div className="sm-portfolio-frame">
          <img
            key={currentImage.id}
            className={`sm-portfolio-image slide-${direction}`}
            src={currentImage.src}
            alt={t("socialMedia.imageAlt", {
              number: currentIndex + 1,
            })}
          />
        </div>

        <button
          type="button"
          className="sm-portfolio-arrow"
          onClick={nextImage}
          aria-label={t("socialMedia.next")}
        >
          →
        </button>
      </div>

      <div
        className="sm-portfolio-dots"
        role="group"
        aria-label={t("socialMedia.selectArtwork")}
      >
        {portfolioImages.map((image, index) => (
          <button
            key={image.id}
            type="button"
            className={`sm-portfolio-dot ${
              index === currentIndex ? "is-active" : ""
            }`}
            onClick={() => selectImage(index)}
            aria-label={t("socialMedia.showArtwork", {
              number: index + 1,
            })}
            aria-pressed={index === currentIndex}
          />
        ))}
      </div>

      <a
        className="sm-portfolio-link"
        href={portfolioUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("socialMedia.fullPortfolio")}{" "}
        <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}
