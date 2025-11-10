import { useEffect, useState } from "react";
import "./App.css";

// Import components
import IntroAnimation from "./components/IntroAnimation";

// Import sections
import {
  HeroSection,
  InvitationDetailsSection,
  InvitationHeaderSection,
  LogoCountdownSection,
  ImageShowcaseSection,
  MapSection,
  TimelineSection,
} from "./components/sections";

// Import images (WebP format for better performance)
// Logo

// Vertical images

// Horizontal images

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (prefersReducedMotion.matches) {
      setShowIntro(false);
      return;
    }

    const hasSeenIntro = window.sessionStorage.getItem("introSeen") === "true";

    if (hasSeenIntro) {
      setShowIntro(false);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (!showIntro) {
      window.sessionStorage.setItem("introSeen", "true");
    }
  }, [showIntro]);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <div className="app-container">
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      <div className="desktop-view">
        <div className="desktop-content">
          {/* Main Content - Absolute Positioned Layout matching HTML exactly */}
          <main className="wedding-content">
            <div className="page-container">
              {/* SECTION 1: Hero Section */}
              <HeroSection />

              {/* SECTION 2: Logo Countdown Section */}
              <LogoCountdownSection />

              {/* SECTION 3: Invitation Header */}
              <InvitationHeaderSection />

              {/* SECTION 10: Invitation Details */}
              <InvitationDetailsSection />
              {/* SECTION 12: Map Section */}
              <MapSection />
              {/* SECTION 11: Timeline Section */}
              <TimelineSection />

              {/* SECTION 12: 4-Image Showcase Section */}
              <ImageShowcaseSection />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
