import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeroSection = ({ heroImage }) => {
  const groomNameRef = useRef(null);
  const ampersandRef = useRef(null);
  const brideNameRef = useRef(null);

  useEffect(() => {
    // GSAP Timeline for couple names animation
    const tl = gsap.timeline({ delay: 0.3 });

    // Groom name animation - fade in from bottom with scale
    tl.fromTo(
      groomNameRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.8,
        rotationX: -90,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0,
        duration: 1.2,
        ease: "power3.out",
      }
    );

    // Ampersand animation - rotate and scale with elastic effect
    tl.fromTo(
      ampersandRef.current,
      {
        opacity: 0,
        scale: 0,
        rotation: -180,
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
      },
      "-=0.4"
    );

    // Bride name animation - fade in from bottom with scale
    tl.fromTo(
      brideNameRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.8,
        rotationX: -90,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0,
        duration: 1.2,
        ease: "power3.out",
      },
      "-=0.6"
    );

    // Add subtle floating animation after initial animation
    tl.to([groomNameRef.current, ampersandRef.current, brideNameRef.current], {
      y: -5,
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <motion.div
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.3, ease: "easeOut" }}
    >
      <img src={heroImage} alt="Wedding Cover" className="cover-image" />

      {/* Dark overlay for better text visibility */}
      <div className="hero-overlay"></div>
      {/* Couple Names - position: top: 665px */}
      <div className="couple-names">
        <span ref={groomNameRef} className="groom-name">
          Viet Hung
        </span>
        <span ref={ampersandRef} className="DearScript">
          &
        </span>
        <span ref={brideNameRef} className="bride-name">
          Lan Huyen
        </span>
      </div>

      {/* Labels GROOM/BRIDE - position: top: 709px */}
      <motion.div
        className="couple-labels"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.3, delay: 0, ease: "easeOut" }}
      >
        <span className="groom-label">GROOM</span>
        <span className="bride-label">BRIDE</span>
      </motion.div>

      {/* Wedding Date - position: top: 797px */}
      <motion.div
        className="wedding-date"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, delay: 0, ease: "easeOut" }}
      >
        29.11.2025
      </motion.div>
    </motion.div>
  );
};

HeroSection.propTypes = {
  heroImage: PropTypes.string.isRequired,
};

export default HeroSection;
