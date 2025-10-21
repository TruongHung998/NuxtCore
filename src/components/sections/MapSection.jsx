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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4254827672157!2d106.69639731533369!3d10.777300162076296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4b3330bcc9%3A0xd76810a2b9b129e1!2zSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1234567890123"
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
