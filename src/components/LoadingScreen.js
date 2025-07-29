import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import "./LoadingScreen.css";

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // Memoize image files array to prevent re-creation on every render
  const imageFiles = useMemo(
    () => [
      "HUG00025.webp",
      "HUG00052.webp",
      "HUG00163.webp",
      "HUG00192.webp",
      "HUG00221.webp",
      "HUG00246.webp",
      "HUG00263.webp",
      "HUG00293.webp",
      "HUG00324.webp",
      "HUG00353.webp",
      "HUG00374.webp",
      "HUG00410.webp",
      "HUG00532.webp",
      "HUG00637.webp",
      "HUG00805.webp",
      "HUG00818.webp",
      "HUG00930.webp",
      "HUG01017.webp",
      "HUG09101.webp",
      "HUG09122.webp",
      "HUG09133.webp",
      "HUG09183.webp",
      "HUG09192.webp",
      "HUG09271.webp",
      "HUG09300.webp",
      "HUG09350.webp",
      "HUG09395.webp",
      "HUG09401.webp",
      "HUG09441.webp",
      "HUG09461.webp",
      "HUG09482.webp",
      "HUG09557.webp",
      "HUG09606.webp",
      "HUG09695.webp",
      "HUG09738.webp",
      "HUG09767.webp",
      "HUG09799.webp",
      "HUG09905.webp",
      "HUG09943.webp",
      "HUG09970.webp",
      "HUG09986.webp",
      "HUG09999.webp",
    ],
    []
  );

  useEffect(() => {
    const startTime = Date.now();
    let loadedImages = 0;

    const preloadImages = () => {
      const promises = imageFiles.map((filename) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            loadedImages++;
            const newProgress = Math.round(
              (loadedImages / imageFiles.length) * 100
            );
            setProgress(newProgress);
            resolve();
          };
          img.onerror = () => {
            console.warn(`Failed to load image: ${filename}`);
            loadedImages++;
            const newProgress = Math.round(
              (loadedImages / imageFiles.length) * 100
            );
            setProgress(newProgress);
            resolve(); // Continue even if some images fail
          };
          img.src = `/hinhcuoi/${filename}`;
        });
      });

      Promise.all(promises).then(() => {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(2000 - elapsedTime, 0); // Minimum 2s display time

        setTimeout(() => {
          setIsComplete(true);
          setTimeout(() => {
            onLoadingComplete();
          }, 800); // Allow fade out animation
        }, remainingTime);
      });
    };

    preloadImages();
  }, [onLoadingComplete, imageFiles]);

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="loading-content">
        <motion.div
          className="couple-names"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1>Viet Hung</h1>
          <div className="heart">♥</div>
          <h1>Lan Huyen</h1>
        </motion.div>

        <motion.div
          className="wedding-date"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          30.11.2025
        </motion.div>

        <motion.div
          className="progress-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="progress-bar">
            <motion.div
              className="progress-fill"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="progress-text">{progress}%</div>
        </motion.div>

        <motion.div
          className="floating-hearts"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <span>♥</span>
          <span>♥</span>
          <span>♥</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
