import { Link } from "react-router-dom";
import "./ProjectCard.css";
const ProjectCard = ({ project }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="imgBx">
          <img src="https://assets.codepen.io/4164355/shoes.png" />
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
