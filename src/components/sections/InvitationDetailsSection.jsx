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
      <h4 className="invite-text">Trân Trọng Kính Mời</h4>
      <p className="invite-subtitle">THAM DỰ TIỆC MỪNG LỄ THÀNH HÔN</p>
      <p className="invite-time">Vào lúc</p>

      <div className="time-date-display">
        <span className="time-slot">12:00</span>
        <div className="date-full">
          <p>Thứ 7 / Saturday</p>
          <p className="date-number">29</p>
          <p>Tháng 11 / November</p>
        </div>
        <span className="time-year">2025</span>
      </div>

      <p className="lunar-date">(Âm lịch 10 tháng 10 năm Ất Tỵ)</p>

      <h4 className="location-title">Địa điểm / Address</h4>
      <div className="location-info">
        <p>Nhà hàng Hải sản Đảo Hải Long</p>
        <p>179a Đ. Nguyễn Hữu Thọ, Nhơn Đức, Nhà Bè, HCM</p>
      </div>
    </motion.div>
  );
};

export default InvitationDetailsSection;
