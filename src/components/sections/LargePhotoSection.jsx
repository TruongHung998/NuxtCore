import { motion } from "framer-motion";
import PropTypes from "prop-types";

const LargePhotoSection = ({ dearestPhoto }) => {
  return (
    <motion.div
      className="large-photo-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.3, delay: 0.2, ease: "easeOut" }}
    >
      <div className="dearest-labels">
        <span>YOU ARE</span>
        <span>MY DEAREST</span>
        <span>LOVE</span>
      </div>

      <img src={dearestPhoto} alt="Dearest Love" className="dearest-photo" />
    </motion.div>
  );
};

LargePhotoSection.propTypes = {
  dearestPhoto: PropTypes.string.isRequired,
};

export default LargePhotoSection;
