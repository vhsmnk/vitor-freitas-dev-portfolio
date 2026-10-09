
import { useEffect } from "react";

function ScrollReveal() {
  useEffect(() => {
    const header = document.querySelector(".site-header");

    const elements = document.querySelectorAll(
      [
        "main section:not(.hero) > *",
        "main section:not(.hero) .section-shell",
        "main section:not(.hero) h2",
        "main section:not(.hero) h3",
        "main section:not(.hero) p",
        "main section:not(.hero) a",
        "main section:not(.hero) article",
        "main section:not(.hero) img",
        "main section:not(.hero) .project-card",
        "main section:not(.hero) .service-card",
        "main section:not(.hero) .design-tile",
      ].join(",")
    );

    if (!elements.length) return;

    const targets = [...new Set(elements)];

    const updateOpacity = () => {
      const headerHeight =
        header?.getBoundingClientRect().height ?? 80;

      const fadeStart = headerHeight;
      const fadeEnd = headerHeight + 220;

      targets.forEach((element) => {
        const rect = element.getBoundingClientRect();

        // Fora da faixa de transição: conteúdo normal.
        if (rect.top >= fadeEnd || rect.bottom <= fadeStart) {
          const passedHeader = rect.bottom <= fadeStart;

          element.style.setProperty(
            "--scroll-opacity",
            passedHeader ? "0.82" : "1"
          );

          element.style.setProperty(
            "--scroll-blur",
            passedHeader ? "0.5px" : "0px"
          );

          return;
        }

        // Transição gradual perto da navbar.
        const progress = Math.max(
          0,
          Math.min(1, (fadeEnd - rect.top) / (fadeEnd - fadeStart))
        );

        const opacity = 1 - progress * 0.18;
        const blur = progress * 0.5;

        element.style.setProperty(
          "--scroll-opacity",
          opacity.toFixed(3)
        );

        element.style.setProperty(
          "--scroll-blur",
          `${blur.toFixed(2)}px`
        );
      });
    };

    targets.forEach((element) => {
      element.classList.add("scroll-fade");
    });

    updateOpacity();

    window.addEventListener("scroll", updateOpacity, {
      passive: true,
    });

    window.addEventListener("resize", updateOpacity);

    return () => {
      window.removeEventListener("scroll", updateOpacity);
      window.removeEventListener("resize", updateOpacity);

      targets.forEach((element) => {
        element.classList.remove("scroll-fade");
        element.style.removeProperty("--scroll-opacity");
        element.style.removeProperty("--scroll-blur");
      });
    };
  }, []);

  return null;
}

export default ScrollReveal;