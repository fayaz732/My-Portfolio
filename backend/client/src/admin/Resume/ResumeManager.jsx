import { useState } from "react";
import "../AdminCommon.css";
import "./ResumeManager.css";

function ResumeManager() {
  const [resume, setResume] = useState({
    name: "Fayaz_Resume.pdf",
    file: null,
  });

  const [newResume, setNewResume] = useState(null);

  const uploadResume = () => {
    if (!newResume) {
      alert("Select Resume First");
      return;
    }

    setResume({
      name: newResume.name,
      file: newResume,
    });

    alert("Resume Uploaded Successfully");

    setNewResume(null);
  };

  const deleteResume = () => {
    setResume(null);

    alert("Resume Deleted");
  };

  return (
    <div className="admin-page">
      <h1>Resume Manager</h1>

      <div className="resume-card">
        <h2>Current Resume</h2>

        {resume ? (
          <>
            <div className="resume-icon">📄</div>

            <p className="resume-name">{resume.name}</p>

            <button className="delete-btn" onClick={deleteResume}>
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
          onChange={(e) => setNewResume(e.target.files[0])}
        />

        {newResume && <div className="selected-file">{newResume.name}</div>}

        <button className="resume-btn" onClick={uploadResume}>
          Upload Resume
        </button>
      </div>
    </div>
  );
}

export default ResumeManager;
