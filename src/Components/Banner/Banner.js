import "./Banner.css";
import {useState, useEffect} from 'react';
import {address} from '../../config';
import {ToastsContainer, ToastsStore} from 'react-toasts';

const Banner = ({contract, currentAccount}) => {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    if(contract){
      const res = await contract.methods.getAllProjects().call();
      await setProjects(res);
    }

 }
 

 const sendMatchingShares = async () => {
    console.log(projects);
    // const res = await contract.methods.getBalance().call();
    // console.log(res);
    projects.forEach(async (project) => {
      console.log(project);
        const response = await contract.methods.clrMatching().send({from: currentAccount});
        console.log(response);
        
        
    })
 }
 

 const getBalance = async () => {
  let res = await contract.methods.getBalance().call();
  res /= 1000000000000000000;
  ToastsStore.success(`Current contract balance : ${res} ETH`);
 }

 useEffect(() => {
    getProjects()
 }, [contract]);
 
    return (
        <section className="features" >
    <div className="features__container container container--px" >
      {/* <div className="features__text" >
        <h1 className="features__subtitle subtitle-primary" >Archive</h1>
        <h2 className="features__title title-primary">View previous matching round histories</h2>
      </div> */}
      <div className="arch_iv">
      {/* <a href="#" className="hero__cta cta arch">View archive</a><br></br><br></br> */}
      <button onClick={sendMatchingShares} className="hero__cta cta arch">CLR Matching</button>
      <br />
      <br />
      <button onClick={getBalance} className="hero__cta cta arch">Get Balance</button>
      </div>
    </div>
    <ToastsContainer store={ToastsStore}/>
  </section>
    )
}

export default Banner;