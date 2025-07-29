import React, { useState, useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Masonry from "react-masonry-css";
import Countdown from "react-countdown";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./App.css";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState<string[]>([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const weddingDate = new Date("2025-11-30T00:00:00");

  useEffect(() => {
    const allImages = [
      "HUG00025.webp",
      "HUG00052.webp",
      "HUG00163.webp",
      "HUG00192.webp",
      "HUG00221.webp",
      "HUG00246.webp",
      "HUG00263.webp",
      "HUG00293.webp",
      "HUG00324.webp",
      "HUG00353.webp",
      "HUG00374.webp",
      "HUG00410.webp",
      "HUG00532.webp",
      "HUG00637.webp",
      "HUG00805.webp",
      "HUG00818.webp",
      "HUG00930.webp",
      "HUG01017.webp",
      "HUG09101.webp",
      "HUG09122.webp",
      "HUG09133.webp",
      "HUG09183.webp",
      "HUG09192.webp",
      "HUG09271.webp",
      "HUG09300.webp",
      "HUG09350.webp",
      "HUG09395.webp",
      "HUG09401.webp",
      "HUG09441.webp",
      "HUG09461.webp",
      "HUG09482.webp",
      "HUG09557.webp",
      "HUG09606.webp",
      "HUG09695.webp",
      "HUG09738.webp",
      "HUG09767.webp",
      "HUG09799.webp",
      "HUG09905.webp",
      "HUG09943.webp",
      "HUG09970.webp",
      "HUG09986.webp",
      "HUG09999.webp",
    ].map((img) => `/hinhcuoi/${img}`);

    setImages(allImages);

    let loadedCount = 0;
    allImages.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === allImages.length) {
          setTimeout(() => setLoading(false), 1000);
        }
      };
    });
  }, []);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const masonryImages = images.filter((img) => !img.includes("HUG00052.webp"));

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <ReactFullpage
        credits={{ enabled: false }}
        scrollingSpeed={1000}
        render={({ state, fullpageApi }) => (
          <ReactFullpage.Wrapper>
            <div className="section section1">
              <div
                className="background-image"
                style={{ backgroundImage: "url(/hinhcuoi/HUG00052.webp)" }}
              ></div>
              <div className="lyrics">
                <p>Georgia, wrap me up in all your-</p>
                <p>I want you in my arms</p>
                <p>Oh, let me hold you</p>
                <p>I'll never let you go again like I did</p>
                <p>"I would never fall in love again until I found her"</p>
                <p>I said, "I would never fall unless it's you I fall into"</p>
                <p>I was lost within the darkness, but then I found her</p>
                <p>I found you</p>
              </div>
            </div>

            <div className="section section2">
              <div className="details">
                <h1>Viet Hung & Lan Huyen</h1>
                <p>are getting married on</p>
                <h2>30/11/2025</h2>
                <Countdown date={weddingDate} />
                <p>at 455 Nguyễn Văn Tạo, Nhà Bè, Thành phố Hồ Chí Minh</p>
              </div>
            </div>

            <div className="section section3">
              <Masonry
                breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {masonryImages.map((src, index) => (
                  <motion.div
                    key={src}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="masonry-item"
                    onClick={() => openLightbox(index)}
                  >
                    <img src={src} alt="" />
                  </motion.div>
                ))}
              </Masonry>
            </div>

            <div className="section section4">
              <iframe
                title="Wedding Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.825319989781!2d106.7090458152676!3d10.67272216377317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1b8a4f6d3b%3A0x4c6f4b6e5b6b1b7a!2s455%20Nguy%E1%BB%85n%20V%C4%83n%20T%E1%BA%A1o%2C%20Long%20Th%E1%BB%9Bi%2C%20Nh%C3%A0%20B%C3%A8%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vietnam!5e0!3m2!1sen!2s!4v1678886400000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={masonryImages.map((src) => ({ src }))}
          index={lightboxIndex}
        />
      )}
    </>
  );
};

export default App;
