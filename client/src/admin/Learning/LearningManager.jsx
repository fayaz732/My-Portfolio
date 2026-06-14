import { useState } from "react";
import "../AdminCommon.css";
import "./LearningAdmin.css";

function LearningAdmin() {
  const [learning, setLearning] = useState([
    {
      id: 1,
      title: "Java",
      description:
        "Learning Core Java, OOP Concepts, Collections Framework and Problem Solving.",
    },
    {
      id: 2,
      title: "Data Structures & Algorithms",
      description:
        "Improving coding skills and preparing for placements.",
    },
  ]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addLearning = () => {
    if (
      !formData.title ||
      !formData.description
    ) {
      alert("Fill all fields");
      return;
    }

    setLearning([
      ...learning,
      {
        id: Date.now(),
        title: formData.title,
        description:
          formData.description,
      },
    ]);

    setFormData({
      title: "",
      description: "",
    });

    alert("Topic Added");
  };

  const deleteLearning = (id) => {
    setLearning(
      learning.filter(
        (item) => item.id !== id
      )
    );
  };

  return (
    <div className="admin-page">
      <h1>Learning Manager</h1>

      <div className="learning-stats-card">
        <h2>Current Learning Topics</h2>

        <div className="learning-count">
          {learning.length}
        </div>

        <p>Total Topics</p>
      </div>

      <div className="learning-form">
        <h2>Add New Topic</h2>

        <input
          name="title"
          placeholder="Topic Name"
          value={formData.title}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />

        <button
          className="learning-btn"
          onClick={addLearning}
        >
          Add Topic
        </button>
      </div>

      <div className="learning-grid">
        {learning.map((item) => (
          <div
            key={item.id}
            className="learning-card"
          >
            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <button
              className="delete-btn"
              onClick={() =>
                deleteLearning(item.id)
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

export default LearningAdmin;