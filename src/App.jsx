import { useState } from "react";
import "./App.css";

// Import components
import IntroAnimation from "./components/IntroAnimation";

// Import sections
import {
  HeroSection,
  InvitationDetailsSection,
  InvitationHeaderSection,
  LogoCountdownSection,
  MapSection,
  TimelineSection,
} from "./components/sections";

// Import images (WebP format for better performance)
// Logo
import mainLogo from "./assets/webassests/mainlogo.webp";

// Vertical images
import portraitLeft from "./assets/webassests/mainvertical.webp";
import heroImage from "./assets/webassests/vertical/HUG00324.webp";
import invitationImage from "./assets/webassests/vertical/HUG09122.webp";

// Horizontal images

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  if (showIntro) {
    return <IntroAnimation onComplete={handleIntroComplete} />;
  }

  return (
    <div className="app-container">
      <div className="desktop-view">
        <div className="desktop-content">
          {/* Main Content - Absolute Positioned Layout matching HTML exactly */}
          <main className="wedding-content">
            <div className="page-container">
              {/* SECTION 1: Hero Section */}
              <HeroSection heroImage={heroImage} />

              {/* SECTION 2: Logo Countdown Section */}
              <LogoCountdownSection
                logoImage={mainLogo}
                verticalImage={portraitLeft}
              />

              {/* SECTION 3: Invitation Header */}
              <InvitationHeaderSection invitationImage={invitationImage} />

              {/* SECTION 10: Invitation Details */}
              <InvitationDetailsSection />
              {/* SECTION 12: Map Section */}
              <MapSection />
              {/* SECTION 11: Timeline Section */}
              <TimelineSection />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
