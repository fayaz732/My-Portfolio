import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "./AdminLogin.css";
function AdminLogin() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", data.token);

      navigate("/admin/dashboard");
    } catch (error) {
      // alert("Invalid Credentials");

      console.log(error.response?.data);

      alert(error.response?.data?.message || "Login Failed");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Admin Login</h1>

        <p>Sign in to manage portfolio</p>

        <form className="login-form" onSubmit={handleSubmit} autoComplete="off">
          <input
            type="email"
            name="admin_email"
            autoComplete="new-email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            name="admin_password"
            autoComplete="new-password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
