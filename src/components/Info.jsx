import { homeVisionSummary } from "../content/texts";
import { navigate } from "../utils/navigation";

function Info() {
  const aboutUrl = `${import.meta.env.BASE_URL}vision`;
  const { eyebrow, body, direction, values, future } = homeVisionSummary;

  return (
    <section className="section" id="vision">
      <div className="section-content card info-block">
        <p className="eyebrow">{eyebrow}</p>
        <p>{body}</p>
        <div className="section-grid">
          <div>
            <p className="info-heading">Vår riktning</p>
            <ul className="info-list">
              {direction.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="info-heading">Värderingar</p>
            <ul className="info-list">
              {values.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <p>{future}</p>
        <div className="hero-actions">
          <a
            className="cta-btn"
            href={aboutUrl}
            onClick={(e) => {
              e.preventDefault();
              navigate("vision");
            }}
          >
            Läs mer
          </a>
        </div>
      </div>
    </section>
  );
}

export default Info;
