import { motion } from "framer-motion";

const LoveFreedomSection = () => {
  return (
    <motion.div
      className="love-freedom-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.3, delay: 0, ease: "easeOut" }}
    >
      <h2 className="love-freedom-title">
        Love and freedom&nbsp;
        <div>you And gentleness</div>
      </h2>

      <p className="nature-poem">
        Núi biếc rừng xanh vang vọng tiếng lòng,&nbsp;
        <div>
          Giữa thế gian rộng lớn, người chung nhịp vẫn tìm thấy nhau.&nbsp;
        </div>
        <div>Tình yêu đến như một lẽ tự nhiên,&nbsp;</div>
        <div>Và chúng ta nắm tay nhau đi đến trọn đời.</div>
      </p>

      <div className="divider-line"></div>

      <div className="info-labels">
        <span>LOVE</span>
        <span>WEDDING</span>
        <span>INFORMATION</span>
      </div>
    </motion.div>
  );
};

export default LoveFreedomSection;
