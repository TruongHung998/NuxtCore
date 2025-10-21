import { motion } from "framer-motion";
import PropTypes from "prop-types";

const HeroSection = ({ heroImage }) => {
  return (
    <motion.div
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.3, ease: "easeOut" }}
    >
      <img src={heroImage} alt="Wedding Cover" className="cover-image" />
      {/* Couple Names - position: top: 665px */}
      <motion.div
        className="couple-names"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, delay: 0, ease: "easeOut" }}
      >
        <span className="groom-name">Viet Hung</span>
        <span className="bride-name">Lan Huyen</span>
      </motion.div>

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
        14.12.2025
      </motion.div>
    </motion.div>
  );
};

HeroSection.propTypes = {
  heroImage: PropTypes.string.isRequired,
};

export default HeroSection;
