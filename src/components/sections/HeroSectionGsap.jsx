import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";

/**
 * Hero Section with GSAP animations
 * This is an alternative version using GSAP instead of Framer Motion
 */
const HeroSectionGsap = ({ heroImage }) => {
  const sectionRef = useRef(null);
  const coupleNamesRef = useRef(null);
  const coupleLabelsRef = useRef(null);
  const weddingDateRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for sequential animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Animate section fade in
      tl.from(sectionRef.current, {
        opacity: 0,
        duration: 1.3,
      });

      // Animate couple names
      tl.from(
        coupleNamesRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 1.3,
        },
        "-=0.8" // Start 0.8s before previous animation ends
      );

      // Animate couple labels
      tl.from(
        coupleLabelsRef.current,
        {
          opacity: 0,
          x: -30,
          duration: 1.3,
        },
        "-=1" // Overlap with previous animation
      );

      // Animate wedding date
      tl.from(
        weddingDateRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 1.3,
        },
        "-=1" // Overlap with previous animation
      );
    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div className="hero-section" ref={sectionRef}>
      <img src={heroImage} alt="Wedding Cover" className="cover-image" />

      {/* Couple Names */}
      <div className="couple-names" ref={coupleNamesRef}>
        <span className="groom-name">Viet Hung</span>
        <span className="DearScript">&</span>
        <span className="bride-name">Lan Huyen</span>
      </div>

      {/* Labels GROOM/BRIDE */}
      <div className="couple-labels" ref={coupleLabelsRef}>
        <span className="groom-label">GROOM</span>
        <span className="bride-label">BRIDE</span>
      </div>

      {/* Wedding Date */}
      <div className="wedding-date" ref={weddingDateRef}>
        29.11.2025
      </div>
    </div>
  );
};

HeroSectionGsap.propTypes = {
  heroImage: PropTypes.string.isRequired,
};

export default HeroSectionGsap;
