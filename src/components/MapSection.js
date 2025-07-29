import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./MapSection.css";

const MapSection = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const venueAddress = "455 Nguyen Van Tao, Nha Be, Ho Chi Minh City";
  const encodedAddress = encodeURIComponent(venueAddress);

  // Google Maps Embed URL
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dOMD3ksH8hN2Y8&q=${encodedAddress}&zoom=15&maptype=roadmap`;

  // Fallback to search URL if embed doesn't work
  const directionsUrl = `https://www.google.com/maps/search/${encodedAddress}`;

  const handleMapLoad = () => {
    setMapLoaded(true);
  };

  const handleMapError = () => {
    setMapError(true);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="map-section section" ref={ref}>
      <motion.div
        className="map-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="map-content" variants={itemVariants}>
          <div className="venue-info-card">
            <motion.h2 className="map-title" variants={itemVariants}>
              Find Us Here
            </motion.h2>

            <motion.div className="venue-details" variants={itemVariants}>
              <div className="venue-name">
                <h3>Wedding Venue</h3>
              </div>

              <div className="venue-address-detail">
                <div className="address-icon">📍</div>
                <div className="address-text">
                  <p>455 Nguyen Van Tao</p>
                  <p>Nha Be, Ho Chi Minh City</p>
                </div>
              </div>

              <motion.a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="directions-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Directions
              </motion.a>
            </motion.div>
          </div>

          <motion.div className="map-wrapper" variants={itemVariants}>
            {!mapError ? (
              <>
                {!mapLoaded && (
                  <div className="map-loading">
                    <div className="map-spinner"></div>
                    <p>Loading map...</p>
                  </div>
                )}
                <iframe
                  src={mapUrl}
                  className={`venue-map ${mapLoaded ? "loaded" : ""}`}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Wedding Venue Location"
                  onLoad={handleMapLoad}
                  onError={handleMapError}
                ></iframe>
              </>
            ) : (
              <div className="map-fallback">
                <div className="fallback-content">
                  <div className="map-icon">🗺️</div>
                  <h3>Wedding Venue Location</h3>
                  <p className="fallback-address">{venueAddress}</p>
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fallback-button"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MapSection;
