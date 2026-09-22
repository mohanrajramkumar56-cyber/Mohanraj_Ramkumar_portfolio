import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useTheme } from "./lib/stores/useTheme";
import Portfolio from "./components/Portfolio";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import TechStackPage from "./pages/TechStackPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import EducationPage from "./pages/EducationPage";
import ExperiencePage from "./pages/ExperiencePage";
import AchievementsPage from "./pages/AchievementsPage";
import CertificationsPage from "./pages/CertificationsPage";

function App() {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    console.log("App component mounted successfully");
    console.log("isDarkMode:", isDarkMode);
    document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <div style={{ width: "100vw", minHeight: "100vh", background: "#0a0a0a" }}>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/techstack" element={<TechStackPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
      </Routes>
    </div>
  );
}

export default App;