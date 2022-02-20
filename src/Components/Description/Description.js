import "./Description.css";
import {ToastsContainer, ToastsStore} from 'react-toasts';
import Popup from 'reactjs-popup';
import Verify from '../Verify/Verify';
import $ from 'jquery';
import axios from 'axios';
import React, { useState }  from 'react';
import Web3 from 'web3';
import { useParams } from "react-router-dom";

const web3 = new Web3();

const Description = ({ project, contract, currentAccount, web3Provider }) => {
 
  const [blurb, setBlurb] = useState("");
  const [avatar, setAvatar] = useState("");
let val = 0;
  const { id, fund } = useParams();

 const click = () => {
  $('.mainDesc').css("filter","blur(3px)");
 }

 const getAmount =  () => {
    val = prompt("Enter amount of ethers you want to contribute :");
 }

 const contributeEth = async () => {
   if(fund )
  {   
    console.log(project[1]);
    await getAmount();
    await contract.methods.contribute(id).send({from : currentAccount, to:project[1], value: web3.utils.toWei(val !== null ? val : "0", "ether"), gas: 6721950 });
    window.location.replace(window.location.href.slice(0, window.location.href.length -5 ));
  }

    else
    {
      ToastsStore.warning("Please verify yourself as a new contributor!")
    }
    
 }

 const getInfo = async () => {
  if(project.title !== "")
   { const users = await axios({
      url: `https://api.github.com/repos/${project.githubLink}/${project.title}`,
      method: 'get',
    });
    setBlurb(users.data.description);
    setAvatar(users.data.owner.avatar_url)
  }
   };


   React.useEffect(() => {
     getInfo();
    if(fund) contributeEth();
   },[])

   const amount = project.fund/1000000000000000000;
   const matchingAmount = project.matchingShare/1000000000000000000;
   const lifetimeMatching = project.lifetimeMatching/1000000000000000000;
   const unpaidAmount = project.unpaid/1000000000000000000;

   const sendMatchingShares = async () => {
    
    const res = await contract.methods.sendMatchingShares(id).send({from:currentAccount});
    console.log(res);
    if(res.status){
      const result = await contract.methods.resetMatching(id).send({from:currentAccount});
      console.log(result);
      window.location.reload();
    }
 }

   var images = [];
images[0] = "https://pbs.twimg.com/card_img/1492856766534537217/Rz9RJade?format=png&name=small";
images[1] = "https://ethereum.org/static/810eb64d89629231aa4d8c7fe5f20ee5/7c061/developers-eth-blocks.png";
images[2] = "https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG.png";


  return (
    <div>
      <div className="bodyDesc">
        <main className="mainDesc">
          <div className="cardDesc">
            <div className="cardDesc__title"></div>
            <div className="cardDesc__body">
              <div className="halfDesc">
                <div className="featured_textDesv">
                  <h1>{project.title}</h1>
                  <p className="subDesc">{project.pitch}</p>
                </div>
                <div className="imageDesc">
                  <img
                    src={images[Math.floor(Math.random() * images.length)]}
                    alt=""
                  ></img>
                </div>
              </div>
              <div className="halfDesc">
                <div className="descriptionDesc">
                  <p>
                   {blurb}
                    <br />
                    <br />
                  </p>
                  <p>
                    <a href={`https://github.com/${project.githubLink}/${project.title}`} className="repolinkDesc" target="_blank" rel="noopener noreferrer">
                      Github Repo
                    </a>
                  </p>
                </div>
                <span className="stockDesc">
                  Total Collection <br />
                  <br />
                </span>
                <div className="reviewsDesc">
                  <ul className="starsDesc">
                    <li>{`${amount+lifetimeMatching} ETH`}</li>
                  </ul>
                  <span>
                    <br />
                    <br />
                  </span>
                </div>
                Details <br />
                <br />
                <div className="reviewsDesc">
                  <ul className="starsDesc">
                    <li>{ `${amount} ETH`}</li>
                  </ul>
                  <span>
                    {`From total ${project.contributors} contributors`}
                    <br />
                    <br />
                  </span>
                </div>
                <div className="reviewsDesc">
                  <ul className="starsDesc">
                    <li>{`${lifetimeMatching} ETH`}</li>
                  </ul>
                  <span>
                    Lifetime CLR Matching
                    <br />
                    <br />
                  </span>
                </div>
              </div>
            </div>
            <div className="cardDesc__footer">
              <div className="recommendDesc">
                <p>By</p>
                <img
                  src={avatar !== "" ? avatar : null}
                  alt="owner"
                  className="ownerDesc"
                ></img>
                <a href={(project.githubLink != "") ? `https://github.com/${project.githubLink}/` : ""} target="_blank" rel="noreferrer">
                  <h3>{project.githubLink}</h3>
                </a>
              </div>
              <div className="actionDesc">
                <div className="tagContainDesc">
                  <div className="tagsDesc">{project.category}</div>
                </div><br></br>
                {/* <button onClick={ () => { contributeEth()}}>Contribute </button> */}
                {currentAccount == project[1].toLowerCase() ? <React.Fragment><div>Matching Share this round : {`${matchingAmount} ETH`} </div> <br></br>
                <div>Withdrawable Amount : {`${unpaidAmount} ETH`} </div>
                <button onClick={sendMatchingShares} className="hero__cta cta arch">Withdraw </button></React.Fragment> : 
                <Popup trigger={<button>Contribute </button>} onOpen = {click} closeOnEscape = {false} closeOnDocumentClick= {false} modal id="pop">
                <Verify />
                </Popup>}
              </div>
            </div>
          </div>
        </main>
      </div>
      <ToastsContainer store={ToastsStore}/>
    </div>
  );
};

export default Description;
