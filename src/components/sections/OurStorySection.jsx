import { motion } from "framer-motion";

const OurStorySection = () => {
  return (
    <motion.div
      className="our-story-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.3, delay: 0, ease: "easeOut" }}
    >
      <h2 className="section-heading">
        OUR
        <br />
        LOVE STORY
      </h2>

      <p className="vertical-quote">
        Love goes with the wind, but never goes away.
      </p>

      <div className="fall-in-love-box">
        <span className="decorative-icon">💕</span>
        <div className="fall-text">
          <p>FALL IN</p>
          <p>LOVE</p>
        </div>
      </div>

      <p className="story-poem">
        Mong rằng khi ngoảnh lại, ta vẫn có nhau.&nbsp;
        <div>Cùng nắm tay đi đến bạc đầu...</div>
      </p>
    </motion.div>
  );
};

export default OurStorySection;
