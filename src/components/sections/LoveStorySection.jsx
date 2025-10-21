import { motion } from "framer-motion";
import PropTypes from "prop-types";

const LoveStorySection = ({ storyImageTall, storyImageWide }) => {
  return (
    <motion.div
      className="love-story-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.3, delay: 0, ease: "easeOut" }}
    >
      <motion.div
        className="sweet-text"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3, delay: 0, ease: "easeOut" }}
      >
        Sweet
      </motion.div>
      <motion.p
        className="love-story-message"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3, delay: 0, ease: "easeOut" }}
      >
        Trước đây cứ nghĩ đám cưới chỉ là một thông báo chính thức,&nbsp;
        <div>
          Giờ mới hiểu đó là một dịp hiếm hoi để mọi người tụ họp.&nbsp;
        </div>
        <div>Là những chuyến đi xa chỉ để có mặt bên nhau,&nbsp;</div>
        <div>Là sự ủng hộ vô điều kiện từ những người thương yêu.&nbsp;</div>
        <div>Cảm ơn gia đình, bạn bè đã luôn đồng hành.&nbsp;</div>
        <div>Lâu rồi không gặp, thật sự rất nhớ mọi người!</div>
      </motion.p>
      <h3 className="date-display">14.12.2025</h3>
      <p className="date-message">
        Chúng mình, hẹn gặp nhau trong ngày cưới nhé!
      </p>
      <div className="story-images-grid">
        <img src={storyImageTall} alt="Love Story" className="story-img-tall" />
        <img src={storyImageWide} alt="Love Story" className="story-img-wide" />
      </div>{" "}
      <div className="date-stamp">14.12.2025</div>
    </motion.div>
  );
};

LoveStorySection.propTypes = {
  storyImageTall: PropTypes.string.isRequired,
  storyImageWide: PropTypes.string.isRequired,
};

export default LoveStorySection;
