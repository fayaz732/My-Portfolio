import { useState, useEffect } from "react";
import API from "../../services/api";
import "../AdminCommon.css";
import "./Profile.css";

function Profile() {
  const [profile, setProfile] = useState({
    name: "Fayaz",
    email: "fayazpatel603@gmail.com",
    phone: "9389XXXXXX",
    location: "Bangalore, India",
    about: "Full Stack Developer | AI Engineer",
    github: "https://github.com/fayaz732",
    instagram: "https://instagram.com/faiu_09",
    youtube: "https://youtube.com/@explore_with_fayaz",
    image: "",
  });

  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const { data } = await API.get("/profile");

      if (data) {
        setProfile(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.put("/profile", profile);

      alert("Profile Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const uploadPhoto = async () => {
    if (!image) {
      alert("Select Photo First");
      return;
    }

    try {
      const formData = new FormData();

      formData.append("image", image);

      await API.post("/profile/photo", formData);

      alert("Photo Uploaded Successfully");

      fetchProfile();
    } catch (error) {
      console.log(error);
      alert("Upload Failed");
    }
  };

  return (
    <div className="admin-page">
      <h1>Profile Manager</h1>

      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="upload-section">
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setImage(e.target.files[0])
            }
          />

          <button
            type="button"
            className="profile-btn"
            onClick={uploadPhoto}
          >
            Upload Photo
          </button>
        </div>

        {image && (
          <img
            className="profile-image"
            src={URL.createObjectURL(image)}
            alt="Preview"
          />
        )}

        {profile.image && (
          <img
            className="profile-image"
           src={`${import.meta.env.VITE_SERVER_URL}/${profile.image}`}
            alt="Profile"
          />
        )}

        <input
          name="name"
          placeholder="Name"
          value={profile.name || ""}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={profile.email || ""}
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone"
          value={profile.phone || ""}
          onChange={handleChange}
        />

        <input
          name="location"
          placeholder="Location"
          value={profile.location || ""}
          onChange={handleChange}
        />

        <input
          name="github"
          placeholder="GitHub Link"
          value={profile.github || ""}
          onChange={handleChange}
        />

        <input
          name="instagram"
          placeholder="Instagram Link"
          value={profile.instagram || ""}
          onChange={handleChange}
        />

        <input
          name="youtube"
          placeholder="YouTube Link"
          value={profile.youtube || ""}
          onChange={handleChange}
        />

        <textarea
          rows="5"
          name="about"
          placeholder="About"
          value={profile.about || ""}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="profile-btn"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
}

export default Profile;