import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./HeroSection.css";

const HeroSection = () => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const romanticLines = useMemo(
    () => [
      "Georgia, wrap me up in all your-",
      "I want you in my arms",
      "Oh, let me hold you",
      "I'll never let you go again like I did",
      "Oh, I used to say",
      "I would never fall in love again until I found her",
      "I said, I would never fall unless it's you I fall into",
      "I was lost within the darkness, but then I found her",
      "I found you"
    ],
    []
  );

  useEffect(() => {
    const animateText = () => {
      const currentLine = romanticLines[currentLineIndex];
      const words = currentLine.split(" ");

      // Animate through words in current line
      if (currentWordIndex < words.length) {
        const timer = setTimeout(() => {
          setCurrentWordIndex((prev) => prev + 1);
        }, 300); // 0.5s delay between words

        return () => clearTimeout(timer);
      } else {
        // Move to next line after 2s delay
        const lineTimer = setTimeout(() => {
          const nextLineIndex = (currentLineIndex + 1) % romanticLines.length;
          setCurrentLineIndex(nextLineIndex);
          setCurrentWordIndex(0);
        }, 1500); // 2s delay between lines

        return () => clearTimeout(lineTimer);
      }
    };

    const cleanup = animateText();
    return cleanup;
  }, [currentLineIndex, currentWordIndex, romanticLines]);

  const renderAnimatedLine = () => {
    const currentLine = romanticLines[currentLineIndex];
    const words = currentLine.split(" ");

    return (
      <motion.div
        className="lyrics-line"
        key={currentLineIndex}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6 }}
      >
        {words.map((word, index) => {
          const isHighlighted = index < currentWordIndex;
          const isCurrentWord = index === currentWordIndex - 1;

          return (
            <motion.span
              key={`${currentLineIndex}-${index}`}
              className={`lyrics-word ${isHighlighted ? "highlighted" : ""} ${
                isCurrentWord ? "current" : ""
              }`}
              initial={{ scale: 1 }}
              animate={{
                scale: isCurrentWord ? 1.2 : 1,
                color: isHighlighted
                  ? "var(--primary-color)"
                  : "rgba(255, 255, 255, 0.7)",
              }}
              transition={{ duration: 0.3 }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className="hero-section section">
      <div className="hero-background">
        <img
          src="/hinhcuoi/HUG00052.webp"
          alt="Wedding Hero"
          className="hero-image"
        />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <AnimatePresence mode="wait">{renderAnimatedLine()}</AnimatePresence>
      </div>
    </div>
  );
};

export default HeroSection;
