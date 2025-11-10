import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HERO_IMAGE_TRANSFORMED = (width) =>
  `https://res.cloudinary.com/dkuvbw91g/image/upload/f_auto,q_auto,w_${width}/v1762391590/571236975_4304791249666150_3122169430706030822_n_ajy0d3.jpg`;

const HeroSection = () => {
  const groomNameRef = useRef(null);
  const ampersandRef = useRef(null);
  const brideNameRef = useRef(null);

  useEffect(() => {
    // GSAP Timeline for couple names animation (ĐÃ TỐI ƯU LẠI THỜI GIAN)
    const tl = gsap.timeline({ delay: 0 }); // giảm delay timeline về 0

    // Groom name animation - fade in từ dưới lên, scale nhẹ
    tl.fromTo(
      groomNameRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.8,
        rotationX: -90,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0,
        duration: 0.6, // giảm còn 0.6s
        ease: "power3.out",
      }
    );

    // Ampersand animation - overlap mạnh tay hơn (-=0.5)
    tl.fromTo(
      ampersandRef.current,
      {
        opacity: 0,
        scale: 0,
        rotation: -180,
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.6)",
      },
      "-=0.5"
    );

    // Bride name animation - overlap nhiều nhất
    tl.fromTo(
      brideNameRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.8,
        rotationX: -90,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.55"
    );

    // Floating (top lên xuống) - để tự overlap luôn (nhẹ)
    tl.to(
      [groomNameRef.current, ampersandRef.current, brideNameRef.current],
      {
        y: -5,
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      },
      "+=0.1"
    ); // khởi động floating sau 0.1s
  }, []);

  return (
    <div
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.3, ease: "easeOut" }}
    >
      <img
        src={HERO_IMAGE_TRANSFORMED(1600)}
        srcSet={`${HERO_IMAGE_TRANSFORMED(800)} 800w, ${HERO_IMAGE_TRANSFORMED(
          1200
        )} 1200w, ${HERO_IMAGE_TRANSFORMED(1600)} 1600w`}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 960px"
        alt="Wedding Cover"
        className="cover-image"
        loading="eager"
        decoding="async"
        fetchpriority="high"
        width="960"
        height="1440"
      />

      {/* Dark overlay for better text visibility */}
      <div className="hero-overlay"></div>
      {/* Couple Names - position: top: 665px */}
      <div className="couple-names">
        <span ref={groomNameRef} className="groom-name">
          Viet Hung
        </span>
        <span ref={ampersandRef} className="DearScript">
          &
        </span>
        <span ref={brideNameRef} className="bride-name">
          Lan Huyen
        </span>
      </div>

      {/* Labels GROOM/BRIDE - position: top: 709px */}
      <div
        className="couple-labels"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.3, delay: 0, ease: "easeOut" }}
      >
        <span className="groom-label">GROOM</span>
        <span className="bride-label">BRIDE</span>
      </div>

      {/* Wedding Date - position: top: 797px */}
      <div
        className="wedding-date"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, delay: 0, ease: "easeOut" }}
      >
        29.11.2025
      </div>
    </div>
  );
};

HeroSection.propTypes = {};

export default HeroSection;
