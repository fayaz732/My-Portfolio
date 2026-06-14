import { useState } from "react";
import "../AdminCommon.css";
import "./CertificatesAdmin.css";

function CertificatesAdmin() {
  const [certificates, setCertificates] = useState([
    {
      id: 1,
      title: "MERN Stack Development",
      issuer: "Udemy",
      image: null,
      link: "",
    },
    {
      id: 2,
      title: "Prompt Engineering",
      issuer: "Coursera",
      image: null,
      link: "",
    },
  ]);

  const [formData, setFormData] = useState({
    title: "",
    issuer: "",
    link: "",
    image: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const addCertificate = () => {
    if (!formData.title || !formData.issuer) {
      alert("Fill Required Fields");
      return;
    }

    setCertificates([
      ...certificates,
      {
        id: Date.now(),
        ...formData,
      },
    ]);

    setFormData({
      title: "",
      issuer: "",
      link: "",
      image: null,
    });

    alert("Certificate Added Successfully");
  };

  const deleteCertificate = (id) => {
    setCertificates(certificates.filter((item) => item.id !== id));
  };

  return (
    <div className="admin-page">
      <h1>Certificates Manager</h1>

      <div className="certificate-stats-card">
        <h2>Current Certificates</h2>

        <div className="certificate-count">{certificates.length}</div>

        <p>Total Certificates</p>
      </div>

      <div className="certificate-form">
        <h2>Add New Certificate</h2>

        <input
          name="title"
          placeholder="Certificate Title"
          value={formData.title}
          onChange={handleChange}
        />

        <input
          name="issuer"
          placeholder="Issued By"
          value={formData.issuer}
          onChange={handleChange}
        />

        <input
          name="link"
          placeholder="Certificate Link"
          value={formData.link}
          onChange={handleChange}
        />

        <input type="file" accept="image/*" onChange={handleImage} />

        {formData.image && (
          <img
            className="certificate-preview"
            src={URL.createObjectURL(formData.image)}
            alt="Preview"
          />
        )}

        <button className="certificate-btn" onClick={addCertificate}>
          Add Certificate
        </button>
      </div>

      <div className="certificate-grid">
        {certificates.map((certificate) => (
          <div key={certificate.id} className="certificate-card">
            {certificate.image && (
              <img
                className="certificate-image"
                src={
                  typeof certificate.image === "string"
                    ? certificate.image
                    : URL.createObjectURL(certificate.image)
                }
                alt={certificate.title}
              />
            )}

            <h3>{certificate.title}</h3>

            <p>Issued By: {certificate.issuer}</p>

            {certificate.link && (
              <a
                href={certificate.link}
                target="_blank"
                rel="noreferrer"
                className="certificate-link"
              >
                View Certificate
              </a>
            )}

            <button
              className="delete-btn"
              onClick={() => deleteCertificate(certificate.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CertificatesAdmin;
