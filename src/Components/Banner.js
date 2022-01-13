import "./Banner.css";

const Banner = () => {
    return (
        <section className="features" >
    <div className="features__container container container--px" >
      <div className="features__text" >
        <h1 className="features__subtitle subtitle-primary" >Archive</h1>
        <h2 className="features__title title-primary">View previous matching round histories</h2>
      </div>

      <div className="arch_iv">
      <a href="#" className="hero__cta cta arch">View archive</a>
      </div>
    </div>
  </section>
    )
}

export default Banner;