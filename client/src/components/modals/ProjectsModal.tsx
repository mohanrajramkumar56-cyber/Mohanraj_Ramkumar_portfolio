import { useNavigate } from 'react-router-dom';
import { useState } from "react";

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered FIR Assistant",
    description: "Developed an AI-based chatbot system that helps users file First Information Reports using natural language processing. Integrated voice-to-text and real-time response capabilities for ease of use.",
    technologies: ["Python", "Natural Language Processing", "Voice-to-Text", "AI", "Chatbot"],
    github: "https://github.com/saasilahamed/fir-assistant",
    demo: "",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%234F46E5'/%3E%3Crect x='50' y='50' width='300' height='200' fill='%23FFF' rx='10'/%3E%3Ccircle cx='150' cy='130' r='20' fill='%234F46E5'/%3E%3Crect x='190' y='110' width='100' height='40' fill='%23E5E7EB' rx='20'/%3E%3Ctext x='200' y='40' text-anchor='middle' fill='%23FFF' font-size='16' font-weight='bold'%3EAI FIR Assistant%3C/text%3E%3C/svg%3E"
  },
  {
    id: 2,
    title: "Anzoro Ã¢â‚¬â€œ Professional Networking Platform",
    description: "An NFC-powered networking platform that lets users create digital profiles and order custom-designed NFC cards. Includes React-based frontend, dynamic dashboard, and profile builder workflow.",
    technologies: ["React.js", "NFC Technology", "Digital Profiles", "Dashboard", "Profile Builder"],
    github: "https://github.com/saasilahamed/anzoro",
    demo: "",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%2310B981'/%3E%3Crect x='50' y='80' width='120' height='80' fill='%23FFF' rx='10'/%3E%3Crect x='230' y='80' width='120' height='80' fill='%23FFF' rx='10'/%3E%3Cpath d='M170 120 L230 120' stroke='%23FFF' stroke-width='3'/%3E%3Ctext x='200' y='40' text-anchor='middle' fill='%23FFF' font-size='18' font-weight='bold'%3EAnzoro%3C/text%3E%3C/svg%3E"
  },
  {
    id: 3,
    title: "Cognitive Firewall: AI-Based Scam & Manipulation Detection",
    description: "It is a browser-based, real-time text analysis tool designed to identify emotionally manipulative and scam-related messages.",
    technologies: ["AI", "Text Analysis", "Browser Extension", "Scam Detection", "Real-time Processing"],
    github: "https://github.com/saasilahamed/cognitive-firewall",
    demo: "",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23EF4444'/%3E%3Cpath d='M200 80 L160 120 L200 160 L240 120 Z' fill='%23FFF'/%3E%3Crect x='190' y='100' width='20' height='40' fill='%23EF4444'/%3E%3Ccircle cx='200' cy='190' r='30' fill='%23FFF'/%3E%3Ctext x='200' y='40' text-anchor='middle' fill='%23FFF' font-size='16' font-weight='bold'%3ECognitive Firewall%3C/text%3E%3C/svg%3E"
  }
];

export default function ProjectsModal({ isOpen, onClose }: ProjectsModalProps) {
  const navigate = useNavigate();

  const handleViewFullPage = () => {
    onClose();
    navigate("/projects");
  };
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white/10 backdrop-blur-md text-white rounded-xl p-6 max-w-4xl max-h-[90vh] overflow-y-auto custom-scrollbar modal-animate border border-white/20 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <i className="fas fa-laptop text-2xl text-blue-400"></i>
            <h2 className="text-2xl font-bold text-white">Projects</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors p-2"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        
        {!selectedProject ? (
          /* Projects Grid */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden cursor-pointer transition-all hover:scale-105 hover:shadow-lg"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-white">{project.title}</h3>
                  <p className="text-white/70 text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-muted-foreground/20 text-muted-foreground text-xs rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Project Detail View */
          <div>
            <button
              onClick={() => setSelectedProject(null)}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-4"
            >
              <i className="fas fa-arrow-left"></i>
              Back to Projects
            </button>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
                <p className="text-muted-foreground mb-6">{selectedProject.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <i className="fab fa-github"></i>
                    View Code
                  </a>
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
