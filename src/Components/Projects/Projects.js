import "./Projects.css";

const Projects = ({projects}) => {
  let arr = projects.sort((y,x) => x[1].fund-y[1].fund);
  arr.map(i=>console.log(i[1]))
    return (
        <section className="portfolio">
        <div className="portfolio__container container container--px">
          <div className="portfolio__text">
            <h1 className="portfolio__subtitle subtitle-primary">Projects</h1>
            <h2 className="portfolio__title title-primary">Introducing our top Projects</h2>
          </div>
    
          <div className="portfolio__wrapper">
            {
               arr.slice(0,3).map(i=>{
                 console.log(i[1].title)
                 return (
                  <div className="portfolio__card card--1" key={i[0]}>
                  <img src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" alt="Valorant Jett character image" className="card__image" loading="lazy" />
                  <div className="card__content">
                    <div className="card__header">
                      <h3 className="card__title">{i[1].title}</h3>
                      <button type="button" className="cta cta--btn cta--btn_yellow" aria-label="view portfolio" aria-expanded="false">
                        <svg className="cta--btn-icon" viewBox="0 0 14 11" aria-hidden="true" focusable='false'>
                          <path d="M1 5.5L13 5.5M13 5.5L8.5 1M13 5.5L8.5 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                    <p className="card__description">
                      {i[1].pitch}
                    </p>
                  </div>
                </div>  
                 )
              })
            }
  
          </div>
    
          <div className="portfolio__footer">
            <a href="/projects" className="portfolio__link cta cta--link">
              View all
              <svg className="testimonial__link__icon cta--link-icon" viewBox="0 0 17 14" aria-hidden="true" focusable='false'>
                <path d="M1 7.375L16 7.375M16 7.375L10.375 1.75M16 7.375L10.375 13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    )
}

export default Projects;