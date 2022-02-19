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
import {address, abi} from "../../config";
import Web3 from 'web3';
import { useState, useEffect} from "react";

const Home = () => {


  let token = null;
  const navigate = useNavigate();
  const [matchingFund, setMatchingFund] = useState(0.000);
  const [isMatchingRound, setIsMatchingRound] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");
  const [contract, setContract] = useState();
  const [web3Provider, setWeb3Provider] = useState(null);

  const checkWalletIsConnected = async () => {
    const {ethereum} = window;
    if(!ethereum){
      console.log("Install Metamask please!");
      return;
    }else{
      console.log("All set!");
    }
    try{
      const accounts = await ethereum.request({method: 'eth_requestAccounts'});

      if(accounts.length !== 0){
        const account = accounts[0];
        console.log("Account address : ", account);
        setCurrentAccount(account)
        await loadContract();
        
      }else{
        console.log("No account found");
      }
      
    } catch(error){
      console.log("Error : ", error);
    }
  }


  const getMatchingFund = async () => {
    if(contract)
   { const res = await contract.methods.matchingFund().call();
     const matchingStatus = await contract.methods.isMatchingRound.call();
    await setMatchingFund(res);
    await setCurrentAccount(currentAccount);
    await setIsMatchingRound(matchingStatus);
  }
  }

  const loadContract = async () => {
    try{
      let {web3} = window;
      if (typeof web3 !== 'undefined') {
         setWeb3Provider(web3.currentProvider);
          web3 = new Web3(web3.currentProvider)
      } else {
        window.alert('Please connect to Metamask.')
      }
      const {ethereum} = window;

      if (ethereum) {
          window.web3 = new Web3(ethereum)
          try {
            // Request account access if needed
            await ethereum.enable()
          } catch (error) {
            // User denied account access...
          }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        setWeb3Provider(web3.currentProvider);
        window.web3 = new Web3(web3.currentProvider)
      }
      // Non-dapp browsers...
      else {
        console.log(
          'Non-Ethereum browser detected. You should consider trying MetaMask!',
        )
      }
      if(!contract)
      setContract(new web3.eth.Contract(abi, address))
    }catch(error){
       console.log(error);
    }
  }

  useEffect(() => {
    checkWalletIsConnected().then(getMatchingFund());
      }, [contract, currentAccount, matchingFund]);

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
              <div className="hero__container container container--px flex lp">
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
              <Stats title="Matching Fund" icon="fa fa-cube" color="	#76CBC1" number={parseInt(matchingFund)/1000000000000000000}/>
          </div>
          <Banner contract={contract} currentAccount = {currentAccount}/>
          <Footer />
          </main>
          </div>
      )
}

export default Home;