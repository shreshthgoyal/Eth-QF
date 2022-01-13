import './Steps.css';

const Steps = () => {
    return (
        <section className="portfolio">
<div className="portfolio__container container container--px">
      <div className="portfolio__text">
        <h1 className="portfolio__subtitle subtitle-primary">3 step process</h1>
        <h2 className="portfolio__title title-primary">Fundraise your Project in 3 simple and fair steps.</h2>
      </div>
<ul className="process">
  <li className="process__item" >
    <span className="process__number">1</span>
    <i className="fas fa-list"></i>
    <span className="process__title">List Your Project</span>
  </li>
  <li className="process__item">
    <span className="process__number">2</span>
    <i className="fas fa-hand-holding-usd"></i>
    <span className="process__title">Get Funded</span>
  </li>

  <li className="process__item">
    <span className="process__number">3</span>
    <i className="fas fa-dollar-sign"></i>
    <span className="process__title">Get matched from public funds</span>
  </li>
</ul>
</div>
</section>
    )
}

export default Steps;