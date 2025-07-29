import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./PhotoGalleryMasonry.css";

const PhotoGalleryMasonry = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState({});

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Gallery images array
  const galleryImages = [
    "HUG00025.webp",
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
  ];

  const handleImageClick = (imageSrc, index) => {
    setSelectedImage(imageSrc);
    setImageIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  }, []);

  const goToPrevious = useCallback(() => {
    setImageIndex((prevIndex) => {
      const newIndex = prevIndex > 0 ? prevIndex - 1 : galleryImages.length - 1;
      setSelectedImage(galleryImages[newIndex]);
      return newIndex;
    });
  }, [galleryImages]);

  const goToNext = useCallback(() => {
    setImageIndex((prevIndex) => {
      const newIndex = prevIndex < galleryImages.length - 1 ? prevIndex + 1 : 0;
      setSelectedImage(galleryImages[newIndex]);
      return newIndex;
    });
  }, [galleryImages]);

  const handleImageLoad = (imageName) => {
    setImagesLoaded((prev) => ({ ...prev, [imageName]: true }));
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (selectedImage) {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") goToPrevious();
        if (e.key === "ArrowRight") goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedImage, goToNext, goToPrevious, closeLightbox]);

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="photo-gallery-masonry-section section" ref={ref}>
      <div className="gallery-container">
        <motion.h2
          className="gallery-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Our Beautiful Moments
        </motion.h2>

        <motion.div
          className="masonry-container"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image}
              className="masonry-item"
              variants={itemVariants}
              onClick={() => handleImageClick(image, index)}
            >
              <div className="image-container">
                {!imagesLoaded[image] && (
                  <div className="image-placeholder">
                    <div className="loading-spinner"></div>
                  </div>
                )}
                <img
                  src={`/hinhcuoi/${image}`}
                  alt={`Wedding moment ${index + 1}`}
                  className={`masonry-image ${
                    imagesLoaded[image] ? "loaded" : ""
                  }`}
                  onLoad={() => handleImageLoad(image)}
                  loading="lazy"
                  onError={(e) => {
                    console.warn(`Failed to load image: ${image}`);
                    handleImageLoad(image);
                  }}
                />
                <div className="image-overlay">
                  <div className="overlay-icon">👁</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={closeLightbox}>
                ×
              </button>

              <button
                className="lightbox-nav lightbox-prev"
                onClick={goToPrevious}
              >
                ‹
              </button>

              <img
                src={`/hinhcuoi/${selectedImage}`}
                alt="Wedding moment"
                className="lightbox-image"
              />

              <button className="lightbox-nav lightbox-next" onClick={goToNext}>
                ›
              </button>

              <div className="lightbox-counter">
                {imageIndex + 1} / {galleryImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotoGalleryMasonry;
