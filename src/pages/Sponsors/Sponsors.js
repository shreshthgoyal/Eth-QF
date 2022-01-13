import "./Sponsors.css";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import CountTo from 'react-count-to';


const Sponsors = ({number}) => {
    return (
        <div>
            <Navbar />
             <section className="features s" >
    <div className="features__container container container--px" >
      <div className="features__text sponsors" >
        <h1 className="features__subtitle subtitle-primary" >Sponsor</h1>
        <h2 className="features__title title-primary">Matching Fund</h2>
        <p className="features__paragraph">
        Contribute to the model of funding public goods where a fund from governments or philanthropic institutions matches individual contributions to a project.
        </p>
      </div>

      <div className="features__wrapper sponsors">
        <div className="features__feature feature--1">
          <h3 className="feature__title stat">
          <CountTo to= {parseInt(number,10)} speed={5000} />
          </h3>
          <p className="features__paragraph u">
          Money funded till date to matching pool.
        </p>
      <a href="#" className="hero__cta cta arch spo">Become a sponsor</a>
        </div>
      </div>
    </div>
  </section>           
        <Footer />
        </div>
    )
}

export default Sponsors;