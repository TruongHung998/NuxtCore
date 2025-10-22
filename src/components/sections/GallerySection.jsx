import { motion } from "framer-motion";
import PropTypes from "prop-types";

const GallerySection = ({ galleryLeft, galleryRight, galleryLarge }) => {
  return (
    <motion.div
      className="gallery-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.3, delay: 0.2, ease: "easeOut" }}
    >
      <div className="gallery-photos">
        <img src={galleryLeft} alt="Gallery 1" className="gallery-img-left" />
        <img src={galleryRight} alt="Gallery 2" className="gallery-img-right" />
      </div>
    </motion.div>
  );
};

GallerySection.propTypes = {
  galleryLeft: PropTypes.string.isRequired,
  galleryRight: PropTypes.string.isRequired,
  galleryLarge: PropTypes.string.isRequired,
};

export default GallerySection;
