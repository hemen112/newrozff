function Hero() {
  return (
    <section className="hero" id="hem">
      <div className="hero-text">
        <p className="eyebrow">Välkommen till NewrozFF</p>
        <h1>Gemenskap, respekt och stolthet</h1>
        <p className="hero-lead">
          Vi skapar en trygg miljö där barn, ungdomar och vuxna kan utvecklas
          genom fotboll.
        </p>
        <p className="hero-meta">Baserade i Gävle, Sverige.</p>
        <div className="hero-actions">
          <a className="cta-btn" href="#spela">Anmäl dig som spelare</a>
          <a className="ghost-btn" href="#sponsor">Bli sponsor</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
