import "./Home.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Features from "./Features";
import Steps from "./Steps";
import Projects from "./Projects";
import Stats from "./Stats";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
  <Navbar />
<main className="main hero">
    <div className="hero__container container container--px flex">
      <div className="hero__text">
        <h1 className="hero__title">We fund with the c<span className="hero__title-underline">ommunity.</span> For the c<span className="hero__title-underline">ommunity.</span></h1>
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
<Projects />
<Steps />
<div id="wrapper">
    <Stats title="Matching Fund" icon="fa fa-cube" color="	#76CBC1" number="205439"/>
</div>
<Banner />
<Footer />
</main>
        </div>
    )
}

export default Home;