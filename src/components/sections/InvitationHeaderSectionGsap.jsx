import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Invitation Header Section with GSAP scroll animations
 */
const InvitationHeaderSectionGsap = ({ invitationImage }) => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const messageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image parallax effect
      gsap.to(imageRef.current, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Stagger animation for text elements
      const textElements = [
        titleRef.current,
        subtitleRef.current,
        messageRef.current,
      ];

      gsap.from(textElements, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="invitation-header-section" ref={sectionRef}>
      <div className="invitation-image-container" ref={imageRef}>
        <img
          src={invitationImage}
          alt="Invitation"
          className="invitation-image"
        />
      </div>

      <div className="invitation-text">
        <h2 ref={titleRef}>You Are Invited</h2>
        <h3 ref={subtitleRef}>To Celebrate Our Wedding</h3>
        <p ref={messageRef}>
          We request the honor of your presence at the marriage celebration of
        </p>
      </div>
    </div>
  );
};

InvitationHeaderSectionGsap.propTypes = {
  invitationImage: PropTypes.string.isRequired,
};

export default InvitationHeaderSectionGsap;
