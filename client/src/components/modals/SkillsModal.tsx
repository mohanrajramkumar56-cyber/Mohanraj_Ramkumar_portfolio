interface SkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Skill {
  name: string;
  level: number;
  icon: string;
  category: string;
}

const skills: Skill[] = [
  // Technical Skills
  { name: "Python", level: 90, icon: "fab fa-python", category: "Backend" },
  { name: "JavaScript", level: 90, icon: "fab fa-js-square", category: "Frontend" },
  { name: "CSS", level: 90, icon: "fab fa-css3-alt", category: "Frontend" },
  { name: "React.js", level: 85, icon: "fab fa-react", category: "Frontend" },
  { name: "Node.js", level: 80, icon: "fab fa-node-js", category: "Backend" },
  { name: "Git", level: 85, icon: "fab fa-git-alt", category: "Tools" },
  { name: "Tailwind CSS", level: 85, icon: "fas fa-palette", category: "Frontend" },
  { name: "GitHub", level: 85, icon: "fab fa-github", category: "Tools" },
  { name: "HTML", level: 95, icon: "fab fa-html5", category: "Frontend" },
  { name: "MongoDB", level: 75, icon: "fas fa-leaf", category: "Backend" },
  { name: "MySQL", level: 80, icon: "fas fa-database", category: "Backend" },
  { name: "Canva", level: 75, icon: "fas fa-image", category: "Design" },
  { name: "Firebase", level: 75, icon: "fas fa-fire", category: "Backend" },
  { name: "N8N", level: 70, icon: "fas fa-network-wired", category: "Tools" },
  { name: "UI/UX Design", level: 80, icon: "fas fa-paint-brush", category: "Design" },
  { name: "Figma", level: 85, icon: "fab fa-figma", category: "Design" },
  { name: "Roboflow", level: 70, icon: "fas fa-robot", category: "AI/ML" },
  { name: "Google Colab", level: 80, icon: "fas fa-cloud", category: "AI/ML" },
];

const categories = ["Frontend", "Backend", "AI/ML", "Tools", "Design"];

export default function SkillsModal({ isOpen, onClose }: SkillsModalProps) {
  if (!isOpen) return null;

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  const getSkillColor = (level: number) => {
    if (level >= 90) return "bg-green-500";
    if (level >= 80) return "bg-blue-500";
    if (level >= 70) return "bg-yellow-500";
    return "bg-red-500";
  };

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
            <i className="fas fa-book text-2xl text-blue-400"></i>
            <h2 className="text-2xl font-bold text-white">Technical Skills</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors p-2"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        
        {/* Skills by Category */}
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <div key={category} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
                {category === "Frontend" && <i className="fas fa-desktop text-blue-400"></i>}
                {category === "Backend" && <i className="fas fa-server text-blue-400"></i>}
                {category === "Cloud" && <i className="fas fa-cloud text-blue-400"></i>}
                {category === "Tools" && <i className="fas fa-tools text-blue-400"></i>}
                {category}
              </h3>
              
              <div className="space-y-4">
                {getSkillsByCategory(category).map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <i className={`${skill.icon} text-blue-400`}></i>
                        <span className="font-medium text-white">{skill.name}</span>
                      </div>
                      <span className="text-sm text-white/70">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div
                        className="bg-blue-400 h-2 rounded-full transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Skill Legend */}
        <div className="mt-6 p-4 bg-muted rounded-lg">
          <h4 className="font-semibold mb-3">Soft Skills</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <span>Effective Communication</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Problem Solving</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Time Management</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Leadership</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Event Management</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
