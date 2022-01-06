import "./Home.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Features from "./Features";
import Steps from "./Steps";

const Home = () => {
    return (
        <div>
  <Navbar />
<main className="main hero">
    <div className="hero__container container container--px flex">
      <div className="hero__text">
        <h1 className="hero__title">We fund with the c<span className="hero__title-underline">ommunity.</span> for the c<span className="hero__title-underline">ommunity.</span></h1>
        <p className="hero__paragraph">
            Going forward with the community. <br /> This is a platform which provides funding for projects through Quadratic funding.
        </p>
        <a href="#" className="hero__cta cta cta--primary">List a Project</a> 
        <a href="#" className="hero__cta cta cta--primary bt2">Fund a Project</a>
      </div>

      <div className="hero__image-wrapper">
        <img src="https://i.ibb.co/d4JCpLL/Untitled-design-2.png" alt="Ether Phone" className="hero__image" />
      </div>
    </div>

<Features />
<Steps />
  <section className="portfolio">
    <div className="portfolio__container container container--px">
      <div className="portfolio__text">
        <h1 className="portfolio__subtitle subtitle-primary">Portfolio</h1>
        <h2 className="portfolio__title title-primary">Introducing our works</h2>
      </div>

      <div className="portfolio__wrapper">
        <div className="portfolio__card card--1">
          <img src="https://raw.githubusercontent.com/alawe45/Html-Css-Js-game-agency-project/master/images/portfolio__img-1.jpg" alt="Valorant Jett character image" className="card__image" loading="lazy" />

          <div className="card__content">
            <div className="card__header">
              <h3 className="card__title">Valorant Website Design</h3>
              <button type="button" className="cta cta--btn cta--btn_yellow cta--btn_active" aria-label="view portfolio" aria-expanded="false">
                <svg className="cta--btn-icon" viewBox="0 0 14 11" aria-hidden="true" focusable='false'>
                  <path d="M1 5.5L13 5.5M13 5.5L8.5 1M13 5.5L8.5 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <p className="card__description">
              Lorem ipsum dolor sit amet,
              consec tetur adipiscing elit.
            </p>
          </div>
        </div>

        <div className="portfolio__card card--2">
          <img src="https://raw.githubusercontent.com/alawe45/Html-Css-Js-game-agency-project/master/images/portfolio__img-2.jpg" alt="Fortnite image" className="card__image" loading="lazy" />

          <div className="card__content">
            <div className="card__header">
              <h3 className="card__title">Fortnite Game Reports</h3>
              <button type="button" className="cta cta--btn cta--btn_yellow" aria-label="view portfolio" aria-expanded="false">
                <svg className="cta--btn-icon" viewBox="0 0 14 11" aria-hidden="true" focusable='false'>
                  <path d="M1 5.5L13 5.5M13 5.5L8.5 1M13 5.5L8.5 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <p className="card__description">
              Lorem ipsum dolor sit amet,
              consec tetur adipiscing elit.
            </p>
          </div>
        </div>

        <div className="portfolio__card card--3">
          <img src="https://raw.githubusercontent.com/alawe45/Html-Css-Js-game-agency-project/master/images/portfolio__img-3.jpg" alt="Overwatch sigma character image" className="card__image" loading="lazy" />

          <div className="card__content">
            <div className="card__header">
              <h3 className="card__title">Overwatch Social Media</h3>
              <button type="button" className="cta cta--btn cta--btn_yellow" aria-label="view portfolio" aria-expanded="false">
                <svg className="cta--btn-icon" viewBox="0 0 14 11" aria-hidden="true" focusable='false'>
                  <path d="M1 5.5L13 5.5M13 5.5L8.5 1M13 5.5L8.5 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <p className="card__description">
              Lorem ipsum dolor sit amet,
              consec tetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>

      <div className="portfolio__footer">
        <a href="#" className="portfolio__link cta cta--link">
          View portfolio
          <svg className="testimonial__link__icon cta--link-icon" viewBox="0 0 17 14" aria-hidden="true" focusable='false'>
            <path d="M1 7.375L16 7.375M16 7.375L10.375 1.75M16 7.375L10.375 13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
<Footer />
</main>
        </div>
    )
}

export default Home;