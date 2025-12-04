function Header() {
  // Use Vite base URL so the logo works both locally and on GitHub Pages (/newrozff/)
  const logoSrc = `${import.meta.env.BASE_URL}logo.png`;
  const sponsorPage = `${import.meta.env.BASE_URL}sponsor.html`;

  return (
    <header className="header">
      <div className="logo-wrap">
        <img src={logoSrc} alt="Newroz FF Logo" className="logo" />
        <span className="logo-text">Newroz FotbollsFörening</span>
      </div>
      <nav>
        <a href="#hem">Hem</a>
        <a href="#vision">Vision</a>
        <a href={sponsorPage}>Sponsorer</a>
        <a href="#kontakt">Kontakt</a>
      </nav>
    </header>
  );
}

export default Header;
