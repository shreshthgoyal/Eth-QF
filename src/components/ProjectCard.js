import './ProjectCard.css';
const ProjectCard = ({project}) => {
    return(
        <div class="card-container">
            <div class="card">
                <div class="imgBx">
                    <img src="https://assets.codepen.io/4164355/shoes.png" />
                </div>
                <div class="contentBx">
                  
                   <a href={`${project.html_url}`} alt="View repo"> <h2>{project.name}</h2> </a>
                    <div class="project-manager">
                       <a href={`${project.owner.html_url}`}> {project.owner.login} </a>
                    </div>
                    <div class="project-description">
                        {project.description}
                    </div>
                    <a href="#" className="contribute">Contribute</a>

                </div>
            </div>
        </div>
    )
}

export default ProjectCard;