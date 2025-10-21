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

      <motion.p
        className="section-title-top"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3, delay: 0, ease: "easeOut" }}
      >
        Right love | Right reason | Right for you
      </motion.p>

      <motion.p
        className="section-quote"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3, delay: 0, ease: "easeOut" }}
      >
        To Our Family And Friends, Thank You For Celebrating Our Special Day,
        Supporting Us And Sharing Our Love.
      </motion.p>
    </motion.div>
  );
};

SecondSection.propTypes = {
  secondImage: PropTypes.string.isRequired,
};

export default SecondSection;
