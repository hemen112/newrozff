import Header from "../components/Header";
import { backButton, sponsorsContent, webRights } from "../content/texts";
import { navigate } from "../utils/navigation";

function SponsorPage() {
  return (
    <div className="page-shell">
      <Header />
      <main className="section">
        <div className="container">
          <div className="section-content card bg-transparent border-light border-opacity-25 text-start text-light">
            <p className="eyebrow text-uppercase">Våra sponsorer</p>
            <h1 className="h3 fw-bold">Tack till våra partners</h1>
            <p className="mb-4">{sponsorsContent.partnersIntro}</p>

            <div className="sponsor-grid">
              {sponsorsContent.list.map((sponsor) => (
                <div className="sponsor-card" key={sponsor.name}>
                  <img
                    src={`${import.meta.env.BASE_URL}${sponsor.logo}`}
                    alt={sponsor.name}
                    className="sponsor-logo"
                    onClick={() =>
                      window.open(sponsor.url, "_blank", "noopener,noreferrer")
                    }
                    style={{ cursor: "pointer" }}
                  />
                </div>

              ))}
            </div>

            <div className="d-flex flex-column gap-3 mt-4 w-100">
              <a
                className="btn btn-warning fw-bold px-4"
                href={sponsorsContent.cta.url}
                target="_blank"
                rel="noreferrer"
              >
                {sponsorsContent.cta.label}
              </a>
              <a
                className="btn btn-outline-light fw-bold px-4"
                href={`${import.meta.env.BASE_URL}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate("");
                }}
              >
                {backButton}
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">{webRights}</footer>
    </div>
  );
}

export default SponsorPage;
