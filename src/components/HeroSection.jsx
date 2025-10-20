import { motion } from "framer-motion";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1200&fit=crop"
          alt="Wedding Background"
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-quote"
        >
          I love three things in this world.
          <br />
          Sun, moon and you.
          <br />
          Sun for morning, moon for night,
          <br />
          and you forever.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hero-title"
        >
          Welcome to our wedding
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, rotate: 17 }}
          animate={{ opacity: 1, rotate: 17 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="hero-subtitle"
        >
          We got married
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="hero-couple"
        >
          <div className="couple-names">
            <span className="bride-name">Viet Hung</span>
            <span className="date">2025.05.20</span>
            <span className="groom-name">Lan Huyen</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="hero-footer"
        >
          <span>WEDDING</span>
          <span>INVITATION</span>
          <span>2050</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
