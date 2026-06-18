import {
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <footer id="contact" className="footer">

      <div className="footer-content">

        <h2>Let's Connect</h2>

        <p className="footer-description">
          Open to internships, job opportunities,
          freelance projects, YouTube collaborations,
          Instagram collaborations, and exciting new
          opportunities in Web Development,
          Artificial Intelligence, and Technology.
        </p>

        <div className="footer-contact">

          <p>
            <FaEnvelope />
            <span>fayazpatel603@gmail.com</span>
          </p>

          <p>
            <FaPhone />
            <span>9389389627778</span>
          </p>

          <p>
            <FaMapMarkerAlt />
            <span>Bangalore, India</span>
          </p>

        </div>

        <div className="footer-social">

          <a
            href="https://github.com/fayaz732"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.instagram.com/faiu_09"
            target="_blank"
            rel="noreferrer"
            className="instagram-icon"
          >
            <FaInstagram />
          </a>

          <a
            href="https://youtube.com/@explore_with_fayaz"
            target="_blank"
            rel="noreferrer"
            className="youtube-icon"
          >
            <FaYoutube />
          </a>

        </div>

        <div className="footer-bottom">
          © 2026 Fayaz. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}

export default Footer;