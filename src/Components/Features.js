import './Features.css';


const Features = () => {
    return (
        <div>
              <section className="features" >
    <div className="features__container container container--px" >
      <div className="features__text" >
        <h1 className="features__subtitle subtitle-primary" >Features</h1>
        <h2 className="features__title title-primary">What we are offering</h2>
        <p className="features__paragraph">
          We offer the given services to projects listed on our platoform. A matching pool is raised, and then a crowdfund campaign is matched according to the Quadratic Funding algorithm.
        </p>
      </div>

      <div className="features__wrapper">
        <div className="features__feature feature--1">
          <div className="feature__icon-wrapper f_logo flex" data-aos="fade-left">
          <i className="fab fa-ethereum"></i>
          </div>

          <h3 className="feature__title">ETH Compatibility</h3>
          <p className="feature__paragraph">
            Established Community, Industry Dominance, Private Transactions
          </p>
        </div>

        <div className="features__feature feature--2">
          <div className="feature__icon-wrapper flex f_logo" data-aos="fade-left">
          <i className="far fa-handshake"></i>
          </div>
          <h3 className="feature__title">User Experience</h3>
          <p className="feature__paragraph">
            One-Click Processes, Confidentiality of Information, Easy Readability
          </p>
        </div>

        <div className="features__feature feature--3">
          <div className="feature__icon-wrapper flex f_logo" data-aos="fade-left">
          <i className="fas fa-cubes"></i>
          </div>
          <h3 className="feature__title">Blockchain Based</h3>
          <p className="feature__paragraph">
            Transparent flow of data, Minimal centralization, Seamless payment
          </p>
        </div>

        <div className="features__feature feature--4">
          <div className="feature__icon-wrapper flex f_logo" data-aos="fade-left">
          <i className="fas fa-search-dollar"></i>
          </div>
          <h3 className="feature__title">Real Value</h3>
          <p className="feature__paragraph">
            Real value of project using CLR matching, Community determines real value
          </p>
        </div>
      </div>
    </div>
  </section>
        </div>
    )
}

export default Features;