import { motion } from "framer-motion";

const MapSection = () => {
  return (
    <motion.div
      className="map-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.3, delay: 0.3, ease: "easeOut" }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.8426073844644!2d106.72239453945828!3d10.669322261204021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31753a9d3864417f%3A0xcc2f007b43b7a56!2zTmjDoCBow6BuZyBI4bqjaSBz4bqjbiDEkOG6o28gSOG6o2kgTG9uZw!5e0!3m2!1sen!2s!4v1761467139041!5m2!1sen!2s"
        width="100%"
        height="275"
        style={{ border: 0, borderRadius: "5px" }}
        allowFullScreen=""
        loading="lazy"
        title="Wedding Location"
      ></iframe>
    </motion.div>
  );
};

export default MapSection;
