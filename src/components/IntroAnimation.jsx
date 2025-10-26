import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./IntroAnimation.css";
import mainLogo from "../assets/webassests/mainlogo.png";

const IntroAnimation = ({ onComplete }) => {
  const containerRef = useRef(null);
  const leavesRef = useRef([]);
  const circleRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });

      // Animation cho các lá cây
      leavesRef.current.forEach((leaf, index) => {
        tl.from(
          leaf,
          {
            scale: 0,
            rotation: -180,
            opacity: 0,
            duration: 0.4,
            ease: "back.out(1.7)",
          },
          index * 0.1
        );
      });

      // Animation cho vòng tròn
      tl.from(
        circleRef.current,
        {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.5)",
        },
        0.2
      );

      // Animation cho logo
      tl.from(
        logoRef.current,
        {
          scale: 0.5,
          opacity: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        0.5
      );

      // Fade out toàn bộ
      tl.to(
        containerRef.current,
        {
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
        },
        1.2
      );
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div className="intro-animation" ref={containerRef}>
      <div className="intro-content">
        {/* Vòng tròn nền với texture */}

        {/* Các lá cây xung quanh */}
        <div className="intro-leaves">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="leaf"
              ref={(el) => (leavesRef.current[index] = el)}
              style={{
                transform: `rotate(${index * 45}deg) translateY(-80px)`,
              }}
            >
              <svg width="30" height="30" viewBox="0 0 30 30">
                <path
                  d="M 15 5 Q 20 10, 22 15 Q 20 20, 15 25 Q 10 20, 8 15 Q 10 10, 15 5 Z"
                  fill="#94a094"
                  opacity="0.8"
                />
                <path
                  d="M 15 8 Q 12 15, 15 22"
                  stroke="#7a8a7a"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.5"
                />
              </svg>
            </div>
          ))}
        </div>

        {/* Logo chính */}
        <div className="intro-logo" ref={logoRef}>
          <img src={mainLogo} alt="Wedding Logo" />
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;
