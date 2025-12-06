import { homeVisionSummary } from "../content/texts";
import { navigate } from "../utils/navigation";

function Info() {
  const aboutUrl = `${import.meta.env.BASE_URL}vision`;
  const { eyebrow, body, direction, values, future } = homeVisionSummary;

  return (
    <section className="section" id="vision">
      <div className="container">
        <div className="section-content card info-block bg-transparent border-light border-opacity-25">
          <p className="eyebrow text-uppercase">{eyebrow}</p>
          <p className="lead">{body}</p>
          <div className="row g-3 mt-2">
            <div className="col-md-6">
              <p className="info-heading fw-bold">Vår riktning</p>
              <ul className="info-list">
                {direction.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="col-md-6">
              <p className="info-heading fw-bold">Värderingar</p>
              <ul className="info-list">
                {values.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-3">{future}</p>
          <div className="d-flex mt-3">
            <a
              className="btn btn-warning fw-bold px-4"
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
      </div>
    </section>
  );
}

export default Info;
