import { useEffect, useRef, useState } from "react";
import { navigate, navigateToSection } from "../utils/navigation";

function Header() {
  const logoSrc = `${import.meta.env.BASE_URL}logo.png`;
  const sponsorPage = `${import.meta.env.BASE_URL}sponsor`;
  const visionPage = `${import.meta.env.BASE_URL}vision`;
  const [open, setOpen] = useState(false);
   const navRef = useRef(null);

   useEffect(() => {
     const handleScroll = () => {
       if (open) setOpen(false);
     };
     const handleClick = (e) => {
       if (open && navRef.current && !navRef.current.contains(e.target)) {
         setOpen(false);
       }
     };
     window.addEventListener("scroll", handleScroll, { passive: true });
     document.addEventListener("click", handleClick, true);
     return () => {
       window.removeEventListener("scroll", handleScroll);
       document.removeEventListener("click", handleClick, true);
     };
   }, [open]);

  return (
    <header className="bg-dark bg-opacity-75 sticky-top">
      <nav className="navbar navbar-expand-md navbar-dark container py-2" ref={navRef}>
        <a
          className="navbar-brand d-flex align-items-center gap-2"
          href="#hem"
          onClick={(e) => {
            e.preventDefault();
            navigateToSection("hem");
            setOpen(false);
          }}
        >
          <img src={logoSrc} alt="Newroz FF Logo" className="logo" />
          <span className="logo-text fw-bold">Newroz FotbollsFörening</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          aria-label="Öppna/stäng meny"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          id="main-nav"
          className={`collapse navbar-collapse justify-content-end ${open ? "show" : ""}`}
          onClick={() => setOpen(false)}
        >
          <ul className="navbar-nav gap-2">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#hem"
                onClick={(e) => {
                  e.preventDefault();
                  navigateToSection("hem");
                  setOpen(false);
                }}
              >
                Hem
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href={visionPage}
                onClick={(e) => {
                  e.preventDefault();
                  navigate("vision");
                  setOpen(false);
                }}
              >
                Vision
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href={sponsorPage}
                onClick={(e) => {
                  e.preventDefault();
                  navigate("sponsor");
                  setOpen(false);
                }}
              >
                Sponsorer
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#kontakt"
                onClick={(e) => {
                  e.preventDefault();
                  navigateToSection("kontakt");
                  setOpen(false);
                }}
              >
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
