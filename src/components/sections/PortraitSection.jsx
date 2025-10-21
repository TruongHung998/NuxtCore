import { motion } from "framer-motion";
import PropTypes from "prop-types";

const PortraitSection = ({ portraitLeft, portraitRight }) => {
  return (
    <motion.div
      className="portrait-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.3, delay: 0.2, ease: "easeOut" }}
    >
      <img src={portraitLeft} alt="Portrait 1" className="portrait-left" />
      <img src={portraitRight} alt="Portrait 2" className="portrait-right" />

      <p className="quote-center">
        I love three things in this world.，
        <div>Sun moon and you. Sun for morning moon for night,</div>
        <div>and you forever.</div>
      </p>

      <div className="perfect-box">
        <span className="decorative-icon">🌸</span>
        <div className="perfect-text">
          <p>YOU</p>
          <p>ARE PERFECT</p>
        </div>
      </div>

      <p className="perfect-poem">Thương một người, dành trọn một đời</p>
    </motion.div>
  );
};

PortraitSection.propTypes = {
  portraitLeft: PropTypes.string.isRequired,
  portraitRight: PropTypes.string.isRequired,
};

export default PortraitSection;
