import { motion } from "framer-motion";
import React from "react";
import "../../styles/sections/gallery.css";


const images = [
  "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/574585336_4307344162744192_4697703239618857948_n.webp?stp=dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=re-XICMMKjAQ7kNvwFhFJk0&_nc_oc=Adm0iZSF-STrVwc_QayOx7t2dX9u0DierqI48J71JgRGEOf6Ttql1sY4RiRPkxDwERg&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=IXavmuooyZhz037kekxMBA&oh=00_Afei6ORyRubET-vRdEJY1jEwkUlexth37QTfw4qsm4EJcA&oe=690AADDF",
  "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/571272331_4307344142744194_6369775261081739523_n.webp?stp=dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=UyRtLooy3t4Q7kNvwG1dnJO&_nc_oc=AdmHuK2zjiUEbK2CppkTz7fRpCJR3-MWHiZAvvW31l415GgIu4EKqle7BAvmW3daQGg&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=LcP8UecDEizjDXmioDDErw&oh=00_AfdsJosq2LvM-4Hv1PpeC6m3pCEWBiUOIdkrAQUXBCS3-A&oe=690AA5F0",
  "https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/573097846_4307344069410868_7625859065063047270_n.webp?stp=dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=eTBUaY0Hjj4Q7kNvwEvyKNL&_nc_oc=Adny-D39ZGRlBkGfQ9bMfpuAko5zKVUC0hoGJEaUeuTwgZrf92pzuFrgrhNneL-PBVY&_nc_zt=23&_nc_ht=scontent.fsgn5-11.fna&_nc_gid=aGQxPZFjLgr23ogksFeN-g&oh=00_AffBP1VBP1o6Kxj_cFZsB_8Y2Gx0Eazl88LgKucAWOOtNw&oe=690AAD23",
  "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/573486300_4307343969410878_3903470906793551485_n.webp?stp=dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=7zUhcwQrqL0Q7kNvwEZyE6U&_nc_oc=Adn3Yo1LQwvcm_p67xPLDH3Ma8x2iVsllidDTXaZ0-ZMCAZLOfgYOfn1CkocTvZBE0g&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=DLuVyHwG2afKjjdvUvlUqg&oh=00_Afcz_2W1LHaZ0yPHSw_xBHD8g8Z4aU0jQOY4EMrFjnPLtg&oe=690A930D",
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
