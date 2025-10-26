import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * Common GSAP animation presets for wedding template
 */

/**
 * Fade in animation
 */
export const fadeIn = (element, options = {}) => {
  const {
    duration = 1,
    delay = 0,
    y = 0,
    x = 0,
    ease = "power3.out",
    ...rest
  } = options;

  return gsap.from(element, {
    opacity: 0,
    y,
    x,
    duration,
    delay,
    ease,
    ...rest,
  });
};

/**
 * Fade in with scroll trigger
 */
export const fadeInScroll = (element, options = {}) => {
  const {
    duration = 1,
    y = 50,
    ease = "power3.out",
    trigger = element,
    start = "top 80%",
    toggleActions = "play none none reverse",
    ...rest
  } = options;

  return gsap.from(element, {
    opacity: 0,
    y,
    duration,
    ease,
    scrollTrigger: {
      trigger,
      start,
      toggleActions,
    },
    ...rest,
  });
};

/**
 * Stagger animation
 */
export const staggerFadeIn = (elements, options = {}) => {
  const {
    duration = 0.8,
    stagger = 0.2,
    y = 30,
    ease = "power3.out",
    ...rest
  } = options;

  return gsap.from(elements, {
    opacity: 0,
    y,
    duration,
    stagger,
    ease,
    ...rest,
  });
};

/**
 * Stagger with scroll trigger
 */
export const staggerFadeInScroll = (elements, options = {}) => {
  const {
    duration = 0.8,
    stagger = 0.2,
    y = 30,
    ease = "power3.out",
    trigger = elements,
    start = "top 80%",
    toggleActions = "play none none reverse",
    ...rest
  } = options;

  return gsap.from(elements, {
    opacity: 0,
    y,
    duration,
    stagger,
    ease,
    scrollTrigger: {
      trigger,
      start,
      toggleActions,
    },
    ...rest,
  });
};

/**
 * Parallax effect
 */
export const parallax = (element, options = {}) => {
  const {
    y = -100,
    ease = "none",
    trigger = element,
    start = "top bottom",
    end = "bottom top",
    scrub = true,
    ...rest
  } = options;

  return gsap.to(element, {
    y,
    ease,
    scrollTrigger: {
      trigger,
      start,
      end,
      scrub,
    },
    ...rest,
  });
};

/**
 * Scale animation
 */
export const scaleIn = (element, options = {}) => {
  const { duration = 1, scale = 0.8, ease = "power3.out", ...rest } = options;

  return gsap.from(element, {
    opacity: 0,
    scale,
    duration,
    ease,
    ...rest,
  });
};

/**
 * Rotate and fade in
 */
export const rotateFadeIn = (element, options = {}) => {
  const {
    duration = 1,
    rotation = -10,
    ease = "power3.out",
    ...rest
  } = options;

  return gsap.from(element, {
    opacity: 0,
    rotation,
    duration,
    ease,
    ...rest,
  });
};

/**
 * Text reveal animation (character by character)
 */
export const textReveal = (element, options = {}) => {
  const {
    duration = 0.05,
    stagger = 0.05,
    ease = "power3.out",
    ...rest
  } = options;

  // Split text into characters
  const text = element.textContent;
  element.innerHTML = text
    .split("")
    .map(
      (char) => `<span class="char">${char === " " ? "&nbsp;" : char}</span>`
    )
    .join("");

  const chars = element.querySelectorAll(".char");

  return gsap.from(chars, {
    opacity: 0,
    y: 20,
    duration,
    stagger,
    ease,
    ...rest,
  });
};

/**
 * Image zoom effect on scroll
 */
export const imageZoom = (element, options = {}) => {
  const {
    scale = 1.2,
    ease = "none",
    trigger = element,
    start = "top bottom",
    end = "bottom top",
    scrub = true,
    ...rest
  } = options;

  return gsap.fromTo(
    element,
    { scale: 1 },
    {
      scale,
      ease,
      scrollTrigger: {
        trigger,
        start,
        end,
        scrub,
      },
      ...rest,
    }
  );
};

/**
 * Slide in from direction
 */
export const slideIn = (element, direction = "left", options = {}) => {
  const {
    duration = 1,
    distance = 100,
    ease = "power3.out",
    ...rest
  } = options;

  const fromVars = {
    opacity: 0,
    duration,
    ease,
    ...rest,
  };

  switch (direction) {
    case "left":
      fromVars.x = -distance;
      break;
    case "right":
      fromVars.x = distance;
      break;
    case "top":
      fromVars.y = -distance;
      break;
    case "bottom":
      fromVars.y = distance;
      break;
  }

  return gsap.from(element, fromVars);
};

/**
 * Pin element during scroll
 */
export const pinElement = (element, options = {}) => {
  const {
    start = "top top",
    end = "+=500",
    pinSpacing = true,
    ...rest
  } = options;

  return ScrollTrigger.create({
    trigger: element,
    start,
    end,
    pin: true,
    pinSpacing,
    ...rest,
  });
};

/**
 * Create a master timeline for complex animations
 */
export const createTimeline = (options = {}) => {
  const { defaults = { ease: "power3.out" }, ...rest } = options;

  return gsap.timeline({
    defaults,
    ...rest,
  });
};

/**
 * Batch scroll animations for multiple elements
 */
export const batchScrollAnimation = (elements, options = {}) => {
  const {
    duration = 1,
    y = 50,
    stagger = 0.15,
    ease = "power3.out",
    ...rest
  } = options;

  ScrollTrigger.batch(elements, {
    onEnter: (batch) => {
      gsap.from(batch, {
        opacity: 0,
        y,
        duration,
        stagger,
        ease,
        ...rest,
      });
    },
    start: "top 80%",
  });
};

export default {
  fadeIn,
  fadeInScroll,
  staggerFadeIn,
  staggerFadeInScroll,
  parallax,
  scaleIn,
  rotateFadeIn,
  textReveal,
  imageZoom,
  slideIn,
  pinElement,
  createTimeline,
  batchScrollAnimation,
};
