import { motion } from "framer-motion";
import PropTypes from "prop-types";

const SecondSection = ({ secondImage }) => {
  return (
    <motion.div
      className="second-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.3, delay: 0.2, ease: "easeOut" }}
    >
      <img src={secondImage} alt="Wedding Photo" className="section-image" />
    </motion.div>
  );
};

SecondSection.propTypes = {
  secondImage: PropTypes.string.isRequired,
};

export default SecondSection;
