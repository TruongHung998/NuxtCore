import { useState, useEffect } from "react";
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

function preloadImage(src) {
  return new Promise((resolve) => {
    const img = new window.Image();
    img.onload = resolve;
    img.onerror = resolve;
    img.src = src;
  });
}

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isContentReady, setIsContentReady] = useState(false);

  // Preload images và có thể preload dữ liệu khác ở đây
  useEffect(() => {
    if (showIntro) {
      (async () => {
        // Preload tất cả ảnh lớn và asset dùng ở các section chính
        await Promise.all([
          preloadImage(mainLogo),
          preloadImage(portraitLeft),
          preloadImage(heroImage),
          preloadImage(invitationImage),
          // add các ảnh khác nếu muốn
        ]);
        setIsContentReady(true);
      })();
    }
  }, [showIntro]);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  if (showIntro) {
    // Giai đoạn này: IntroAnimation đang chạy, nhưng useEffect phía trên sẽ preload các asset và các section sớm
    return <IntroAnimation onComplete={handleIntroComplete} />;
  }

  if (!isContentReady) {
    // Hiện loading nhỏ nếu content chưa preload xong (hiếm gặp)
    return (
      <div style={{ textAlign: "center", marginTop: 48 }}>
        Đang tải nội dung...
      </div>
    );
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
