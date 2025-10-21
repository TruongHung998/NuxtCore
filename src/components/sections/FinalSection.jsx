import { motion } from "framer-motion";
import PropTypes from "prop-types";

const FinalSection = ({ finalCover, finalPortrait }) => {
  return (
    <motion.div
      className="final-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.3, delay: 0.2, ease: "easeOut" }}
    >
      <img src={finalCover} alt="Final Cover" className="final-cover" />

      <div className="final-labels">
        <span>LOVE YOU</span>
        <span>FOREVER</span>
        <span>AND EVER</span>
      </div>

      <img
        src={finalPortrait}
        alt="Final Portrait"
        className="final-portrait"
      />

      <h2 className="sunshine-title">
        You are my&nbsp;
        <div>Sunshine</div>
      </h2>

      <h1 className="thankyou-title">Thankyou</h1>
    </motion.div>
  );
};

FinalSection.propTypes = {
  finalCover: PropTypes.string.isRequired,
  finalPortrait: PropTypes.string.isRequired,
};

export default FinalSection;
