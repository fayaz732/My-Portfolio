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

  const handleDownload = async () => {
    try {
      const response = await fetch(resume.filePath);

      if (!response.ok) {
        throw new Error("Failed to download resume");
      }

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "Fayaz_Resume.pdf";

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Resume download failed:", error);
      alert("Unable to download resume.");
    }
  };

  if (!resume) {
    return null;
  }

  return (
    <section id="resume" className="section">
      <h2>Resume</h2>

      <div className="resume-card">
        <p>
          Download my latest resume to learn more about my skills, projects
          and experience.
        </p>

        <div className="resume-buttons">
          <button
            onClick={handleDownload}
            className="resume-btn"
          >
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}

export default Resume;
