import { Link, useLocation } from "react-router-dom";

import "./DashboardSidebar.css";

function DashboardSidebar() {

  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
    },
    {
      name: "Profile",
      path: "/admin/profile",
    },
    {
      name: "Resume",
      path: "/admin/resume",
    },
    {
      name: "Projects",
      path: "/admin/projects",
    },
    {
      name: "Skills",
      path: "/admin/skills",
    },
    {
      name: "About",
      path: "/admin/about",
    },
    {
      name: "Learning",
      path: "/admin/learning",
    },
    {
      name: "Certificates",
      path: "/admin/certificates",
    },
   
  ];

  const handleLogout = () => {

    localStorage.removeItem(
      "token"
    );

    window.location.href =
      "/admin/login";
  };

  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        Fayaz Admin
      </div>

      <ul className="sidebar-menu">

        {menuItems.map((item) => (

          <li key={item.name}>

            <Link
              to={item.path}
              className={
                location.pathname === item.path
                  ? "sidebar-link active"
                  : "sidebar-link"
              }
            >
              {item.name}
            </Link>

          </li>

        ))}

      </ul>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        Logout
      </button>

    </aside>
  );
}

export default DashboardSidebar;