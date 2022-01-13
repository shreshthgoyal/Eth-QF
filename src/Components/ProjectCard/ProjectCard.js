import './ProjectCard.css';
const ProjectCard = ({project}) => {
    return(
        <div className="card-container">
            <div className="card">
                <div className="imgBx">
                    <img src="https://assets.codepen.io/4164355/shoes.png" />
                </div>
                <div className="contentBx">
                  
                   <a href={`${project.html_url}`} alt="View repo"> <h2>{project.name}</h2> </a>
                    <div className="project-manager">
                       <a href={`${project.owner.html_url}`}> {project.owner.login} </a>
                    </div>
                    <div className="project-description">
                        {project.description}
                    </div>
                    <a href="#" className="contribute">Contribute</a>

                </div>
            </div>
        </div>
    )
}

export default ProjectCard;