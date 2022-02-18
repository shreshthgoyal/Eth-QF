import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Description from "../../Components/Description/Description";
import { getProjectData } from "../../data/ProjectData";
import "./ProjectDescription.css";


import {address, abi} from "../../config";
import Web3 from 'web3';


const ProjectDescription = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [projectAccount, setProjectAccount] = useState("");
  const [contract, setContract] = useState();
  const [web3Provider, setWeb3Provider] = useState(null);
  const [projects, setProjects] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState();

  const transact = async () => {
    try{
      let {web3} = window;
      if (typeof web3 !== 'undefined') {
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
      projects.map((project) => {
        if (project[0] === parseInt(id)) {
          web3.eth.sendTransaction({from:currentAccount, to: project[1].projectOwner})
          .then(async function(receipt){
            console.log(receipt);
          })
        }
      })
   

    }catch(error){
       console.log(error);
    }
      
  }

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

  const selectedCat = () => {
      for(const key in selectedCategories){
          if(selectedCategories[key]) return true;
      }
      return false;
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
    checkWalletIsConnected()
    .then(
        getProjects
    )
        if(fund==="fund") transact();
        const categories=["DeFi", "NFT", "Gaming", "Wallet", "Education", "Media"];
        const isSelected = {};
        categories.forEach(category => isSelected[category] = false  )
        setSelectedCategories(isSelected);
      }, [contract]);

      
    const getProjects = async () => {
       if(contract)
        contract.methods.getAllProjects().call().then(i =>Object.entries(i)).then(i => setProjects(i));
    }
  const { id, fund } = useParams();


  return (
    // <div>
    //   <h1>hello - {id}</h1>
    //   <div>
    //     {projects.map((project) => {
    //       if (project.id === parseInt(id)) {
    //         console.log(project.name);
    //         return <h1 key={project.id}>{project.name}</h1>;
    //       }
    //     })}
    //   </div>
    // </div>
    <div>
      <div className="project-nav1">
        <Navbar />
      </div>
      {projects.map((project) => {
        if (project[0] == parseInt(id)) {
          return (
            <Description
              project={project[1]}
              key={project[0]}
              className="description1"
            />
          );
        }
      })}
      <Footer />
    </div>
  );
};

export default ProjectDescription;
