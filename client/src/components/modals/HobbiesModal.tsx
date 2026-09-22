interface HobbiesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const hobbies = [
  {
    title: "Exploring",
    icon: "fas fa-compass",
    description: "Love discovering new places, cultures, and experiences. Always eager to learn about different perspectives and environments.",
    images: ["travel", "adventure", "discovery"],
    level: "Passionate"
  },
  {
    title: "UI Designing",
    icon: "fas fa-paint-brush",
    description: "Creating intuitive and visually appealing user interfaces. Passionate about user experience and modern design principles.",
    images: ["wireframes", "prototypes", "mockups"],
    level: "Advanced"
  },
  {
    title: "Photography",
    icon: "fas fa-camera",
    description: "Capturing moments, landscapes, and creative compositions. Love experimenting with different styles and techniques.",
    images: ["nature", "portraits", "events"],
    level: "Intermediate"
  },
  {
    title: "Cooking",
    icon: "fas fa-utensils",
    description: "Experimenting with different cuisines and creating delicious meals. Enjoy the creative process and sharing food with others.",
    images: ["recipes", "ingredients", "plating"],
    level: "Intermediate"
  }
];

export default function HobbiesModal({ isOpen, onClose }: HobbiesModalProps) {
  if (!isOpen) return null;

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "text-green-500 bg-green-500/20";
      case "Advanced":
        return "text-blue-500 bg-blue-500/20";
      case "Intermediate":
        return "text-yellow-500 bg-yellow-500/20";
      case "Beginner":
        return "text-orange-500 bg-orange-500/20";
      default:
        return "text-gray-500 bg-gray-500/20";
    }
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
            <i className="fas fa-heart text-2xl text-blue-400"></i>
            <h2 className="text-2xl font-bold text-white">Hobbies & Interests</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors p-2"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        
        {/* Hobbies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="bg-muted rounded-lg p-4 hover:bg-muted/80 transition-all hover:scale-105"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <i className={`${hobby.icon} text-xl text-primary`}></i>
                  </div>
                  <h3 className="font-semibold">{hobby.title}</h3>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(hobby.level)}`}>
                  {hobby.level}
                </span>
              </div>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4">{hobby.description}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {hobby.images.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full capitalize"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Philosophy Section */}
        <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
          <div className="text-center">
            <i className="fas fa-quote-left text-2xl text-primary mb-3"></i>
            <blockquote className="text-lg font-medium mb-3">
              "Life is about balance. Code during the day, create and explore after hours."
            </blockquote>
            <p className="text-muted-foreground">
              I believe that diverse interests make me a better developer. Each hobby teaches me 
              something new about problem-solving, creativity, and perseverance that I apply to my work.
            </p>
          </div>
        </div>
        
        {/* Fun Stats */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-muted rounded-lg">
            <div className="text-2xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Board Games</div>
          </div>
          <div className="text-center p-3 bg-muted rounded-lg">
            <div className="text-2xl font-bold text-primary">8</div>
            <div className="text-sm text-muted-foreground">Years Playing Guitar</div>
          </div>
          <div className="text-center p-3 bg-muted rounded-lg">
            <div className="text-2xl font-bold text-primary">23</div>
            <div className="text-sm text-muted-foreground">Plants Growing</div>
          </div>
          <div className="text-center p-3 bg-muted rounded-lg">
            <div className="text-2xl font-bold text-primary">15</div>
            <div className="text-sm text-muted-foreground">Climbing Routes</div>
          </div>
        </div>
      </div>
    </div>
  );
}
