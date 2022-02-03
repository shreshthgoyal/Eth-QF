import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Description from "../../Components/Description/Description";
import { getProjectData } from "../../data/ProjectData";
import "./ProjectDescription.css";

const ProjectDescription = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    const projects = await getProjectData();
    setProjects(projects);
  };

  const { id } = useParams();

  return (
    // <div>
    //   <h1>hello - {id}</h1>
    //   <div>
    //     {projects.map((project) => {
    //       if (project.id === parseInt(id)) {
    //         console.log(project.name);
    //         return <h1 key={project.id}>{project.name}</h1>;
    //       }
    //     })}
    //   </div>
    // </div>
    <div>
      <div className="project-nav1">
        <Navbar />
      </div>
      {projects.map((project) => {
        if (project.id === parseInt(id)) {
          return (
            <Description
              project={project}
              key={project.id}
              className="description1"
            />
          );
        }
      })}
      <Footer />
    </div>
  );
};

export default ProjectDescription;
