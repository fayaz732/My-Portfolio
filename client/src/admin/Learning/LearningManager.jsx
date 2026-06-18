import { useEffect, useState } from "react";
import API from "../../services/api";
import "../AdminCommon.css";
import "./LearningAdmin.css";

function LearningAdmin() {
  const [learning, setLearning] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    fetchLearning();
  }, []);

  const fetchLearning = async () => {
    try {
      const { data } = await API.get("/learning");

      setLearning(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addLearning = async () => {
    try {
      if (!formData.title || !formData.description) {
        alert("Fill all fields");
        return;
      }

      await API.post("/learning", {
        title: formData.title,
        description: formData.description,
      });

      fetchLearning();

      setFormData({
        title: "",
        description: "",
      });

      alert("Topic Added Successfully");
    } catch (err) {
      console.log(err);

      alert("Failed To Add Topic");
    }
  };

  const deleteLearning = async (id) => {
    try {
      await API.delete(`/learning/${id}`);

      fetchLearning();

      alert("Topic Deleted");
    } catch (err) {
      console.log(err);

      alert("Delete Failed");
    }
  };

  return (
    <div className="admin-page">
      <h1>Learning Manager</h1>

      <div className="learning-stats-card">
        <h2>Current Learning Topics</h2>

        <div className="learning-count">{learning.length}</div>

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

        <button className="learning-btn" onClick={addLearning}>
          Add Topic
        </button>
      </div>

      <div className="learning-grid">
        {learning.map((item) => (
          <div key={item._id} className="learning-card">
            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <button
              className="delete-btn"
              onClick={() => deleteLearning(item._id)}
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
