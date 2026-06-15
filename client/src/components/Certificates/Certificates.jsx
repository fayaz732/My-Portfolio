import { useEffect, useState } from "react";
import API from "../../services/api";
import "./Certificates.css";

function Certificates() {
  const [certificates, setCertificates] = useState([]);

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

  return (
    <section className="section">
      <h2 className="section-title">
        Certificates
      </h2>

      <div className="certificate-grid">
        {certificates.map((certificate) => (
          <div
            key={certificate._id}
            className="certificate-card"
          >
            {certificate.image && (
              <img
                src={certificate.image}
                alt={certificate.title}
                className="certificate-image"
              />
            )}

            <h3>
              {certificate.title}
            </h3>

            <p>
              {certificate.issuer}
            </p>

            {certificate.link && (
              <a
                href={certificate.link}
                target="_blank"
                rel="noreferrer"
                className="certificate-btn"
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
