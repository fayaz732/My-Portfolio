import { useEffect, useState } from "react";
import API from "../../services/api";
import "../AdminCommon.css";
import "./CertificatesAdmin.css";

function CertificatesAdmin() {
  const [certificates, setCertificates] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    issuer: "",
    link: "",
    image: null,
  });

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      const { data } = await API.get("/certificates");

      setCertificates(data);
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

  const handleImage = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const addCertificate = async () => {
    try {
      if (!formData.title || !formData.issuer) {
        alert("Fill Required Fields");
        return;
      }

      const data = new FormData();

      data.append("title", formData.title);
      data.append("issuer", formData.issuer);
      data.append("link", formData.link);

      if (formData.image) {
        data.append("image", formData.image);
      }

      await API.post("/certificates", data);

      fetchCertificates();

      setFormData({
        title: "",
        issuer: "",
        link: "",
        image: null,
      });

      alert("Certificate Added Successfully");
    } catch (error) {
      console.log(error);
      alert("Failed To Add Certificate");
    }
  };

  const deleteCertificate = async (id) => {
    try {
      await API.delete(`/certificates/${id}`);

      fetchCertificates();

      alert("Certificate Deleted");
    } catch (error) {
      console.log(error);
      alert("Delete Failed");
    }
  };

  return (
    <div className="admin-page">
      <h1>Certificates Manager</h1>

      <div className="certificate-stats-card">
        <h2>Current Certificates</h2>

        <div className="certificate-count">
          {certificates.length}
        </div>

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

        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
        />

        {formData.image && (
          <img
            className="certificate-preview"
            src={URL.createObjectURL(formData.image)}
            alt="Preview"
          />
        )}

        <button
          className="certificate-btn"
          onClick={addCertificate}
        >
          Add Certificate
        </button>
      </div>

      <div className="certificate-grid">
        {certificates.map((certificate) => (
          <div
            key={certificate._id}
            className="certificate-card"
          >
            {certificate.image && (
              <img
                className="certificate-image"
                src={certificate.image}
                alt={certificate.title}
              />
            )}

            <h3>{certificate.title}</h3>

            <p>
              Issued By: {certificate.issuer}
            </p>

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
              onClick={() =>
                deleteCertificate(
                  certificate._id
                )
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

export default CertificatesAdmin;