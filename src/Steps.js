import './Steps.css';

const Steps = () => {
    return (
    // <div className="features__container container container--px" >
    //     <div className="features__text" >
    //     <h1 className="features__subtitle subtitle-primary" >Features</h1>
    //     <h2 className="features__title title-primary">What we are offering</h2>
    //     <p className="features__paragraph">
    //       We offer the given services to projects listed on our platoform. A matching pool is raised, and then a crowdfund campaign is matched according to the Quadratic Funding algorithm.
    //     </p>
    //   </div>
        <ul class="process">
  <li class="process__item">
    <span class="process__number">1</span>
    <i class="fas fa-list"></i>
    <span class="process__title">List Your Project</span>
  </li>

  <li class="process__item">
    <span class="process__number">2</span>
    <i class="fas fa-hand-holding-usd"></i>
    <span class="process__title">Get Funded</span>
  </li>

  <li class="process__item">
    <span class="process__number">3</span>
    <i class="fas fa-dollar-sign"></i>
    <span class="process__title">Get matched from public funds</span>
  </li>
</ul>
// </div>
    )
}

export default Steps;