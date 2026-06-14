import { useEffect, useState } from "react";

import { TypeAnimation } from "react-type-animation";

import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

import API from "../../services/api";

import "./Hero.css";

function Hero() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const { data } = await API.get("/profile");

      setProfile(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!profile) {
    return null;
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <span className="hero-tag">👋 Hello, I'm</span>

          <h1>{profile.name}</h1>

          <div className="hero-role">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Software Engineer",
                2000,
                "AI Engineer",
                2000,
                "Prompt Engineer",
                2000,
              ]}
              repeat={Infinity}
            />
          </div>

          <p>{profile.about}</p>

          <div className="hero-buttons">
            <button
              className="hero-btn"
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                });

                window.history.pushState({}, "", "/projects");
              }}
            >
              View Projects
            </button>

            <button
              className="hero-btn-outline"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });

                window.history.pushState({}, "", "/contact");
              }}
            >
              Contact Me
            </button>
          </div>

          <div className="social-icons">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a
              href={profile.instagram}
              target="_blank"
              rel="noreferrer"
              className="instagram-icon"
            >
              <FaInstagram />
            </a>

            <a
              href={profile.youtube}
              target="_blank"
              rel="noreferrer"
              className="youtube-icon"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="profile-circle">
          <div className="profile-inner">
            {profile.image ? (
              <img
                src={`${import.meta.env.VITE_SERVER_URL}/${profile.image}`}
                alt={profile.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            ) : (
              <div className="profile-text">
                Upload
                <br />
                Photo
                <br />
                Later
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
