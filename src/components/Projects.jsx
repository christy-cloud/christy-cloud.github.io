import React, { useState, useEffect, useCallback } from "react";
import { Player } from "video-react";
import axios from "axios";
import ProjectCard from "./ProjectCard";
import {
  projectHeading,
  gitHubLink,
  gitHubUsername,
  gitHubQuerry,
  projectsLength,
} from "./configurations.json";


const Projects = () => {
  const [projectsArray, setProjectsArray] = useState([]);

  const handleRequest = useCallback((e) => {
    axios
      .get(gitHubLink + gitHubUsername + gitHubQuerry)
      .then((response) => {
        // handle success
        // console.log(response.data.slice(0, 4));
        return setProjectsArray(response.data.slice(0, projectsLength));
      })
      .catch((error) => {
        // handle error
        return console.error(error.message);
      })
      .finally(() => {
        // always executed
      });
  }, []);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  return (
    <div id="projects" className="bg-transparent m-0">
      {projectsArray.length && (
        <div className="container container-fluid p-5">
          <h1 className="display-3 pb-5">{projectHeading}</h1>
          <div className="row">
            {projectsArray.map((project) => (
              <ProjectCard key={project.id} id={project.id} value={project} />
            ))}
          </div>
              <br/>
              
            <div class="favLinks">
              <iframe class="embed-responsive-item" src="./favLinksVid.mp4" allowfullscreen width={550} height={280}></iframe>
                <p>Favorite Links Video</p>
            </div>

            <div class="design-pad">
               <iframe class="embed-responsive-item" src="./design-pad_Trim.mp4" allowfullscreen width={550} height={280}></iframe>
                <p>Design-Pad Video</p>
                
              </div>

        </div>
      )}

      <div class="copyright-bar">
             <p>© 2020 Christy Remijio. All rights reserved.</p>
      </div>
    
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
    </div>
  );
};

export default Projects;
