import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Sponsor from "./components/Sponsor";
import Thanks from "./components/Thanks";

function App() {
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
