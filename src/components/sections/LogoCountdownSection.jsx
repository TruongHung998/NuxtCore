import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import left1 from "../../assets/webassests/left1.webp";
import right1 from "../../assets/webassests/right1.webp";

const LogoCountdownSection = ({ logoImage, verticalImage }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-11-29T00:00:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  // Helper function to format number with leading zero
  const formatNumber = (num) => String(num).padStart(2, "0");

  return (
    <motion.div
      className="logo-countdown-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.3, delay: 0.2, ease: "easeOut" }}
    >
      <div className="logo-countdown-container">
        {/* Logo */}
        <motion.div
          className="logo-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img
            src="https://res.cloudinary.com/dkuvbw91g/image/upload/v1761664328/mainlogo_nhligo.webp"
            alt="Wedding Logo"
            className="main-logo"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="countdown-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="countdown-title">WE WILL BE BECOME</h2>
          <h2 className="countdown-subtitle">HUSBAND AND WIFE IN</h2>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          className="countdown-timer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <span className="timer-number">{formatNumber(timeLeft.days)}</span>
          <span className="timer-separator">:</span>
          <span className="timer-number">{formatNumber(timeLeft.hours)}</span>
          <span className="timer-separator">:</span>
          <span className="timer-number">{formatNumber(timeLeft.minutes)}</span>
          <span className="timer-separator">:</span>
          <span className="timer-number">{formatNumber(timeLeft.seconds)}</span>
        </motion.div>

        {/* Vertical Image */}
        <motion.div
          className="vertical-image-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <img
            src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/574467639_4304791496332792_3287900787469646208_n.webp?stp=dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=sSaKOnQx6EAQ7kNvwHPYFeE&_nc_oc=AdnRa7vz6TnEF8QmNN9a7OK55Ic0OdVgfyAWjmhHsGINxIwKhKroweZiOE-83YPtChE&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=qQfWmAFBojhzyuGq9ksM0A&oh=00_AfeRSD4ydffaocIewhXxgOlFWDJLmGfpKuxQCDBgzAS4lg&oe=69095A91"
            alt="Wedding Photo"
            className="vertical-image"
          />
        </motion.div>

        {/* Left Right Images Section */}
        <div className="left-right-images-section">
          <motion.div
            className="left-image-wrapper"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            <img
              src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/560620136_4304791536332788_2007586981646828501_n.webp?stp=dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=YMQZsH8pd00Q7kNvwHqUDMw&_nc_oc=AdlVLbPvSz1aPYxCLA8hFhnWVvvnsEf-VNEAQOy-6zuHk_EC3jRfA4O0mezv_44ecpQ&_nc_zt=23&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=yKo33W1TCLSWISFSCrJaMw&oh=00_AffIaEOTG_DzS4GnEt3vl1q-Z1w93dbUNscFGckVe8XlFA&oe=6909482F"
              alt="Wedding Photo Left"
              className="side-image"
            />
          </motion.div>

          <motion.div
            className="right-image-wrapper"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            <img
              src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/571329745_4304791516332790_3426270614803703292_n.webp?stp=dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=DteIRgnpyk8Q7kNvwH8xpGE&_nc_oc=AdlkGkGFgeSk0lcm5hMVZ3T6frkW0Nay3ejn5rCYxqwPATfX5tbgfslO7JP4bYgiTmg&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=vXSF7Hrm8xYJeG5EUoDPRg&oh=00_AffjSYx893zN48sKgruHKlgMnPmMNUntqtPmvCBo49RPJw&oe=69093C3E"
              alt="Wedding Photo Right"
              className="side-image"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

LogoCountdownSection.propTypes = {
  logoImage: PropTypes.string.isRequired,
  verticalImage: PropTypes.string.isRequired,
  horizontalImage: PropTypes.string.isRequired,
};

export default LogoCountdownSection;
