import "./UserProf.css";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Web3 from 'web3';
import {address, abi} from "../../config";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";


const UserProf = () => {

    const [contract, setContract] = useState();
    const [currentAccount, setCurrentAccount] = useState("");
  const [web3Provider, setWeb3Provider] = useState(null);
  const [projects, setProjects] = useState([]);
  const [ userProjects, setUserProjects] = useState([]);
  const [totalFund, setTotalFund] = useState(0);


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
            await ethereum.enable()
          } catch (error) {
          }
      }
      else if (window.web3) {
        setWeb3Provider(web3.currentProvider);
        window.web3 = new Web3(web3.currentProvider)
      }
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

  const getProjects = async () => {
    console.log("getting projects...");
    console.log(contract);
    if(contract){
        console.log("here")
        await contract.methods.getAllProjects().call().then(i =>Object.entries(i)).then(i => {
            let a = 0;
            i.forEach(async item=>{
                
                if(item[1].githubUser === id){
                    a += item[1].lifetimeMatching/1000000000000000000 + item[1].fund/1000000000000000000;
                    console.log(a);
                    console.log(item[1]);
                    projects.push(item[1]);
                    
                    setProjects([...projects]);
                }
                
            })
            setTotalFund(a);
         }).then(console.log(projects));
    }
     

 }


    const [avatar, setAvatar] = useState("");
    const [bio, setBio] = useState("");
    const [web, setWeb] = useState("");
    const [follower, setFollower] = useState(0);
    const [repos, setRepos] = useState(0);
    const [github, setGithub] = useState("");
    const [name, setName] = useState("");
    const [twitter, setTwitter] = useState("");
    const { id } = useParams();


    useEffect(() => {
        const url = `https://api.github.com/users/${id}`;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setRepos(json.public_repos)
                setAvatar(json.avatar_url);
                setBio(json.bio);
                setWeb(json.blog);
                setFollower(json.followers);
                setGithub(json.html_url);
                setName(json.name);
                setTwitter(json.twitter_username);
                await getProjects();
                
            } catch (error) {
                console.log("error", error);
            }
        };
        

        checkWalletIsConnected().then(fetchData());

    }, [contract]);
    return (
        <div>
            <Navbar />
            <section className="section about-section gray-bg" id="about">
                <div className="container">

                    <div className="row align-items-center flex-row-reverse">
                        <div className="col-lg-6">
                            <div className="about-text go-to">
                                <h3 className="dark-color">About The Developer</h3>
                                <h6 className="theme-color lead">{name} | {bio}</h6>
                                <p>I <mark>design and develop</mark> services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.</p>

                                <section className="section-icons">
                                    <ul className="list-icons">
                                        <li>
                                            <a href={github} className="github" target="_blank" rel="noreferrer">
                                                <i className="fab fa-github fa-2x"></i>
                                                <span className="text-cont">
                                                    <span className="text">Github</span>
                                                </span>
                                            </a>
                                        </li>
                                        {twitter !== null &&
                                            <li>
                                                <a href={twitter} className="twitter" target="_blank" rel="noreferrer">
                                                    <i className="fab fa-twitter fa-2x"></i>
                                                    <span className="text-cont">
                                                        <span className="text">Twitter</span>
                                                    </span>
                                                </a>
                                            </li>}
                                        {web !== null &&
                                            <li>
                                                <a href={web} className="Portfolio" target="_blank" rel="noreferrer">
                                                    <i className="fab fa-brands fa-chrome fa-2x"></i>
                                                    <span className="text-cont">
                                                        <span className="text">Portfolio</span>
                                                    </span>
                                                </a>
                                            </li>
                                        }

                                    </ul>
                                </section>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-avatar">
                                <img src={avatar} title="" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="counter">
                        <div className="row">
                            <div className="col-3 col-lg-3">
                                <div className="count-data text-center">
                                    <h6 className="count h2" data-to="500" data-speed="500">{follower}</h6>
                                    <p className="m-0px font-w-300">Followers</p>
                                </div>
                            </div>
                            <div className="col-3 col-lg-3">
                                <div className="count-data text-center">
                                    <h6 className="count h2" data-to="150" data-speed="150">{projects.length}</h6>
                                    <p className="m-0px font-w-300">Projects Listed</p>
                                </div>
                            </div>
                            <div className="col-3 col-lg-3">
                                <div className="count-data text-center">
                                    <h6 className="count h2" data-to="850" data-speed="850">{totalFund} ETH</h6>
                                    <p className="m-0px font-w-300">Total Funding Collected</p>
                                </div>
                            </div>
                            <div className="col-3 col-lg-3">
                                <div className="count-data text-center">
                                    <h6 className="count h2" data-to="850" data-speed="850">{repos}</h6>
                                    <p className="m-0px font-w-300">Total Projects</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <br /><br /><br />
                    <div className="projects-wrapper">
                   
                    {projects.map(project=> <ProjectCard project={project} contract={contract} currentAccount = {currentAccount}/>)}
                    
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default UserProf;