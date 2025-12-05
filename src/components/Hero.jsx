import { navigate, navigateToSection } from "../utils/navigation";

function Hero() {
  const sponsorSection = "sponsor";
  const spelaSection = "spela";

  return (
    <section className="hero" id="hem">
      <div className="hero-text">
        <p className="eyebrow">Välkommen till NewrozFF</p>
        <h1>Gemenskap, respekt och stolthet</h1>
        <p className="hero-lead">
          Vi skapar en trygg miljö där alla kan utvecklas
          genom fotboll.
        </p>
        <p className="hero-meta">Baserade i Gävle, Sverige.</p>
        <div className="hero-actions">
          <a
            className="cta-btn"
            href="#spela"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection(spelaSection);
            }}
          >
            Spela för oss
          </a>
          <a
            className="ghost-btn"
            href={`#${sponsorSection}`}
            onClick={(e) => {
              e.preventDefault();
              navigateToSection(sponsorSection);
            }}
          >
            Bli sponsor
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
