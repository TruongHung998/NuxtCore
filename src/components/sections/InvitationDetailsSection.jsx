import { motion } from "framer-motion";

const InvitationDetailsSection = () => {
  return (
    <motion.div
      className="invitation-details-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.3, delay: 0, ease: "easeOut" }}
    >
      <motion.div
        className="divider-line"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      />

      <motion.p
        className="invite-blessing"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3, delay: 0.3, ease: "easeOut" }}
      >
        Được tổ chức vào lúc
      </motion.p>

      <motion.div
        className="divider-line"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
      />

      <motion.div
        className="time-date-display"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3, delay: 0.6, ease: "easeOut" }}
      >
        <p className="time-slot">17:30 - CHỦ NHẬT</p>
        <p className="date-number">21.09.2025</p>
      </motion.div>

      <motion.div
        className="divider-line"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
      />

      <motion.div
        className="location-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3, delay: 1, ease: "easeOut" }}
      >
        <p className="location-title">Địa điểm:</p>
        <h3 className="location-name">MAPLE HOTEL & APARTMENT</h3>
        <p className="location-address">
          16 Tôn Dần, Lộc Thọ, Nha Trang, Khánh Hòa
        </p>
      </motion.div>

      <motion.div
        className="direction-button"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3, delay: 1.2, ease: "easeOut" }}
      >
        <span className="map-icon">📍</span>
        <span className="direction-text">CHỈ ĐƯỜNG</span>
      </motion.div>
    </motion.div>
  );
};

export default InvitationDetailsSection;
