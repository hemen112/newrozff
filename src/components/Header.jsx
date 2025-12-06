import { navigate, navigateToSection } from "../utils/navigation";

function Header() {
  // Use Vite base URL so the logo works both locally and on GitHub Pages (/newrozff/)
  const logoSrc = `${import.meta.env.BASE_URL}logo.png`;
  const sponsorPage = `${import.meta.env.BASE_URL}sponsor`;
  const visionPage = `${import.meta.env.BASE_URL}vision`;
  const eventsPage = `${import.meta.env.BASE_URL}events`;

  return (
    <header className="header">
      <div className="logo-wrap">
        <img src={logoSrc} alt="Newroz FF Logo" className="logo" />
        <span className="logo-text">Newroz FotbollsFörening</span>
      </div>
      <nav>
        <a href="#hem" onClick={(e) => { e.preventDefault(); navigateToSection("hem"); }}>Hem</a>
        <a href={visionPage} onClick={(e) => { e.preventDefault(); navigate("vision"); }}>Vision</a>
        <a href={eventsPage} onClick={(e) => { e.preventDefault(); navigate("events"); }}>Events</a>
        <a href={sponsorPage} onClick={(e) => { e.preventDefault(); navigate("sponsor"); }}>Sponsorer</a>
        <a href="#kontakt" onClick={(e) => { e.preventDefault(); navigateToSection("kontakt"); }}>Kontakt</a>
      </nav>
    </header>
  );
}

export default Header;
