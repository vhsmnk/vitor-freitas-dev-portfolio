
import { useState } from "react";
import "./SocialMedia.css";

import sm1 from "./sm1.jpg";
import sm2 from "./sm2.jpg";
import sm3 from "./sm3.jpg";
import sm4 from "./sm4.jpg";

const portfolioImages = [
  { id: "sm-1", src: sm1, alt: "Arte para redes sociais 1" },
  { id: "sm-2", src: sm2, alt: "Arte para redes sociais 2" },
  { id: "sm-3", src: sm3, alt: "Arte para redes sociais 3" },
  { id: "sm-4", src: sm4, alt: "Arte para redes sociais 4" },
];

const portfolioUrl = "https://vitorfreitaspresentate.carrd.co/";

export default function SocialMedia() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const currentImage = portfolioImages[currentIndex];

  function previousImage() {
    setDirection("prev");
    setCurrentIndex(
      (index) => (index - 1 + portfolioImages.length) % portfolioImages.length
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
          <span className="eyebrow">PORTFÓLIO CRIATIVO</span>

          <h3>
            Design que <span>conecta.</span>
          </h3>

          <p>
            Uma seleção de peças para redes sociais, com atenção à
            composição, à identidade visual e à comunicação de cada marca.
          </p>
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
          aria-label="Mostrar arte anterior"
        >
          ←
        </button>

        <div className="sm-portfolio-frame">
          <img
            key={currentImage.id}
            className={`sm-portfolio-image slide-${direction}`}
            src={currentImage.src}
            alt={currentImage.alt}
          />
        </div>

        <button
          type="button"
          className="sm-portfolio-arrow"
          onClick={nextImage}
          aria-label="Mostrar próxima arte"
        >
          →
        </button>
      </div>

      <div className="sm-portfolio-dots" aria-label="Selecionar arte">
        {portfolioImages.map((image, index) => (
          <button
            key={image.id}
            type="button"
            className={`sm-portfolio-dot ${
              index === currentIndex ? "is-active" : ""
            }`}
            onClick={() => selectImage(index)}
            aria-label={`Mostrar arte ${index + 1}`}
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
        Ver portfólio completo <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}