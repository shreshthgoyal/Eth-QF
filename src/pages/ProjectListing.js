import { useState, useEffect} from "react";

import ProjectCard from "../components/ProjectCard";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { getProjectData } from "../data/ProjectData";


import './ProjectListing.css';

const ProjectListing =  () => {
    const [projects, setProjects] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategories, setSelectedCategories] = useState({});


    useEffect(() => {
        getProjects();


        const categories=["DeFi", "NFT", "Gaming", "Wallet", "Education"];
        const isSelected = {};
        categories.forEach(category => isSelected[category] = false  )
        setSelectedCategories(isSelected);


      }, []);

      
    const getProjects = async () => {
        const projects = await getProjectData();
        setProjects(projects);
    }


    const handleSearch = (query) =>{

        setSearchQuery(query);
 
    }

   

    return(
        <div className="wrapper">
        <div className="project-nav"><Navbar /></div>
        
            
            <div className="project-header">
                <div className="project-header-container"></div>
                <div class="project-header-section">
                    <div class="box">

                        <div class="title">
                            <span class="block"></span>
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
                            <Filter selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories}/>
                        </div>
                        <div className="project-grid-wrapper">
                        {projects.filter((project) => {
                                if (searchQuery === "")                               
                                    return project;
                                else if (project.name.toLowerCase().includes(searchQuery.toLowerCase()))
                                    return project;
                                {/* else if (selectedCategories[project.userId])
                                    return project; */}
                            })
                            .map((project) => (
                            <ProjectCard project={project} />
                        ))}

                        </div>
                </div>
               
            <Footer />
            
        </div>
    )
}

export default ProjectListing;