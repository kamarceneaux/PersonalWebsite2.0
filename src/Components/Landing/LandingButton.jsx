/* eslint-disable react/prop-types */
export default function LandingButton({ children, link }) {
  return (
    <span className="landing-button-container">
      {link ? (
        <a
          href={link}
          className="landing-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ) : (
        <button className="landing-button">{children}</button>
      )}
    </span>
  );
}
