import React from "react";
import { motion } from "framer-motion";
import "../../styles/sections/gallery.css";

import img1 from "../../assets/webassests/HUG00263.webp";
import img2 from "../../assets/webassests/HUG09133.webp";
import img3 from "../../assets/webassests/HUG09183.webp";
import img4 from "../../assets/webassests/IMG_4086.webp";

const images = [img1, img2, img3, img4];

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.1 },
  }),
};

const ImageShowcaseSection = () => {
  return (
    <section className="image-showcase-section">
      <div className="image-showcase-container">
        {images.map((src, index) => (
          <motion.figure
            key={index}
            className="image-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={itemVariants}
            custom={index}
          >
            <img
              src={src}
              alt={`Kỷ niệm ${index + 1}`}
              loading="lazy"
              className={index === 3 ? "qr-image" : undefined}
            />
            {index === 3 && (
              <figcaption className="qr-note">
                Chúng tôi rất trân trọng sự hiện diện của bạn trong ngày vui
                này. Nếu bạn muốn gửi lời chúc mừng theo cách đặc biệt, xin vui
                lòng quét mã QR dưới đây.
              </figcaption>
            )}
          </motion.figure>
        ))}
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
