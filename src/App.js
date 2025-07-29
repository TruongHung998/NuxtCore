import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import HeroSection from "./components/HeroSection";
import WeddingInfo from "./components/WeddingInfo";
import PhotoGallery from "./components/PhotoGallery";
import MapSection from "./components/MapSection";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const sectionsRef = useRef([]);
  const totalSections = 4;

  // Handle loading completion
  const handleLoadingComplete = () => {
    setIsLoading(false);
    document.body.style.overflow = "hidden"; // Enable step scrolling
  };

  // Scroll to specific section
  const scrollToSection = useCallback(
    (sectionIndex) => {
      if (isScrolling || sectionIndex < 0 || sectionIndex >= totalSections)
        return;

      setIsScrolling(true);
      setCurrentSection(sectionIndex);

      sectionsRef.current[sectionIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Reset scrolling flag after animation
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    },
    [isScrolling, totalSections]
  );

  // Handle wheel scroll
  const handleWheel = useCallback(
    (e) => {
      // Allow natural scrolling in Photo Gallery section (section 2)
      if (currentSection === 2) {
        return; // Don't prevent default, allow natural scroll
      }

      if (isScrolling) return;

      e.preventDefault();

      if (e.deltaY > 0) {
        // Scroll down
        setCurrentSection((prevSection) => {
          const nextSection = Math.min(prevSection + 1, totalSections - 1);
          scrollToSection(nextSection);
          return nextSection;
        });
      } else {
        // Scroll up
        setCurrentSection((prevSection) => {
          const prevSec = Math.max(prevSection - 1, 0);
          scrollToSection(prevSec);
          return prevSec;
        });
      }
    },
    [isScrolling, scrollToSection, totalSections, currentSection]
  );

  // Handle keyboard navigation
  const handleKeyPress = useCallback(
    (e) => {
      // Allow natural scrolling in Photo Gallery section
      if (currentSection === 2) {
        return;
      }

      if (isScrolling) return;

      switch (e.key) {
        case "ArrowDown":
        case " ":
          e.preventDefault();
          setCurrentSection((prevSection) => {
            const nextSection = Math.min(prevSection + 1, totalSections - 1);
            scrollToSection(nextSection);
            return nextSection;
          });
          break;
        case "ArrowUp":
          e.preventDefault();
          setCurrentSection((prevSection) => {
            const prevSec = Math.max(prevSection - 1, 0);
            scrollToSection(prevSec);
            return prevSec;
          });
          break;
        case "Home":
          e.preventDefault();
          scrollToSection(0);
          setCurrentSection(0);
          break;
        case "End":
          e.preventDefault();
          scrollToSection(totalSections - 1);
          setCurrentSection(totalSections - 1);
          break;
        default:
          break;
      }
    },
    [isScrolling, scrollToSection, totalSections, currentSection]
  );

  // Handle touch events for mobile
  const handleTouchStart = useCallback((e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  }, []);

  const handleTouchMove = useCallback((e) => {
    setTouchEnd(e.targetTouches[0].clientY);
  }, []);

  const handleTouchEnd = useCallback(() => {
    // Allow natural scrolling in Photo Gallery section
    if (currentSection === 2) {
      return;
    }

    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > 50;
    const isDownSwipe = distance < -50;

    if (isUpSwipe) {
      setCurrentSection((prevSection) => {
        const nextSection = Math.min(prevSection + 1, totalSections - 1);
        scrollToSection(nextSection);
        return nextSection;
      });
    }
    if (isDownSwipe) {
      setCurrentSection((prevSection) => {
        const prevSec = Math.max(prevSection - 1, 0);
        scrollToSection(prevSec);
        return prevSec;
      });
    }
  }, [touchStart, touchEnd, scrollToSection, totalSections, currentSection]);

  // Add event listeners
  useEffect(() => {
    if (isLoading) return;

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [
    isLoading,
    handleWheel,
    handleKeyPress,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  ]);

  const navigationDots = Array.from({ length: totalSections }, (_, index) => (
    <button
      key={index}
      className={`nav-dot ${currentSection === index ? "active" : ""}`}
      onClick={() => scrollToSection(index)}
      disabled={isScrolling}
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
              className="section-wrapper photo-gallery-section-wrapper"
            >
              <PhotoGallery />
            </div>

            <div
              ref={(el) => (sectionsRef.current[3] = el)}
              className="section-wrapper"
            >
              <MapSection />
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
