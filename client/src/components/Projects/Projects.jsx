import { useEffect, useState } from "react";

import API from "../../services/api";

import "./Projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data } = await API.get("/projects");

      setProjects(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="projects" className="section">
      <h2>My Projects</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <div key={project._id} className="project-card">
            <div className="project-image">
              {project.image ? (
                <img src={project.image} alt={project.title} />
              ) : (
                <div className="upload-box">No Screenshot</div>
              )}
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-buttons">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                )}

                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
