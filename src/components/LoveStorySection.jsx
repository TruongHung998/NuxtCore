import { motion } from "framer-motion";
import "./LoveStorySection.css";

const LoveStorySection = () => {
  const storyItems = [
    {
      image:
        "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop",
      title: "Fall in love",
      description: "The moment we first met, I knew you were special.",
      style: "Sweet",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop",
      title: "First Date",
      description: "Our first date was magical and unforgettable.",
      style: "Romantic",
    },
    {
      image:
        "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800&h=600&fit=crop",
      title: "The Proposal",
      description: "The day you said yes was the happiest day of my life.",
      style: "Perfect",
    },
  ];

  return (
    <section className="love-story-section">
      <div className="story-background">
        <img
          src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=1200&fit=crop"
          alt="Story Background"
          className="story-bg-image"
        />
        <div className="story-overlay"></div>
      </div>

      <div className="story-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="story-header"
        >
          <h2>OUR LOVE STORY</h2>
          <p className="story-subtitle">
            Right love | Right reason | Right for you
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="story-quote"
        >
          To Our Family And Friends, Thank You For Celebrating Our Special Day,
          Supporting Us And Sharing Our Love.
        </motion.p>

        <div className="story-timeline">
          {storyItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="story-item"
            >
              <div className="story-image-wrapper">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="story-text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="story-style">{item.style}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="story-message"
        >
          <h3>WEDDING INVITATION</h3>
          <p>2050.05.20</p>
          <p className="story-final-message">
            Chúng mình, hẹn gặp nhau trong ngày cưới nhé!
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="story-note"
        >
          Trước đây cứ nghĩ đám cưới chỉ là một thông báo chính thức,
          <br />
          Giờ mới hiểu đó là một dịp hiếm hoi để mọi người tụ họp.
          <br />
          Là những chuyến đi xa chỉ để có mặt bên nhau,
          <br />
          Là sự ủng hộ vô điều kiện từ những người thương yêu.
          <br />
          Cảm ơn gia đình, bạn bè đã luôn đồng hành.
          <br />
          Lâu rồi không gặp, thật sự rất nhớ mọi người!
        </motion.p>
      </div>
    </section>
  );
};

export default LoveStorySection;
