import { Link } from "react-router-dom";
import "./ProjectCard.css";
const ProjectCard = ({ project, contract, currentAccount }) => {

  var images = [],
index = 0;
images[0] = "https://images.unsplash.com/photo-1645226027646-4113fd3b32a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
images[1] = "https://images.unsplash.com/photo-1645226027646-4113fd3b32a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
images[2] = "https://images.unsplash.com/photo-1645226027646-4113fd3b32a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
index = Math.floor(Math.random() * images.length);

  return (
    <div className="card-container">
      <div className="card">
        <div className="imgBx">
          <img src={images[index]} alt="Project"/>
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
