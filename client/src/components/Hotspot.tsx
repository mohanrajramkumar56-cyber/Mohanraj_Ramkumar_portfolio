import { useState } from "react";

interface HotspotProps {
  position: { left: string; top: string };
  size: "small" | "medium" | "large";
  icon: string;
  label: string;
  description: string;
  onClick: () => void;
}

export default function Hotspot({ position, size, icon, label, description, onClick }: HotspotProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "w-8 h-8 text-xs";
      case "medium":
        return "w-10 h-10 text-sm";
      case "large":
        return "w-12 h-12 text-base";
      default:
        return "w-10 h-10 text-sm";
    }
  };

  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20 animate-hotspot-fade-in"
      style={{ left: position.left, top: position.top }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        className={`
          ${getSizeClasses()}
          bg-white/10 hover:bg-white/20
          text-white rounded-full
          flex items-center justify-center
          cursor-pointer transition-all duration-300
          hover:scale-110 hover:shadow-lg hover:shadow-white/30
          hotspot-pulse
          backdrop-blur-sm border-2 border-white/15 hover:border-white/30
        `}
        onClick={onClick}
        aria-label={label}
      >
        <i className={icon}></i>
      </button>
      
      {isHovered && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-30">
          <div className="bg-black/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap modal-animate">
            <div className="font-semibold">{label}</div>
            <div className="text-xs opacity-80">{description}</div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
          </div>
        </div>
      )}
    </div>
  );
}
