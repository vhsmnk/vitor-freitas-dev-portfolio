
function Logo({ variant = "navbar", className = "", src = null }) {
  return (
    <span
      className={`vh-logo vh-logo--${variant} ${className}`}
      aria-label="Logo de Vitor Hugo"
      role="img"
    >
      {src ? (
        <img
          className="vh-logo__image"
          src={src}
          alt=""
          aria-hidden="true"
        />
      ) : (
        <svg
          className="vh-logo__placeholder"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M24 3 L42 13.5 L42 34.5 L24 45 L6 34.5 L6 13.5 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </span>
  );
}

export default Logo;