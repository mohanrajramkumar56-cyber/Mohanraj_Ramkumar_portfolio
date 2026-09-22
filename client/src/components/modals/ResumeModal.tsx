interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

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
            <i className="fas fa-file-pdf text-2xl text-blue-400"></i>
            <h2 className="text-2xl font-bold text-white">Resume</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors p-2"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        
        {/* Resume Preview */}
        <div className="space-y-6">
          {/* Header Section */}
          <div className="text-center border-b border-border pb-6">
            <h3 className="text-2xl font-bold mb-2">AASIL AHAMED S</h3>
            <p className="text-lg text-primary mb-2">B.Sc. Artificial Intelligence and Machine Learning Student | Full-Stack Developer | Event Organizer</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span><i className="fas fa-envelope mr-1"></i> saasilahamed123@gmail.com</span>
              <span><i className="fas fa-phone mr-1"></i> +91 9843743705</span>
              <span><i className="fas fa-map-marker-alt mr-1"></i> Coimbatore, Tamil Nadu</span>
              <span><i className="fab fa-linkedin mr-1"></i> linkedin.com/in/s-aasil-ahamed</span>
            </div>
          </div>
          
          {/* Career Objective */}
          <div>
            <h4 className="text-lg font-bold mb-2 text-primary">Career Objective</h4>
            <p className="text-sm text-muted-foreground">
              A passionate B.Sc. Artificial Intelligence and Machine Learning student with a strong interest in full-stack development and a knack for organizing events and building connections. I aim to contribute to innovative tech teams where I can apply and grow my development skills, take initiative, and collaborate effectively—while also creating meaningful experiences through community engagement and leadership.
            </p>
          </div>
          
          {/* Technical Skills */}
          <div>
            <h4 className="text-lg font-bold mb-2 text-primary">Technical Skills</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <ul className="text-muted-foreground space-y-1">
                <li>Python</li>
                <li>JavaScript</li>
                <li>HTML, CSS</li>
                <li>React.js, Node.js</li>
                <li>MongoDB, MySQL</li>
                <li>Tailwind CSS</li>
                <li>Git, GitHub</li>
                <li>Figma, Canva</li>
                <li>UI/UX Design</li>
                <li>Firebase, N8N</li>
              </ul>
            </div>
          </div>
          
          {/* Education */}
          <div>
            <h4 className="text-lg font-bold mb-2 text-primary">Education</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>
                <span className="font-semibold">B.Sc. Artificial Intelligence and Machine Learning</span><br/>
                Rathinam College of Arts and Science | 2023 - 2026 | CGPA: 7.94
              </div>
              <div>
                <span className="font-semibold">HSC</span><br/>
                Nirmala Matha Convent Hr Sec School | 2022 | 74.6%
              </div>
              <div>
                <span className="font-semibold">SSLC</span><br/>
                Nirmala Matha Convent Hr Sec School | 2020 | 91.4%
              </div>
            </div>
          </div>
          
          {/* Internship */}
          <div>
            <h4 className="text-lg font-bold mb-2 text-primary">Internship</h4>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold">Web Scraping Intern</span> | Data Pattern | Coimbatore | 2023
              <ul className="list-disc list-inside ml-4">
                <li>Completed a 2-month internship focused on web scraping and data collection</li>
                <li>Developed Python scripts using libraries like BeautifulSoup and Requests to extract data from websites</li>
              </ul>
            </div>
          </div>
          
          {/* Projects */}
          <div>
            <h4 className="text-lg font-bold mb-2 text-primary">Projects</h4>
            <div className="text-sm text-muted-foreground space-y-2">
              <div>
                <span className="font-semibold">AI-Powered FIR Assistant</span><br/>
                An AI-based chatbot system that helps users file First Information Reports using natural language processing. Integrated voice-to-text and real-time response capabilities for ease of use.
              </div>
              <div>
                <span className="font-semibold">Anzoro – Professional Networking Platform</span><br/>
                An NFC-powered networking platform that lets users create digital profiles and order custom-designed NFC cards. Includes React-based frontend, dynamic dashboard, and profile builder workflow.
              </div>
              <div>
                <span className="font-semibold">Cognitive Firewall: AI-Based Scam & Manipulation Detection</span><br/>
                Cognitive Firewall is a browser-based, real-time text analysis tool designed to identify emotionally manipulative and scam-related messages.
              </div>
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h4 className="text-lg font-bold mb-2 text-primary">Certifications</h4>
            <ul className="text-sm text-muted-foreground list-disc list-inside ml-4">
              <li>Network Topologies & Technologies – Infosys Springboard</li>
              <li>Basics of Python – Infosys Springboard</li>
              <li>Soft Skills for IT – Great Learning Academy</li>
              <li>Introduction to Web Development – LeadPro Infotech</li>
            </ul>
          </div>
          
          {/* Achievements */}
          <div>
            <h4 className="text-lg font-bold mb-2 text-primary">Achievements</h4>
            <ul className="text-sm text-muted-foreground list-disc list-inside ml-4">
              <li>Finalist in UNESCO Ocean Literacy Program</li>
              <li>Lead Organizer of "Hack Beyond Limits!" – a National-Level 24-Hour Hackathon hosted at Rathinam College</li>
              <li>Conducted tech workshops on UI/UX and Figma basics for the student community</li>
              <li>Volunteered at the Mega Placement Opportunity organized by Tamil Nadu Government with Rathinam College</li>
            </ul>
          </div>
          
          {/* Soft Skills */}
          <div>
            <h4 className="text-lg font-bold mb-2 text-primary">Soft Skills</h4>
            <div className="text-sm text-muted-foreground">
              Effective Communication | Problem Solving | Time Management | Leadership | Event Management | Public Speaking | Team Collaboration
            </div>
          </div>
          
          {/* Hobbies */}
          <div>
            <h4 className="text-lg font-bold mb-2 text-primary">Hobbies</h4>
            <div className="text-sm text-muted-foreground">
              Exploring | UI Designing | Photography | Cooking
            </div>
          </div>
          
          {/* Languages */}
          <div>
            <h4 className="text-lg font-bold mb-2 text-primary">Languages</h4>
            <div className="text-sm text-muted-foreground">
              English/Tamil - Speak, Read, Write<br/>
              Malayalam - Speak
            </div>
          </div>
          
          {/* Download Button */}
          <div className="pt-6 border-t border-border">
            <a
              href="/attached_assets/resume aasil.pdf"
              download
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              <i className="fas fa-download"></i>
              Download Resume (PDF)
            </a>
            
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">
                Last updated: November 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
