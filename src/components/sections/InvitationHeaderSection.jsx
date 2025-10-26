import { motion } from "framer-motion";
import PropTypes from "prop-types";

const InvitationHeaderSection = ({ invitationImage }) => {
  return (
    <motion.div
      className="invitation-header-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.3, delay: 0, ease: "easeOut" }}
    >
      <motion.div
        className="parents-info"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3, delay: 0, ease: "easeOut" }}
      >
        <div className="parents-column">
          <h4>NHÀ TRAI</h4>
          <p>Ông. Trương Bá Long</p>
          <p>Bà. Phạm Hoàng Thuỷ</p>
          <p>Quy Nhơn</p>
        </div>

        <div className="parents-divider"></div>

        <div className="parents-column">
          <h4>NHÀ GÁI</h4>
          <p>Ông. Nguyễn Tiến Khương</p>
          <p>Bà. Nguyễn Thị Hậu</p>
          <p>TP. HCM</p>
        </div>
      </motion.div>

      <motion.p
        className="invitation-request"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3, delay: 0, ease: "easeOut" }}
      >
        Thân mời đến dự lễ thành hôn của chúng tôi!
      </motion.p>
    </motion.div>
  );
};

InvitationHeaderSection.propTypes = {
  invitationImage: PropTypes.string.isRequired,
};

export default InvitationHeaderSection;
