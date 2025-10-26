import { useEffect, useState } from "react";
import "./App.css";

// Import components
import IntroAnimation from "./components/IntroAnimation";

// Import sections
import {
  HeroSection,
  SecondSection,
  LogoCountdownSection,
  InvitationHeaderSection,
  LoveStorySection,
  OurStorySection,
  LargePhotoSection,
  LoveFreedomSection,
  PortraitSection,
  CalendarSection,
  InvitationDetailsSection,
  MapSection,
  GallerySection,
  FinalSection,
  TimelineSection,
} from "./components/sections";

// Import images
// Logo
import mainLogo from "./assets/webassests/mainlogo.png";

// Vertical images
import heroImage from "./assets/webassests/vertical/HUG09300.jpg";
import invitationImage from "./assets/webassests/vertical/HUG09122.jpg";
import portraitLeft from "./assets/webassests/vertical/HUG09133.jpg";
import portraitRight from "./assets/webassests/vertical/HUG09183.jpg";

// Horizontal images
import secondImage from "./assets/webassests/horizontal/HUG00052.jpg";
import storyImageTall from "./assets/webassests/vertical/HUG09271.jpg";
import storyImageWide from "./assets/webassests/horizontal/HUG09695.jpg";
import dearestPhoto from "./assets/webassests/vertical/HUG09300.jpg";
import galleryLeft from "./assets/webassests/vertical/HUG09350.jpg";
import galleryRight from "./assets/webassests/vertical/HUG09482.jpg";
import galleryLarge from "./assets/webassests/horizontal/HUG09986.jpg";
import finalCover from "./assets/webassests/vertical/HUG09738.jpg";
import finalPortrait from "./assets/webassests/vertical/HUG09943.jpg";

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
                horizontalImage={secondImage}
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
