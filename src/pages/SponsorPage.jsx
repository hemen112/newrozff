import Header from "../components/Header";
import { sponsorsContent } from "../content/texts";
import { navigate } from "../utils/navigation";

function SponsorPage() {
  return (
    <div className="page-shell">
      <Header />
      <main className="section">
        <div className="section-content card">
          <p className="eyebrow">Våra sponsorer</p>
          <h1>Tack till våra partners</h1>
          <p>{sponsorsContent.partnersIntro}</p>

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
                <div />
              </div>

            ))}
          </div>

          <div className="sponsor-actions">
            <a
              className="cta-btn"
              href={sponsorsContent.cta.url}
              target="_blank"
              rel="noreferrer"
            >
              {sponsorsContent.cta.label}
            </a>
            <a
              className="ghost-btn"
              href={`${import.meta.env.BASE_URL}`}
              onClick={(e) => {
                e.preventDefault();
                navigate("");
              }}
            >
              Tillbaka till startsidan
            </a>
          </div>
        </div>
      </main>
      <footer className="footer">© 2025 Newroz FF – Alla rättigheter reserverade.</footer>
    </div>
  );
}

export default SponsorPage;
