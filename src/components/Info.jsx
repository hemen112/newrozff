function Info() {
  const aboutUrl = `${import.meta.env.BASE_URL}lang.html`;

  return (
    <section className="section" id="vision">
      <div className="section-content card info-block">
        <p className="eyebrow">⭐ Vår vision</p>
        <p>
          Newroz FF är en ideell fotbollsförening i Gävle för vuxna som vill spela,
          utvecklas och vara del av en positiv och inkluderande gemenskap. Hos oss är
          alla välkomna – oavsett nivå eller erfarenhet.
        </p>
        <p>
          Vi erbjuder träningspass med fokus på teknik, kondition, glädje och laganda.
          Målet är att bygga en trygg och stark förening för vuxna spelare, och längre
          fram startar vi även verksamhet för barn och ungdomar.
        </p>
        <div className="hero-actions">
          <a className="cta-btn" href={aboutUrl}>
            Läs mer
          </a>
        </div>
      </div>
    </section>
  );
}

export default Info;
