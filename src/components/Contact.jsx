function Contact() {
  return (
    <section className="section" id="kontakt">
      <div className="section-content card">
        <p className="eyebrow">📞 Kontakt</p>
        <h2>Hör av dig</h2>
        <ul className="contact-list">
          <li>
            <span className="contact-label">📧</span>{" "}
            <a href="mailto:kontakt.newrozff@gmail.com" className="contact-link">
              kontakt.newrozff@gmail.com
            </a>
          </li>
          <li>
            <span className="contact-label">📱</span>{" "}
            <a href="tel:+46732346453" className="contact-link">
              +46 73 234 64 53
            </a>
          </li>
        </ul>
        <div className="social-links">
          <p className="social-heading">Följ oss</p>
          <a
            className="social-link"
            href="https://www.instagram.com/newrozff/?utm_source=ig_web_button_share_sheet"
            aria-label="Instagram"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 3.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5Zm0 2A1.5 1.5 0 1 0 13.5 12 1.5 1.5 0 0 0 12 10.5Zm4.25-3.4a.85.85 0 1 1-.85.85.85.85 0 0 1 .85-.85Z" />
            </svg>
          </a>
          {/* Facebook link removed as per recent edits */}
          {/*
            <a
            className="social-link"
            href="#"
            aria-label="Facebook"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M13.5 10.5V8.75c0-.76.18-1.15 1.48-1.15H16V5h-1.7C11.7 5 10.5 6.06 10.5 8.24v2.26H9v2.6h1.5V19h3v-3.9H16l.25-2.6h-2.75Z" />
            </svg>
          </a>
          */}
          <a
            className="social-link"
            href="https://whatsapp.com/channel/0029VbAlZ89GU3BN8iviKz2U"
            aria-label="WhatsApp"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.04 3a8.9 8.9 0 0 0-7.73 13.35l-1 3.66 3.77-.99A8.9 8.9 0 1 0 12.04 3Zm0 2a6.9 6.9 0 0 1 5.82 10.6c-.12.19-.3.44-.5.64a6.9 6.9 0 0 1-8.94.75l-.53-.39-2.22.58.59-2.16-.38-.55A6.9 6.9 0 0 1 12.04 5Zm-3.02 2.9c-.18-.38-.31-.38-.47-.38H8.2c-.15 0-.4.06-.62.31-.21.25-.82.8-.82 1.95s.84 2.26.96 2.41c.12.16 1.63 2.56 4.01 3.48.56.24 1 .38 1.35.49.56.18 1.06.16 1.46.1.45-.07 1.39-.57 1.59-1.11.2-.54.2-1 .14-1.1-.07-.09-.23-.15-.47-.27-.24-.12-1.39-.68-1.6-.75-.21-.08-.37-.12-.53.12-.16.24-.61.75-.75.91-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.18-.7-.62-1.17-1.39-1.3-1.63-.14-.24 0-.36.1-.48.1-.12.24-.27.36-.41.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.52-1.3-.73-1.79Z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
