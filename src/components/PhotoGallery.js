import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Masonry from "react-masonry-css";
import "./PhotoGallery.css";

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState({});

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Memoize gallery images array
  const galleryImages = useMemo(
    () => [
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
    ],
    []
  );

  // Updated breakpoint columns for better masonry layout
  const breakpointColumnsObj = {
    default: 4, // Desktop: 4 columns
    1200: 3, // Large tablets: 3 columns
    768: 2, // Tablets: 2 columns
    480: 1, // Mobile: 1 column
  };

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

  return (
    <div className="photo-gallery-section section" ref={ref}>
      <div className="gallery-container">
        <h2 className="gallery-title">Our Beautiful Moments</h2>

        <div className="gallery-content">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-grid-column"
          >
            {galleryImages.map((image, index) => (
              <div
                key={image}
                className="gallery-item"
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
                    className={`gallery-image ${
                      imagesLoaded[image] ? "loaded" : ""
                    }`}
                    onLoad={() => handleImageLoad(image)}
                    loading="lazy"
                  />
                  <div className="image-overlay">
                    <div className="overlay-icon">👁</div>
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
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

export default PhotoGallery;
