import { motion } from "framer-motion";
import React from "react";
import "../../styles/sections/gallery.css";


const images = [
  "https://res.cloudinary.com/dkuvbw91g/image/upload/v1762391426/574585336_4307344162744192_4697703239618857948_n_jjnnlw.jpg",
  "https://res.cloudinary.com/dkuvbw91g/image/upload/v1762391428/573097846_4307344069410868_7625859065063047270_n_moxest.jpg",
  "https://res.cloudinary.com/dkuvbw91g/image/upload/v1762391426/571272331_4307344142744194_6369775261081739523_n_qttayd.jpg",
  "https://res.cloudinary.com/dkuvbw91g/image/upload/v1762391425/573486300_4307343969410878_3903470906793551485_n_hbcxxr.jpg",
];

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
            {index === 3 ? (
              <div className="qr-card" role="group" aria-label="Gửi quà mừng">
                <header className="qr-header"></header>
                <div className="qr-frame">
                  <img
                    src={src}
                    alt="Mã QR chuyển khoản"
                    loading="lazy"
                    className="qr-image"
                  />
                </div>
                <div className="qr-divider" aria-hidden="true"></div>
                <figcaption className="qr-note">
                  Chúng tôi rất trân trọng sự hiện diện của bạn trong ngày vui
                  này. Nếu bạn muốn gửi lời chúc mừng theo cách đặc biệt, xin
                  vui lòng quét mã QR dưới đây.
                </figcaption>
              </div>
            ) : (
              <img src={src} alt={`Kỷ niệm ${index + 1}`} loading="lazy" />
            )}
          </motion.figure>
        ))}
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
