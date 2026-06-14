import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import API from "../../services/api";

import "./Skills.css";

function Skills() {
  const [skills, setSkills] = useState([]);

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

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }

    acc[skill.category].push(skill);

    return acc;
  }, {});

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <div className="skills-grid">
        {Object.entries(groupedSkills).map(([category, skills]) => (
          <motion.div
            key={category}
            className="skill-card"
            whileHover={{
              y: -8,
            }}
          >
            <h3>{category}</h3>

            <div className="skill-tags">
              {skills.map((skill) => (
                <span key={skill._id} className="skill-tag">
                  {skill.skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
