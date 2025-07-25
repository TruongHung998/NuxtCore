/**
 * Wedding Website Performance Utilities
 * Handles image optimization, lazy loading, and performance monitoring
 */

// Image lazy loading utility
export const initLazyLoading = () => {
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("loading");
          img.classList.add("loaded");
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll("img[data-src]").forEach((img) => {
      imageObserver.observe(img);
    });
  }
};

// WebP support detection
export const supportsWebP = () => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  });
};

// Image optimization helper
export const optimizeImage = (src, width = 800, quality = 80) => {
  // This would integrate with your image optimization service
  // For now, returns the original src
  return src;
};

// Performance monitoring
export const trackPerformance = () => {
  if ("performance" in window) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType("navigation")[0];
        console.log(
          "Page Load Time:",
          perfData.loadEventEnd - perfData.loadEventStart,
          "ms"
        );
        console.log(
          "DOM Content Loaded:",
          perfData.domContentLoadedEventEnd -
            perfData.domContentLoadedEventStart,
          "ms"
        );

        // Track Core Web Vitals
        if ("web-vitals" in window) {
          import("web-vitals").then(
            ({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
              getCLS(console.log);
              getFID(console.log);
              getFCP(console.log);
              getLCP(console.log);
              getTTFB(console.log);
            }
          );
        }
      }, 0);
    });
  }
};

// Smooth scroll utility
export const smoothScroll = (target, duration = 1000) => {
  const targetElement = document.querySelector(target);
  if (!targetElement) return;

  const targetPosition = targetElement.offsetTop - 80; // Account for fixed nav
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  const ease = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  requestAnimationFrame(animation);
};

// Device detection
export const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  } else if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};

// Touch event optimization
export const optimizeTouchEvents = () => {
  // Add passive event listeners for better scroll performance
  let passiveSupported = false;
  try {
    const options = {
      get passive() {
        passiveSupported = true;
        return false;
      },
    };
    window.addEventListener("test", null, options);
    window.removeEventListener("test", null, options);
  } catch (err) {
    passiveSupported = false;
  }

  const eventOptions = passiveSupported ? { passive: true } : false;

  document.addEventListener("touchstart", () => {}, eventOptions);
  document.addEventListener("touchmove", () => {}, eventOptions);
};

// Preload critical resources
export const preloadCriticalResources = () => {
  const criticalImages = [
    "/assets/hinhcuoi/HUG00025.jpg", // Hero image
    "/assets/hinhcuoi/HUG00052.jpg", // First gallery image
  ];

  criticalImages.forEach((src) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    document.head.appendChild(link);
  });
};

// Initialize all performance optimizations
export const initPerformanceOptimizations = () => {
  // Run on DOM content loaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      initLazyLoading();
      optimizeTouchEvents();
      preloadCriticalResources();
      trackPerformance();
    });
  } else {
    initLazyLoading();
    optimizeTouchEvents();
    preloadCriticalResources();
    trackPerformance();
  }
};

// Service Worker registration
export const registerServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("SW registered: ", registration);
        })
        .catch((registrationError) => {
          console.log("SW registration failed: ", registrationError);
        });
    });
  }
};

// Animation frame throttle
export const throttle = (func, limit) => {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Debounce utility
export const debounce = (func, wait, immediate) => {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

// CSS animation detection
export const supportsAnimations = () => {
  const elm = document.createElement("div");
  const animationSupport = elm.style.animationName !== undefined;
  const transitionSupport = elm.style.transitionProperty !== undefined;
  return animationSupport && transitionSupport;
};

export default {
  initLazyLoading,
  supportsWebP,
  optimizeImage,
  trackPerformance,
  smoothScroll,
  getDeviceType,
  optimizeTouchEvents,
  preloadCriticalResources,
  initPerformanceOptimizations,
  registerServiceWorker,
  throttle,
  debounce,
  supportsAnimations,
};
