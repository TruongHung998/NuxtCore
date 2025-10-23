import React from "react";
import "../../styles/sections/timeline.css";

const TimelineSection = () => {
  const timelineData = [
    {
      year: "2022",
      title: "GẶP GỠ ĐỊNH MỆNH",
      description:
        "Phương Nga - cô hoa hậu tài sắc vẹn toàn, gặp gỡ Bình An - một nam diễn viên trẻ đầy triển vọng tại một sự kiện giải trí. Ngay từ ánh nhìn đầu tiên, họ đã có ấn tượng đặc biệt về nhau. Nhưng lần gặp gỡ sau đó, những cuộc trò chuyện kéo dài khiến họ dần nhận ra sự đồng điệu trong tâm hồn.",
    },
    {
      year: "2023",
      title: "THỬ THÁCH VÀ GẮN KẾT",
      description:
        "Bận rộn với công việc trong showbiz, họ nhiều lần xa cách nhưng vẫn luôn hướng về nhau. Dù hẹn, tin đồn đôi lúc khiến tình yêu gặp sóng gió, nhưng sự tin tưởng và thấu hiểu giúp họ vượt qua. Trong suốt hai năm, Bình An luôn âm thầm ủng hộ Phương Nga trong các sự kiện lớn, còn cô cũng lặng lẽ đồi theo từng bước tiến của anh. Cuối năm 2024, Bình An bất ngờ cầu hôn Phương Nga trong một không gian lãng mạn, và cô xúc động gật đầu.",
    },
  ];

  return (
    <section className="timeline-section">
      <div className="timeline-container">
        <div className="timeline-line"></div>

        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="timeline-year">
                {item.year} - {item.title}
              </h3>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
