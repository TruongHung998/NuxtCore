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
      <div className="invitation-box">
        <span className="invitation-leaf left">🌿</span>
        <div className="invitation-text">
          <p>WEDDING</p>
          <p>INVITATION</p>
        </div>
        <span className="invitation-leaf right">🌿</span>
      </div>

      <motion.div
        className="parents-info"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3, delay: 0, ease: "easeOut" }}
      >
        <div className="parents-column">
          <h4>Nhà trai</h4>
          <p>Ông Nguyễn Văn Khiêm</p>
          <p>Bà Nguyễn Thị Lương</p>
        </div>
        <div className="parents-column">
          <h4>Nhà gái</h4>
          <p>Ông Trần Thiện Thảo</p>
          <p>Bà Hà Thị Cẩm Hà</p>
        </div>
      </motion.div>

      <motion.p
        className="invitation-request"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3, delay: 0, ease: "easeOut" }}
      >
        Trân Trọng Kính Mời
      </motion.p>

      <img
        src={invitationImage}
        alt="Invitation Photo"
        className="invitation-photo"
      />
    </motion.div>
  );
};

InvitationHeaderSection.propTypes = {
  invitationImage: PropTypes.string.isRequired,
};

export default InvitationHeaderSection;
