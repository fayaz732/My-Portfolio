import { useState, useEffect } from "react";
import API from "../../services/api";
import "../AdminCommon.css";
import "./ProjectsAdmin.css";

function ProjectsAdmin() {
  const [projects, setProjects] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    github: "",
    live: "",
    image: null,
  });

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const addProject = async () => {
    try {
      const data = new FormData();

      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("github", formData.github);
      data.append("live", formData.live);

      if (formData.image) {
        data.append("image", formData.image);
      }

      await API.post("/projects", data);

      alert("Project Added Successfully");

      setFormData({
        title: "",
        description: "",
        github: "",
        live: "",
        image: null,
      });

      fetchProjects();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProject = async (id) => {
    try {
      await API.delete(`/projects/${id}`);
      fetchProjects();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admin-page">
      <h1>Projects Manager</h1>

      <div className="project-stats-card">
        <h2>Current Projects</h2>

        <div className="project-count">{projects.length}</div>

        <p>Total Projects</p>
      </div>

      <div className="project-form">
        <h2>Add New Project</h2>

        <input
          name="title"
          placeholder="Project Title"
          value={formData.title}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Project Description"
          value={formData.description}
          onChange={handleChange}
        />

        <input
          name="github"
          placeholder="GitHub Link"
          value={formData.github}
          onChange={handleChange}
        />

        <input
          name="live"
          placeholder="Live Demo Link"
          value={formData.live}
          onChange={handleChange}
        />

        <input type="file" onChange={handleImage} />

        {formData.image && (
          <img
            className="project-preview"
            src={URL.createObjectURL(formData.image)}
            alt="Preview"
          />
        )}

        <button className="project-btn" onClick={addProject}>
          Add Project
        </button>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project._id} className="project-card">
            {project.image && (
              <img
                className="project-image"
                src={project.image}
                alt={project.title}
              />
            )}

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>

              <a href={project.live} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </div>

            <button
              className="delete-btn"
              onClick={() => deleteProject(project._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsAdmin;
