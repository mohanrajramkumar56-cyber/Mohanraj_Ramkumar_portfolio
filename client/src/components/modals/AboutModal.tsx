import { useNavigate } from "react-router-dom";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleViewFullPage = () => {
    onClose();
    navigate("/about");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white/10 backdrop-blur-md text-white rounded-xl p-6 max-w-2xl max-h-[90vh] overflow-y-auto custom-scrollbar modal-animate border border-white/20 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <i className="fas fa-user text-2xl text-blue-400"></i>
            <h2 className="text-2xl font-bold text-white">About Me</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors p-2"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        
        {/* Content */}
        <div className="space-y-6">
          {/* Profile Section */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-blue-400/20 rounded-full flex items-center justify-center">
              <i className="fas fa-user text-3xl text-blue-400"></i>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">AASIL AHAMED S</h3>
              <p className="text-white/70">AI & ML Enthusiast | Full-Stack Developer | Event Organizer</p>
            </div>
          </div>
          
          {/* Bio */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-white">Career Objective</h4>
            <div className="space-y-4 text-white/80">
              <p>
                An passionate AI&ML enthusiast with a strong interest in full-stack development and a knack for organizing events and building connections. Aiming to contribute to innovative tech teams where I can apply and grow my skills, take initiative, collaborate effectively and create meaningful experiences through community engagement and leadership.
              </p>
            </div>
          </div>
          
          {/* Quick Facts */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Facts</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <i className="fas fa-map-marker-alt text-primary"></i>
                <span>Coimbatore, Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-graduation-cap text-primary"></i>
                <span>B.Sc. Artificial Intelligence and Machine Learning (2023-2026) | Rathinam College of Arts and Science | CGPA: 7.94</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-briefcase text-primary"></i>
                <span>Intern: Data Pattern (Web Scraping & Data Collection, 2023)</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-heart text-primary"></i>
                <span>Exploring | UI Designing | Photography | Cooking</span>
              </div>
            </div>
          </div>
          
          {/* Values */}
          <div>
            <h4 className="text-lg font-semibold mb-3">What I Value</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <i className="fas fa-lightbulb text-2xl text-primary mb-2"></i>
                <h5 className="font-semibold mb-1">Innovation</h5>
                <p className="text-sm text-muted-foreground">Always exploring new technologies and approaches</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <i className="fas fa-users text-2xl text-primary mb-2"></i>
                <h5 className="font-semibold mb-1">Collaboration</h5>
                <p className="text-sm text-muted-foreground">Believing in the power of teamwork</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <i className="fas fa-rocket text-2xl text-primary mb-2"></i>
                <h5 className="font-semibold mb-1">Excellence</h5>
                <p className="text-sm text-muted-foreground">Committed to delivering quality solutions</p>
              </div>
            </div>
          </div>
          
          {/* Achievements */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Key Achievements</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <i className="fas fa-trophy text-primary mt-1"></i>
                <span className="text-sm">Finalist in UNESCO Ocean Literacy Program</span>
              </div>
              <div className="flex items-start gap-3">
                <i className="fas fa-users text-primary mt-1"></i>
                <span className="text-sm">Lead Organizer of "Hack Beyond Limits!" – National-Level 24-Hour Hackathon hosted by Rathinam College, uniting top tech talent across India.</span>
              </div>
              <div className="flex items-start gap-3">
                <i className="fas fa-chalkboard-teacher text-primary mt-1"></i>
                <span className="text-sm">Conducted tech workshops on UI/UX and Figma basics for the student community [Tech Hub].</span>
              </div>
              <div className="flex items-start gap-3">
                <i className="fas fa-handshake text-primary mt-1"></i>
                <span className="text-sm">Student co-ordinator for Mega Placement drive organized by Tamil Nadu Government at Rathinam College of Arts & Science.</span>
              </div>
            </div>
          </div>
        </div>

        {/* View Full Page Button */}
        <div className="mt-6 pt-6 border-t border-white/20">
          <button
            onClick={handleViewFullPage}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all hover:scale-105 shadow-lg"
          >
            <i className="fas fa-arrow-right"></i>
            <span>View Full About Page</span>
          </button>
        </div>
      </div>
    </div>
  );
}