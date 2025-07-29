import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import HeroSection from "./components/HeroSection";
import WeddingInfo from "./components/WeddingInfo";
import MapSection from "./components/MapSection";
import PhotoGalleryMasonry from "./components/PhotoGalleryMasonry";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);

  const sectionsRef = useRef([]);
  const totalSections = 4;

  // Handle loading completion
  const handleLoadingComplete = () => {
    setIsLoading(false);
    document.body.style.overflow = "auto"; // Enable natural scrolling
  };

  // Scroll to specific section
  const scrollToSection = useCallback(
    (sectionIndex) => {
      if (sectionIndex < 0 || sectionIndex >= totalSections) return;

      setCurrentSection(sectionIndex);
      sectionsRef.current[sectionIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    },
    [totalSections]
  );

  // Handle scroll to update current section
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Find which section is currently in view
    for (let i = 0; i < totalSections; i++) {
      const section = sectionsRef.current[i];
      if (section) {
        const rect = section.getBoundingClientRect();

        // Check if section is in viewport
        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
          setCurrentSection(i);
          break;
        }

        // Special handling for last section (section 4)
        if (
          i === totalSections - 1 &&
          scrollPosition + windowHeight >= document.body.scrollHeight - 100
        ) {
          setCurrentSection(i);
          break;
        }
      }
    }
  }, [totalSections]);

  // Add scroll event listener
  useEffect(() => {
    if (isLoading) return;

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading, handleScroll]);

  const navigationDots = Array.from({ length: totalSections }, (_, index) => (
    <button
      key={index}
      className={`nav-dot ${currentSection === index ? "active" : ""}`}
      onClick={() => scrollToSection(index)}
      aria-label={`Go to section ${index + 1}`}
    />
  ));

  return (
    <div className="App">
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <div className="sections-container">
            <div
              ref={(el) => (sectionsRef.current[0] = el)}
              className="section-wrapper"
            >
              <HeroSection />
            </div>

            <div
              ref={(el) => (sectionsRef.current[1] = el)}
              className="section-wrapper"
            >
              <WeddingInfo />
            </div>

            <div
              ref={(el) => (sectionsRef.current[2] = el)}
              className="section-wrapper"
            >
              <MapSection />
            </div>

            <div
              ref={(el) => (sectionsRef.current[3] = el)}
              className="section-wrapper"
            >
              <PhotoGalleryMasonry />
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="navigation-dots">{navigationDots}</div>

          {/* Scroll Hint */}
          {currentSection === 0 && (
            <motion.div
              className="scroll-hint"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 1 }}
            >
              <div className="scroll-text">Scroll to explore</div>
              <div className="scroll-arrow">↓</div>
            </motion.div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
