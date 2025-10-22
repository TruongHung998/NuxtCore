import { useEffect, useState } from "react";
import "./App.css";

// Import sections
import {
  HeroSection,
  SecondSection,
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
} from "./components/sections";

// Import images
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
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

              {/* SECTION 3: Invitation Header */}
              <InvitationHeaderSection invitationImage={invitationImage} />

              {/* SECTION 4: Love Story Section */}
              <LoveStorySection
                storyImageTall={storyImageTall}
                storyImageWide={storyImageWide}
              />

              {/* SECTION 5: OUR LOVE STORY Title */}
              <OurStorySection />

              {/* SECTION 6: Large Photo Section */}
              <LargePhotoSection dearestPhoto={dearestPhoto} />

              {/* SECTION 7: Love and Freedom Section */}
              <LoveFreedomSection />

              {/* SECTION 8: Portrait Photos */}
              <PortraitSection
                portraitLeft={portraitLeft}
                portraitRight={portraitRight}
              />

              {/* SECTION 9: Calendar & Date Section */}
              <CalendarSection />

              {/* SECTION 10: Invitation Details */}
              <InvitationDetailsSection />

              {/* SECTION 11: Map Section */}
              <MapSection />

              {/* SECTION 12: Gallery Section */}
              <GallerySection
                galleryLeft={galleryLeft}
                galleryRight={galleryRight}
                galleryLarge={galleryLarge}
              />

              {/* SECTION 13: Final Photo & Thank You */}
              <FinalSection
                finalCover={finalCover}
                finalPortrait={finalPortrait}
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
