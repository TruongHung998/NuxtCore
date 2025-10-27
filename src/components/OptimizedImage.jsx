import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "../styles/optimized-image.css";

const OptimizedImage = ({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false,
  objectFit = "cover",
  placeholder = "blur",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "50px",
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div
      ref={imgRef}
      className={`optimized-image-wrapper ${className}`}
      style={{
        width: width || "100%",
        height: height || "auto",
        position: "relative",
      }}
    >
      {!isLoaded && placeholder === "blur" && (
        <div className="image-placeholder" />
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={handleLoad}
          className={`optimized-image ${isLoaded ? "loaded" : "loading"}`}
          style={{
            objectFit,
            width: "100%",
            height: "100%",
          }}
        />
      )}
    </div>
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  priority: PropTypes.bool,
  objectFit: PropTypes.oneOf([
    "contain",
    "cover",
    "fill",
    "none",
    "scale-down",
  ]),
  placeholder: PropTypes.oneOf(["blur", "empty"]),
};

export default OptimizedImage;
