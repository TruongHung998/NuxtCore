import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LogoCountdownSection = () => {
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span className="timer-number">{formatNumber(timeLeft.days)}</span>
            <span className="timer-label">Days</span>
          </div>
          <span className="timer-separator">:</span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span className="timer-number">{formatNumber(timeLeft.hours)}</span>
            <span className="timer-label">Hours</span>
          </div>
          <span className="timer-separator">:</span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span className="timer-number">
              {formatNumber(timeLeft.minutes)}
            </span>
            <span className="timer-label">Minutes</span>
          </div>
          <span className="timer-separator">:</span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span className="timer-number">
              {formatNumber(timeLeft.seconds)}
            </span>
            <span className="timer-label">Seconds</span>
          </div>
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
            src="https://res.cloudinary.com/dkuvbw91g/image/upload/v1762391637/574467639_4304791496332792_3287900787469646208_n_o4trrc.jpg"
            alt="Wedding Photo"
            className="vertical-image"
          />
        </motion.div>

        {/* Left Right Images Section */}
        <div className="left-right-images-section">
          {/* Section 1: Groom photo left - info right */}
          <motion.div
            className="left-image-wrapper"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            <img src={"https://res.cloudinary.com/dkuvbw91g/image/upload/v1762391637/560620136_4304791536332788_2007586981646828501_n_wwj0oj.jpg"} alt="Groom Viet Hung" className="side-image" />
          </motion.div>
          <motion.div
            className="right-info-wrapper"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: "2vw",
            }}
          >
            <div className="wedding-info groom-info">
              <span className="label">Groom</span>
              <span className="name">Viet Hung</span>
              <span className="date">23.10.1998</span>
            </div>
          </motion.div>
        </div>

        <div
          className="left-right-images-section"
          style={{ marginTop: "2.5rem" }}
        >
          {/* Section 2: Bride info left, photo right */}
          <motion.div
            className="left-info-wrapper"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingRight: "2vw",
            }}
          >
            <div className="wedding-info bride-info">
              <span className="label">Bride</span>
              <span className="name">Lan Huyen</span>
              <span className="date">11.01.1998</span>
            </div>
          </motion.div>
          <motion.div
            className="right-image-wrapper"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            <img src={"https://res.cloudinary.com/dkuvbw91g/image/upload/v1762391637/571329745_4304791516332790_3426270614803703292_n_gfkb6w.jpg"} alt="Bride Lan Huyen" className="side-image" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default LogoCountdownSection;
