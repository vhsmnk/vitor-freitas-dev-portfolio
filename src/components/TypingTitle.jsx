import { useEffect, useState } from "react";

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
    // Exibe o título completo se o usuário preferir movimento reduzido.
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

export default TypingTitle;
