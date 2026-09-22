import { useState, useEffect } from "react";
import { useTheme } from "../lib/stores/useTheme";

interface BedroomSceneProps {
  showWelcome: boolean;
}

export default function BedroomScene({ showWelcome }: BedroomSceneProps) {
  const { isDarkMode } = useTheme();
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    console.log("BedroomScene mounted, showWelcome:", showWelcome);
    setVideoLoaded(true);
  }, [showWelcome]);

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative", overflow: "hidden", background: "#0a0a0a" }}>
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <video
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 1,
            transition: "opacity 1s"
          }}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/mohanraj-bg.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
