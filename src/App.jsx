import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Sponsor from "./components/Sponsor";
import Thanks from "./components/Thanks";

function App() {
  useEffect(() => {
    // Match the background image to the correct base path (local: "/", GitHub Pages: "/newrozff/")
    const logoUrl = `${import.meta.env.BASE_URL}logo.png`;
    document.documentElement.style.setProperty("--bg-logo", `url("${logoUrl}")`);
    return () => document.documentElement.style.removeProperty("--bg-logo");
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Info />
      <Events />
      <Sponsor />
      <Contact />
      <Thanks />
      <footer className="footer">
        © 2025 Newroz FF – Alla rättigheter reserverade.
      </footer>
    </>
  );
}

export default App;
