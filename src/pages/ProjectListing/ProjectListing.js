import { useState, useEffect} from "react";

import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Filter from "../../Components/Filter/Filter";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import {address, abi} from "../../config";
import Web3 from 'web3';
import { useNavigate } from "react-router-dom";
import LoginGithub from 'react-login-github';
import axios from 'axios';

import './ProjectListing.css';

const ProjectListing =  () => {

  let token = null;
  const navigate = useNavigate();

  const [currentAccount, setCurrentAccount] = useState("");
  const [contract, setContract] = useState();
  const [web3Provider, setWeb3Provider] = useState(null);
  const [projects, setProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState();
  const [select, setSelect] = useState(false);

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
        const categories=["DeFi", "NFT", "Gaming", "Wallet", "Education", "Media"];
        const isSelected = {};
        categories.forEach(category => isSelected[category] = false  )
        setSelectedCategories(isSelected);
      }, [contract, currentAccount]);

      
    const getProjects = async () => {
       if(contract)
        contract.methods.getAllProjects().call().then(i =>Object.entries(i)).then(i => setProjects(i));
    }

    const handleSearch = (query) =>{
        setSearchQuery(query);
    }

    const onSuccess = response => {
      axios.get(`https://qfdone.herokuapp.com/authenticate/${response.code}`)
        .then(res => res.data.token)
        .then(_token => {
          token = _token;
          navigate('/form', {state : token})
        })
        .catch(err => console.log(err));};
  
      const onFailure = res => console.error(res);

    return(
        <div className="wrapper">
        <div className="project-nav"><Navbar /></div>
            <div className="project-header">
                <div className="project-header-container"></div>
                <div className="project-header-section">
                    <div className="box">

                        <div className="title">
                            <span className="block"></span>
                            <h1>Projects<span></span></h1>
                        </div>

                    </div>
                   
                </div>
            </div>
                <div className="project-section">
                     <div className="search-bar">
                        <SearchBar handleSearch={handleSearch} />
                    </div>
                </div>
                <div className="projects-wrapper">
                        <div className="filter">
                            <Filter selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} setSelect= {setSelect} select={select}/>
                        </div>
                        <div className="project-grid-wrapper">
                        {projects.length != 0 ?
                         (projects.filter((project) => {
                                if (searchQuery === "" )                               
                                    return project[1];
                                else if (project[1].title.toLowerCase().includes(searchQuery.toLowerCase()))
                                    return project[1];
                                                           
                             })
                            .map((project) => {
                              console.log(project);
                            if(selectedCat())
                           return selectedCategories[project[1].category] ? <ProjectCard project={project[1]} key={project[0]}/> : null 

                           return <ProjectCard project={project[1]} key={project[0]} contract={contract} currentAccount={currentAccount} />;
                            })) : <div className="empty-project-list"><div className="no-projects">No project has been listed yet</div>
                              <LoginGithub clientId="0661798dd8b17b1f2412"
                            onSuccess={onSuccess}
                            onFailure={onFailure}
                            scope= "repo%20read:user"
                            buttonText= "List a Project"
                            className="hero__cta cta cta--primary" />
                            </div>
                        }
                        </div>
                </div>
               
            <Footer />
            
        </div>
    )
}

export default ProjectListing;