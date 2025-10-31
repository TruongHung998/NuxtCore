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
  const [isContentReady, setIsContentReady] = useState(false);

  // Preload images và có thể preload dữ liệu khác ở đây
  useEffect(() => {
    if (showIntro) {
      (async () => {
        // Preload tất cả ảnh lớn và asset dùng ở các section chính
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
