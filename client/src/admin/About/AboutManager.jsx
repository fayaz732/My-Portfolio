import { useState, useEffect } from "react";
import API from "../../services/api";
import "../AdminCommon.css";
import "./AboutAdmin.css";

function AboutAdmin() {
  const [about, setAbout] = useState({
    degree: "",
    college: "",
    year: "",
    cgpa: "",
  });

  const [languages, setLanguages] = useState([]);
  const [newLanguage, setNewLanguage] = useState("");

  useEffect(() => {
    fetchAbout();
  }, []);

  const fetchAbout = async () => {
    try {
      const { data } = await API.get("/about");

      if (data) {
        setAbout({
          degree: data.degree || "",
          college: data.college || "",
          year: data.year || "",
          cgpa: data.cgpa || "",
        });

        setLanguages(data.languages || []);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setAbout({
      ...about,
      [e.target.name]: e.target.value,
    });
  };

  const addLanguage = () => {
    if (!newLanguage.trim()) return;

    setLanguages([
      ...languages,
      newLanguage,
    ]);

    setNewLanguage("");
  };

  const deleteLanguage = (lang) => {
    setLanguages(
      languages.filter(
        (item) => item !== lang
      )
    );
  };

  const saveAbout = async () => {
    try {
      await API.put("/about", {
        ...about,
        languages,
      });

      alert("About Updated Successfully");
    } catch (error) {
      console.log(error);
      alert("Save Failed");
    }
  };

  return (
    <div className="admin-page">
      <h1>About Manager</h1>

      <div className="about-card">
        <h2>Education Details</h2>

        <input
          type="text"
          name="degree"
          placeholder="Degree"
          value={about.degree}
          onChange={handleChange}
        />

        <input
          type="text"
          name="college"
          placeholder="College"
          value={about.college}
          onChange={handleChange}
        />

        <input
          type="text"
          name="year"
          placeholder="Academic Year"
          value={about.year}
          onChange={handleChange}
        />

        <input
          type="text"
          name="cgpa"
          placeholder="CGPA"
          value={about.cgpa}
          onChange={handleChange}
        />
      </div>

      <div className="about-card">
        <h2>Languages</h2>

        <div className="language-input">
          <input
            type="text"
            placeholder="Add Language"
            value={newLanguage}
            onChange={(e) =>
              setNewLanguage(
                e.target.value
              )
            }
          />

          <button
            className="about-btn"
            onClick={addLanguage}
          >
            Add Language
          </button>
        </div>

        <div className="language-grid">
          {languages.map((lang) => (
            <div
              key={lang}
              className="language-card"
            >
              <span>{lang}</span>

              <button
                className="delete-btn"
                onClick={() =>
                  deleteLanguage(lang)
                }
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="save-wrapper">
        <button
          className="save-about-btn"
          onClick={saveAbout}
        >
          Save All Changes
        </button>
      </div>
    </div>
  );
}

export default AboutAdmin;