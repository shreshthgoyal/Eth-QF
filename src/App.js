import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProjectForm from "./pages/ProjectForm/ProjectForm";
import ProjectListing from "./pages/ProjectListing/ProjectListing";
import Sponsors from "./pages/Sponsors/Sponsors";

import ProjectDescription from "./pages/ProjectDescription/ProjectDescription";
import {address, abi} from "./config";
import Web3 from 'web3';
import { useState, useEffect } from 'react';

function App() {

  const [currentAccount, setCurrentAccount] = useState(null);
  const [contract, setContract] = useState(null);
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
        setCurrentAccount(account);
        loadContract();
      }else{
        console.log("No account found");
      }
      
    } catch(error){
      console.log("Error : ", error);
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

      setContract(new web3.eth.Contract(abi, address));
    }catch(error){
       console.log(error);
    }
  }

  useEffect(() => {
    checkWalletIsConnected();
  }, [currentAccount])
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/form" element={<ProjectForm  contract= {contract} currentAccount = {currentAccount} />}></Route>
            <Route path="/projects" element={<ProjectListing />}></Route>
            <Route
              path="/sponsor"
              element={<Sponsors contract={contract} currentAccount = {currentAccount} address = {address} />}
            ></Route>
            <Route path="/projects" element={<ProjectListing />}></Route>
            <Route
              path="/description/:id"
              element={<ProjectDescription />}
            ></Route>
          </Routes>
        </div>
      </Router>
    );
}

export default App;
