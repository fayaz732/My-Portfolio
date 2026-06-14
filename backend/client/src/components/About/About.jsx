import { useEffect, useState } from "react";
import API from "../../services/api";

import { FaGraduationCap, FaLanguage } from "react-icons/fa";

import "./About.css";

function About() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    fetchAbout();
  }, []);

  const fetchAbout = async () => {
    try {
      const { data } = await API.get("/about");

      setAbout(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!about) {
    return (
      <section id="about" className="section">
        <h2>About Me</h2>
      </section>
    );
  }

  return (
    <section id="about" className="section">
      <h2>About Me</h2>

      <div className="about-grid">
        <div className="about-card">
          <div className="about-icon">
            <FaGraduationCap />
          </div>

          <h3>Education</h3>

          <p>{about.degree}</p>

          <p>{about.college}</p>

          <p>{about.year}</p>

          <span className="about-badge">CGPA {about.cgpa}</span>
        </div>

        <div className="about-card">
          <div className="about-icon">
            <FaLanguage />
          </div>

          <h3>Languages</h3>

          <div className="language-list">
            {about.languages?.map((lang) => (
              <span key={lang}>{lang}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
