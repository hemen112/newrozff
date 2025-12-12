import Header from "../components/Header";
import { eventsContent, backButton, webRights } from "../content/texts";
import { navigate } from "../utils/navigation";

function EventsPage() {
  return (
    <div className="page-shell">
      <Header />
      <main className="section">
        <div className="container">
          <div className="section-content card bg-transparent border-light border-opacity-25 text-start">
            <p className="eyebrow text-uppercase">Evenemang</p>
            <h1 className="h3 fw-bold">Kommande events</h1>
            <p className="mb-4">{eventsContent.intro}</p>

            <div className="section-grid">
              {eventsContent.items.map((event) => (
                <div className="card bg-transparent border-light border-opacity-25 text-start" key={event.title}>
                  <h3 className="h5 fw-bold">{event.title}</h3>
                  <p className="mb-1"><strong>{event.date}</strong></p>
                  <p className="mb-0">{event.description}</p>
                  {event.image && (
                    <div className="event-image-wrap">
                      <img
                        src={`${import.meta.env.BASE_URL}${event.image}`}
                        alt={event.imageAlt || event.title}
                        className="event-image"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="d-flex flex-wrap gap-2 mt-4">
              <a
                className="ghost-btn"
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

export default EventsPage;
