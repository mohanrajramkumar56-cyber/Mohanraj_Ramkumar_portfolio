interface FunFactsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const funFacts = [
  {
    icon: "fas fa-trophy",
    title: "UNESCO Finalist",
    description: "Proud to be a finalist in the UNESCO Ocean Literacy Program, contributing to global environmental awareness!"
  },
  {
    icon: "fas fa-users",
    title: "Hackathon Organizer",
    description: "Lead organizer of 'Hack Beyond Limits!' - a National-Level 24-Hour Hackathon that brought together top tech talent across India."
  },
  {
    icon: "fas fa-chalkboard-teacher",
    title: "Tech Workshop Conductor",
    description: "I love sharing knowledge! I've conducted workshops on UI/UX design and Figma basics for the student community."
  },
  {
    icon: "fas fa-language",
    title: "Multilingual",
    description: "I speak three languages: English, Tamil (native), and Malayalam. Each language opens up new cultural perspectives!"
  },
  {
    icon: "fas fa-brain",
    title: "AI Enthusiast",
    description: "Currently pursuing B.Sc. in AI & ML with a CGPA of 7.94. Fascinated by the potential of artificial intelligence to solve real-world problems."
  },
  {
    icon: "fas fa-handshake",
    title: "Community Volunteer",
    description: "Volunteered at the Mega Placement Opportunity organized by Tamil Nadu Government, helping connect students with career opportunities."
  },
  {
    icon: "fas fa-camera",
    title: "Creative Explorer",
    description: "Photography and UI design are my creative outlets. I love capturing moments and designing intuitive user experiences."
  },
  {
    icon: "fas fa-utensils",
    title: "Cooking Experimenter",
    description: "Love experimenting with different cuisines and creating delicious meals. Cooking is my stress-relief activity!"
  }
];

export default function FunFactsModal({ isOpen, onClose }: FunFactsModalProps) {
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
            <i className="fas fa-star text-2xl text-blue-400"></i>
            <h2 className="text-2xl font-bold text-white">Fun Facts About Me</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors p-2"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        
        {/* Fun Facts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {funFacts.map((fact, index) => (
            <div
              key={index}
              className="bg-muted rounded-lg p-4 hover:bg-muted/80 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <i className={`${fact.icon} text-xl text-primary`}></i>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{fact.title}</h3>
                  <p className="text-sm text-muted-foreground">{fact.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Easter Egg Section */}
        <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
          <div className="text-center">
            <i className="fas fa-star text-3xl text-primary mb-3"></i>
            <h3 className="text-xl font-bold mb-2">Secret Achievement Unlocked!</h3>
            <p className="text-muted-foreground mb-4">
              🎉 You found the cat! You're clearly someone who pays attention to details. 
              I like that in a person (and in a potential collaborator)!
            </p>
            <div className="flex justify-center gap-4 text-sm">
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full">
                <i className="fas fa-trophy mr-1"></i>
                Explorer
              </span>
              <span className="px-3 py-1 bg-accent/20 text-accent rounded-full">
                <i className="fas fa-eye mr-1"></i>
                Detail-Oriented
              </span>
              <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full">
                <i className="fas fa-paw mr-1"></i>
                Cat Friend
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
