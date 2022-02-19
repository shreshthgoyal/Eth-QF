import { Link } from "react-router-dom";
import "./ProjectCard.css";
const ProjectCard = ({ project, contract, currentAccount }) => {

var images = [];
images[0] = "https://pbs.twimg.com/card_img/1492856766534537217/Rz9RJade?format=png&name=small";
images[1] = "https://ethereum.org/static/810eb64d89629231aa4d8c7fe5f20ee5/7c061/developers-eth-blocks.png";
images[2] = "https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG.png";

  return (
    <div className="card-container">
      <div className="card">
        <div className="imgBx">
          <img src={images[Math.floor(Math.random() * images.length)]} alt="Project"/>
        </div>
        <div className="contentBx">
          <a href={`${project.githubLink}`} alt="View repo">
            {" "}
            <h2>{project.title}</h2>{" "}
          </a>
          <div className="project-manager">
            {/* <a href={`${project.owner.html_url}`}> {project.projectOwner} </a> */}
          </div>
          <div className="project-description">{project.pitch}</div>
          <Link to={`/description/${project[0]}`} className="contribute">
            Contribute
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
