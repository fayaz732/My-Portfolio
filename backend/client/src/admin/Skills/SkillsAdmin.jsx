import { useState, useEffect } from "react";
import API from "../../services/api";
import "../AdminCommon.css";
import "./SkillsAdmin.css";

function SkillsAdmin() {
  const [skills, setSkills] = useState([]);

  const [formData, setFormData] = useState({
    category: "",
    skill: "",
    level: "",
  });

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const { data } = await API.get("/skills");
      setSkills(data);
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

  const addSkill = async () => {
    if (!formData.category || !formData.skill) {
      alert("Fill Required Fields");
      return;
    }

    try {
      await API.post("/skills", formData);

      alert("Skill Added Successfully");

      setFormData({
        category: "",
        skill: "",
        level: "",
      });

      fetchSkills();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteSkill = async (id) => {
    try {
      await API.delete(`/skills/${id}`);
      fetchSkills();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admin-page">
      <h1>Skills Manager</h1>

      <div className="skills-stats-card">
        <h2>Current Skills</h2>

        <div className="skills-count">
          {skills.length}
        </div>

        <p>Total Skills Available</p>
      </div>

      <div className="skills-form">
        <h2>Add New Skill</h2>

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">
            Select Category
          </option>

          <option value="Languages">
            Languages
          </option>

          <option value="Frontend">
            Frontend
          </option>

          <option value="Backend">
            Backend
          </option>

          <option value="Database">
            Database
          </option>

          <option value="Tools">
            Tools
          </option>

          <option value="AI">
            AI
          </option>
        </select>

        <input
          name="skill"
          placeholder="Skill Name"
          value={formData.skill}
          onChange={handleChange}
        />

        <input
          type="number"
          name="level"
          placeholder="Skill Level %"
          value={formData.level}
          onChange={handleChange}
        />

        <button
          className="skill-btn"
          onClick={addSkill}
        >
          Add Skill
        </button>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div
            key={skill._id}
            className="skill-card"
          >
            <h3>{skill.skill}</h3>

            <p>
              Category:
              {" "}
              {skill.category}
            </p>

            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{
                  width: `${skill.level}%`,
                }}
              />
            </div>

            <span>
              {skill.level}%
            </span>

            <button
              className="delete-btn"
              onClick={() =>
                deleteSkill(skill._id)
              }
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsAdmin;