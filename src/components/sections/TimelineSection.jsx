import React from "react";
import "../../styles/sections/timeline.css";

const TimelineSection = () => {
  const timelineData = [
    {
      year: "2011",
      title: "Gặp nhau trong kỳ thi",
      description:
        "Hưng và Huyền lần đầu gặp nhau tại phòng thi. Khi Huyền vô tình chỉ bài cho Hưng, cả hai không ngờ rằng khoảnh khắc nhỏ ấy lại bắt đầu cho một câu chuyện dài sau này.",
    },
    {
      year: "2012",
      title: "Tình đầu tuổi học trò",
      description:
        "Sau thời gian làm quen, Hưng và Huyền chính thức hẹn hò. Ba tháng ngắn ngủi nhưng là quãng thời gian đầy kỷ niệm, giản dị và trong sáng – đúng chất tuổi học trò.",
    },
    {
      year: "2013 - 2020",
      title: "Mỗi người một hành trình",
      description:
        "Cả hai bước vào những năm tháng riêng để học tập và làm việc. Dù không còn liên lạc thường xuyên, nhưng đôi lúc, vẫn nhớ đến nhau qua những ký ức cũ.",
    },
    {
      year: "2021",
      title: "Gặp lại sau nhiều năm",
      description:
        "Sau thời gian dài, Hưng và Huyền tình cờ gặp lại. Cuộc trò chuyện tưởng chừng bình thường lại khiến cả hai nhận ra tình cảm vẫn còn ở đó – chỉ là chờ đúng lúc để trở lại.",
    },
    {
      year: "2021 - Hiện tại",
      title: "Yêu thương và đồng hành",
      description:
        "Từ ngày gặp lại, Hưng và Huyền cùng nhau trải qua nhiều khoảnh khắc đáng nhớ – từ những chuyến đi, buổi cà phê, cho đến những lần cùng vượt qua áp lực công việc và cuộc sống.",
    },
    {
      year: "2025",
      title: "Cầu hôn ở Thượng Hải",
      description:
        "Trong chuyến đi Thượng Hải, Hưng đã cầu hôn Huyền giữa không gian đầy kỷ niệm. Cả hai cùng quyết định sẽ bước sang một hành trình mới – kết hôn và xây dựng cuộc sống chung.",
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
