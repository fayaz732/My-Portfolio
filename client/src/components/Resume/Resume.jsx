import { useEffect, useState } from "react";

import API from "../../services/api";

import "./Resume.css";

function Resume() {
  const [resume, setResume] = useState(null);

  useEffect(() => {
    fetchResume();
  }, []);

  const fetchResume = async () => {
    try {
      const { data } = await API.get("/resume");

      setResume(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!resume) {
    return null;
  }

  return (
    <section id="resume" className="section">
      <h2>Resume</h2>

      <div className="resume-card">
        <h3>My Resume</h3>

        <p>
          Download my latest resume to learn more about my skills, projects and
          experience.
        </p>

        <div className="resume-buttons">
          <a
            href={resume.filePath}
            target="_blank"
            rel="noreferrer"
            className="resume-btn"
          >
            View Resume
          </a>

          <a
           href={resume.filePath}
            download
            className="resume-btn"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
