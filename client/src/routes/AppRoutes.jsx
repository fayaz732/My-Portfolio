import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import AdminLogin from "../pages/AdminLogin";
import Dashboard from "../pages/Dashboard";

import Profile from "../admin/Profile/Profile";
import ProjectsAdmin from "../admin/Projects/ProjectsAdmin";
import SkillsAdmin from "../admin/Skills/SkillsAdmin";

import ResumeManager from "../admin/Resume/ResumeManager";
import AboutManager from "../admin/About/AboutManager";
import LearningManager from "../admin/Learning/LearningManager";
import CertificatesAdmin from "../admin/Certificates/CertificateManager";

import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/resume"
          element={
            <ProtectedRoute>
              <ResumeManager />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/projects"
          element={
            <ProtectedRoute>
              <ProjectsAdmin />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/skills"
          element={
            <ProtectedRoute>
              <SkillsAdmin />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/about"
          element={
            <ProtectedRoute>
              <AboutManager />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/learning"
          element={
            <ProtectedRoute>
              <LearningManager />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/certificates"
          element={
            <ProtectedRoute>
              <CertificatesAdmin />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
