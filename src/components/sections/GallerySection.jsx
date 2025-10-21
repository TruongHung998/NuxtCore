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

      <p className="gallery-quote">
        As the clouds and mist dissipate&nbsp;
        <div>love you and everyone knows it</div>
      </p>

      <img src={galleryLarge} alt="Gallery Large" className="gallery-large" />

      <span className="forever-text">FOREVER</span>
      <span className="and-text">AND</span>
      <span className="ever-text">EVER</span>

      <p className="final-poem">
        Em tựa núi sông, băng qua rừng biếc,&nbsp;
        <div>Thoáng hiện như cánh chim, muôn hoa bừng nở.&nbsp;</div>
        <div>Giữa nhân gian cỏ cây vô tận,&nbsp;</div>
        <div>Riêng anh chỉ thấy em là ngọn núi xanh dịu dàng.</div>
      </p>

      <div className="decorative-divider"></div>
    </motion.div>
  );
};

GallerySection.propTypes = {
  galleryLeft: PropTypes.string.isRequired,
  galleryRight: PropTypes.string.isRequired,
  galleryLarge: PropTypes.string.isRequired,
};

export default GallerySection;
