import { useEffect, useState } from "react";
import API from "../../services/api";
import "../AdminCommon.css";
import "./ResumeManager.css";

function ResumeManager() {
  const [resume, setResume] = useState(null);
  const [newResume, setNewResume] = useState(null);

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

  const uploadResume = async () => {
    try {
      if (!newResume) {
        alert("Select Resume First");
        return;
      }

      const formData = new FormData();

      formData.append("resume", newResume);

      const { data } = await API.post(
        "/resume",
        formData
      );

      setResume(data);

      setNewResume(null);

      alert("Resume Uploaded Successfully");
    } catch (error) {
      console.log(error);
      alert("Upload Failed");
    }
  };

  const deleteResume = async () => {
    try {
      await API.delete("/resume");

      setResume(null);

      alert("Resume Deleted");
    } catch (error) {
      console.log(error);
      alert("Delete Failed");
    }
  };

  return (
    <div className="admin-page">
      <h1>Resume Manager</h1>

      <div className="resume-card">
        <h2>Current Resume</h2>

        {resume ? (
          <>
            <div className="resume-icon">📄</div>

            <p className="resume-name">
              {resume.fileName}
            </p>

            <button
              className="delete-btn"
              onClick={deleteResume}
            >
              Delete Resume
            </button>
          </>
        ) : (
          <p>No Resume Uploaded</p>
        )}
      </div>

      <div className="resume-form">
        <h2>Upload New Resume</h2>

        <input
          type="file"
          accept=".pdf"
          onChange={(e) =>
            setNewResume(
              e.target.files[0]
            )
          }
        />

        {newResume && (
          <div className="selected-file">
            {newResume.name}
          </div>
        )}

        <button
          className="resume-btn"
          onClick={uploadResume}
        >
          Upload Resume
        </button>
      </div>
    </div>
  );
}

export default ResumeManager;