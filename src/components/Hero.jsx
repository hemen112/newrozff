import { navigate, navigateToSection } from "../utils/navigation";

function Hero() {
  const sponsorSection = "sponsor";
  const spelaSection = "spela";

  return (
    <section className="hero" id="hem">
      <div className="container h-100 d-flex align-items-center">
        <div className="hero-text mx-auto text-center">
          <p className="eyebrow text-uppercase">Välkommen till NewrozFF</p>
          <h1 className="display-5 fw-bold">Gemenskap, respekt och stolthet</h1>
          <p className="hero-lead lead">
            Vi skapar en trygg miljö där alla kan utvecklas
            genom fotboll.
          </p>
          <p className="hero-meta">Baserade i Gävle, Sverige.</p>
          <div className="d-flex flex-wrap gap-3 justify-content-center mt-3">
            <a
              className="btn btn-warning fw-bold px-4"
              href="#spela"
              onClick={(e) => {
                e.preventDefault();
                navigateToSection(spelaSection);
              }}
            >
              Spela för oss
            </a>
            <a
              className="btn btn-outline-warning fw-bold px-4 text-white"
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
      </div>
    </section>
  );
}

export default Hero;
