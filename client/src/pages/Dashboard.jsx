import { Link } from "react-router-dom";

import DashboardSidebar from "../admin/DashboardSidebar";

import "./Dashboard.css";

function Dashboard() {
  const cards = [
    {
      title: "Profile",
      description: "Manage Profile & Photo",
      path: "/admin/profile",
    },

    {
      title: "Projects",
      description: "Manage Projects",
      path: "/admin/projects",
    },

    {
      title: "Skills",
      description: "Manage Skills",
      path: "/admin/skills",
    },

    {
      title: "About",
      description: "Manage Education & Languages",
      path: "/admin/about",
    },

    {
      title: "Learning",
      description: "Manage Learning Topics",
      path: "/admin/learning",
    },

    {
      title: "Resume",
      description: "Manage Resume",
      path: "/admin/resume",
    },

    {
      title: "Certificates",
      description: "Manage Certificates",
      path: "/admin/certificates",
    },
  ];

  return (
    <div className="dashboard-container">
      <DashboardSidebar />

      <div className="dashboard-content">
        <h1>Admin Dashboard</h1>

        <div className="dashboard-cards">
          {cards.map((card) => (
            <Link key={card.title} to={card.path} className="dashboard-card">
              <h2>{card.title}</h2>

              <p>{card.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
