import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer.js";
import Features from "../../Components/Features/Features.js";
import Steps from "../../Components/Steps/Steps.js";
import Projects from "../../Components/Projects/Projects.js";
import Stats from "../../Components/Stats/Stats.js";
import Banner from "../../Components/Banner/Banner.js";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LoginGithub from 'react-login-github';
import React from 'react';
import axios from 'axios';

const Home = () => {
let token = null;
const navigate = useNavigate();

const onSuccess = response => {
  axios.get(`https://qfdone.herokuapp.com/authenticate/${response.code}`)
    .then(res => res.data.token)
    .then(_token => {
      token = _token;
      navigate('/form', {state : token})
    })
    .catch(err => console.log(err));};

  const onFailure = res => console.error(res);

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
        <LoginGithub clientId="0661798dd8b17b1f2412"
    onSuccess={onSuccess}
    onFailure={onFailure}
    scope= "repo%20read:user"
    buttonText= "List a Project"
    className="hero__cta cta cta--primary" />
        <Link to="/projects" className="hero__cta cta cta--primary bt2">Fund a Project</Link>
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