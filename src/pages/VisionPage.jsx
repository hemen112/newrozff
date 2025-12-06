import Header from "../components/Header";
import { backButton, visionContent, webRights } from "../content/texts";
import { navigate } from "../utils/navigation";

function SectionList({ items }) {
  return (
    <ul className="info-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function VisionPage() {
  return (
    <div className="page-shell">
      <Header />
      <main className="section">
        <div className="container">
          <div className="section-content card info-block bg-transparent border-light border-opacity-25 text-start">
            <p className="eyebrow text-uppercase">Vår vision</p>

            <h2>🌟 {visionContent.introTitle}</h2>
            <p>{visionContent.introBody}</p>

            <h2>{visionContent.direction.title}</h2>
            <p>{visionContent.direction.body}</p>
            <SectionList items={visionContent.direction.bullets} />

            <h2>{visionContent.operations.title}</h2>
            <p>{visionContent.operations.intro}</p>
            <p>{visionContent.operations.extraIntro}</p>
            <SectionList items={visionContent.operations.bullets} />

            <h2>{visionContent.future.title}</h2>
            <p>{visionContent.future.intro}</p>
            <SectionList items={visionContent.future.bullets} />

            <h2>{visionContent.values.title}</h2>
            <p>{visionContent.values.intro}</p>
            <SectionList items={visionContent.values.bullets} />
            <p>{visionContent.values.outro}</p>

            <div className="d-flex mt-3">
              <a
                className="btn btn-warning fw-bold px-4"
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

export default VisionPage;
