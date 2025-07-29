import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./WeddingInfo.css";

const WeddingInfo = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    const weddingDate = new Date("2025-11-30T00:00:00");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const floatingVariants = {
    floating: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="wedding-info-section section" ref={ref}>
      <motion.div
        className="wedding-info-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div
          className="wedding-card"
          variants={floatingVariants}
          animate="floating"
        >
          <motion.div className="couple-names-main" variants={itemVariants}>
            <h1>Viet Hung</h1>
            <div className="ampersand">&</div>
            <h1>Lan Huyen</h1>
          </motion.div>

          <motion.div className="wedding-date-main" variants={itemVariants}>
            <h2>November 30, 2025</h2>
          </motion.div>

          <motion.div className="venue-info" variants={itemVariants}>
            <p className="venue-address">
              455 Nguyen Van Tao
              <br />
              Nha Be, Ho Chi Minh City
            </p>
          </motion.div>

          <motion.div className="countdown-container" variants={itemVariants}>
            <h3 className="countdown-title">Countdown to Our Big Day</h3>
            <div className="countdown-timer">
              <div className="time-unit">
                <motion.div
                  className="time-number"
                  key={timeLeft.days}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {timeLeft.days}
                </motion.div>
                <div className="time-label">DAYS</div>
              </div>

              <div className="time-separator">•</div>

              <div className="time-unit">
                <motion.div
                  className="time-number"
                  key={timeLeft.hours}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {timeLeft.hours}
                </motion.div>
                <div className="time-label">HOURS</div>
              </div>

              <div className="time-separator">•</div>

              <div className="time-unit">
                <motion.div
                  className="time-number"
                  key={timeLeft.minutes}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {timeLeft.minutes}
                </motion.div>
                <div className="time-label">MINUTES</div>
              </div>

              <div className="time-separator">•</div>

              <div className="time-unit">
                <motion.div
                  className="time-number"
                  key={timeLeft.seconds}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {timeLeft.seconds}
                </motion.div>
                <div className="time-label">SECONDS</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WeddingInfo;
