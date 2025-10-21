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
      <h3 className="invited-title">-- You Are Invited--</h3>
      <h4 className="invite-text">Trân Trọng Kính Mời</h4>
      <p className="invite-subtitle">THAM DỰ TIỆC MỪNG LỄ THÀNH HÔN</p>
      <p className="invite-time">Vào lúc</p>

      <div className="time-date-display">
        <span className="time-slot">12:00</span>
        <div className="date-full">
          <p>Chủ nhật / Sunday</p>
          <p className="date-number">14</p>
          <p>Tháng 12 / December</p>
        </div>
        <span className="time-year">2025</span>
      </div>

      <p className="lunar-date">(Âm lịch 24 tháng 10 năm Ất Tỵ)</p>

      <h4 className="location-title">Địa điểm / Address</h4>
      <div className="location-info">
        <p>Diamond Place</p>
        <p>15A Hồ Văn Huê, Phường Đức Nhuận, Hồ Chí Minh</p>
      </div>
    </motion.div>
  );
};

export default InvitationDetailsSection;
