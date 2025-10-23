import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const LogoCountdownSection = ({
  logoImage,
  verticalImage,
  horizontalImage,
}) => {
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
          <img src={logoImage} alt="Wedding Logo" className="main-logo" />
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
            src={verticalImage}
            alt="Wedding Photo"
            className="vertical-image"
          />
        </motion.div>

        {/* Horizontal Image */}
        <motion.div
          className="horizontal-image-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <img
            src={horizontalImage}
            alt="Wedding Photo"
            className="horizontal-image"
          />
        </motion.div>
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
