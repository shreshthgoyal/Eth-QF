import './ProjectForm.css';
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer.js";
import React, { useState }  from 'react';
import axios from 'axios';
import {useLocation} from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";

const ProjectForm = ({contract, currentAccount}) => {

  const location = useLocation();
  const temp_code = location.state;

  const [userName, setUserName] = useState("");
  const [verified, setVerified] = useState(false);
  const [val, setPro] = useState("");
  const [userRepo, setRepo] = useState([""]);
  const [category, setCat] = useState([""]);
  const [totalRepo, setVal] = useState();
  const categories=["DeFi", "NFT", "Gaming", "Wallet", "Education"];

  const onChange = () => {
    setVerified(true);
  }
  const addMessage = (newMessage) => setRepo(state => [...state, newMessage])
  const getData = async () => {
    const users = await axios({
      url: 'https://api.github.com/user',
      method: 'get',
      headers: {
        Authorization: `token ${temp_code}`,
      },
    });
    setUserName(users.data.login)
    setVal(users.data.public_repos)
    return [userName];
   };

   const getProject = async () => {
     if(userName.length > 0 )
   { const repos = await axios({
        url: `https://api.github.com/users/${userName}/repos`,
        method: 'get',
        headers: {
          Authorization: `token ${temp_code}`,
        },
      })
      repos.data.forEach(i => addMessage(i.name) )}
   };

   React.useEffect( ()=> {
     getData();
   getProject();
   return ( setRepo([]))
    }, [userName, verified])
    
    return (
        <div>
  <Navbar />
  <div className="containero">
  <div className="lefto">
    <div className="headero">
      <h2 className="animation a1">Welcome Back</h2>
      <h4 className="animation a2">Log in to your account using email and password</h4>
    </div>
    <div className="form">
      <input type="text" className="form-field animation a3" placeholder= {userName} disabled/>
      <select className="form-field animation a4 project" onChange={(e) => setPro(e.target.value)}>
      <option value= "">Choose Your Project</option>
        {
          userRepo.map(item => {
            return (<option key={item} value={item}>{item}</option>);
        })
        }
      </select>   
      <input type="text" className="form-field animation a3" placeholder= {(val != "") ? `https://github.com/${userName}/${val}` : "Open Source URL"} disabled/>
      <input type="text" className="form-field animation a3" placeholder= "Pitch"/>
      <select className="form-field animation a4 project" onChange={(e) => setCat(e.target.value)}>
      <option value= "">Choose Project Category</option>
        {
          categories.map(item => {
            return (<option key={item} value={item}>{item}</option>);
        })
        }
      </select>   
      <input type="text" className="form-field animation a3" placeholder= "Other Links"/>
      <input type="text" className="form-field animation a3 p" placeholder= "Twitter Handle"/>
      <ReCAPTCHA
    sitekey="6Lf_B0QeAAAAACfFq7XiF_2J96rDJbMQClzXklgB"
    onChange={onChange}
    className="animation a3"
  />
      {verified ? <button className="animation a3 show" type="submit" id="fb" onClick={() => {
      contract.methods.listProject(val, "First", "link", category).send({from : currentAccount}); 
     contract.methods.getAllProjects().call().then(i => console.log(i));
      }} >
        List</button>:null}
    </div>
  </div>
  <div className="righto"></div>
</div>
  <Footer />
  </div>
    )
}

export default ProjectForm;