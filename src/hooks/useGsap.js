import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for GSAP animations
 * @param {Function} animationCallback - Function containing GSAP animation code
 * @param {Array} dependencies - Dependencies array for useEffect
 */
export const useGsap = (animationCallback, dependencies = []) => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      animationCallback(gsap, ScrollTrigger);
    }, ref);

    return () => ctx.revert(); // Cleanup
  }, dependencies);

  return ref;
};

/**
 * Hook for fade in animation on scroll
 */
export const useGsapFadeIn = (options = {}) => {
  const {
    duration = 1,
    delay = 0,
    y = 50,
    triggerStart = "top 80%",
    ...rest
  } = options;

  return useGsap((gsap) => {
    gsap.from(".gsap-fade-in", {
      opacity: 0,
      y,
      duration,
      delay,
      scrollTrigger: {
        trigger: ".gsap-fade-in",
        start: triggerStart,
        toggleActions: "play none none reverse",
      },
      ...rest,
    });
  });
};

/**
 * Hook for stagger animation
 */
export const useGsapStagger = (selector, options = {}) => {
  const {
    duration = 0.8,
    stagger = 0.2,
    y = 30,
    triggerStart = "top 80%",
    ...rest
  } = options;

  return useGsap((gsap) => {
    gsap.from(selector, {
      opacity: 0,
      y,
      duration,
      stagger,
      scrollTrigger: {
        trigger: selector,
        start: triggerStart,
        toggleActions: "play none none reverse",
      },
      ...rest,
    });
  });
};

export default useGsap;
