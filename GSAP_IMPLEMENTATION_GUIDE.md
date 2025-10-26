# GSAP Implementation Guide

## Đã Cài Đặt

- ✅ GSAP library đã được thêm vào `package.json`
- ✅ Custom hooks và utilities đã được tạo
- ✅ Example components đã được tạo

## Cấu Trúc Files

```
src/
├── hooks/
│   └── useGsap.js           # Custom React hooks cho GSAP
├── utils/
│   └── gsapAnimations.js    # Preset animations và utilities
└── components/
    └── sections/
        ├── HeroSectionGsap.jsx                  # Hero section với GSAP
        └── InvitationHeaderSectionGsap.jsx      # Invitation với scroll effects
```

## 1. Sử dụng Custom Hooks

### useGsap Hook

Hook cơ bản để tạo GSAP animations với automatic cleanup:

```jsx
import { useGsap } from "../hooks/useGsap";

const MyComponent = () => {
  const ref = useGsap((gsap) => {
    gsap.from(".element", {
      opacity: 0,
      y: 50,
      duration: 1,
    });
  });

  return (
    <div ref={ref}>
      <div className="element">Animated content</div>
    </div>
  );
};
```

### useGsapFadeIn Hook

Fade in animation với scroll trigger:

```jsx
import { useGsapFadeIn } from "../hooks/useGsap";

const MyComponent = () => {
  const ref = useGsapFadeIn({
    duration: 1.5,
    y: 100,
    delay: 0.5,
  });

  return (
    <div ref={ref}>
      <div className="gsap-fade-in">Content fades in on scroll</div>
    </div>
  );
};
```

### useGsapStagger Hook

Stagger animation cho nhiều elements:

```jsx
import { useGsapStagger } from "../hooks/useGsap";

const MyComponent = () => {
  const ref = useGsapStagger(".item", {
    duration: 0.8,
    stagger: 0.2,
    y: 30,
  });

  return (
    <div ref={ref}>
      <div className="item">Item 1</div>
      <div className="item">Item 2</div>
      <div className="item">Item 3</div>
    </div>
  );
};
```

## 2. Sử dụng Animation Utilities

### Import và sử dụng:

```jsx
import {
  fadeInScroll,
  parallax,
  staggerFadeInScroll,
  createTimeline
} from '../utils/gsapAnimations';

const MyComponent = () => {
  useEffect(() => {
    // Simple fade in on scroll
    fadeInScroll('.element', { y: 50, duration: 1 });

    // Parallax effect
    parallax('.image', { y: -100 });

    // Stagger animation
    staggerFadeInScroll('.list-item', { stagger: 0.2 });

    // Complex timeline
    const tl = createTimeline();
    tl.from('.title', { opacity: 0, y: 20 })
      .from('.subtitle', { opacity: 0, y: 20 }, '-=0.5')
      .from('.content', { opacity: 0, y: 20 }, '-=0.5');
  }, []);

  return (
    // Your JSX
  );
};
```

## 3. Available Animation Presets

### Fade Animations

- `fadeIn(element, options)` - Simple fade in
- `fadeInScroll(element, options)` - Fade in on scroll

### Stagger Animations

- `staggerFadeIn(elements, options)` - Stagger without scroll
- `staggerFadeInScroll(elements, options)` - Stagger with scroll

### Movement Animations

- `slideIn(element, direction, options)` - Slide from direction (left/right/top/bottom)
- `parallax(element, options)` - Parallax effect on scroll

### Scale & Rotate

- `scaleIn(element, options)` - Scale up animation
- `rotateFadeIn(element, options)` - Rotate and fade in

### Advanced Effects

- `imageZoom(element, options)` - Zoom image on scroll
- `textReveal(element, options)` - Character by character reveal
- `pinElement(element, options)` - Pin element during scroll

### Utilities

- `createTimeline(options)` - Create animation timeline
- `batchScrollAnimation(elements, options)` - Batch process scroll animations

## 4. Example Implementations

### Basic Component với GSAP

```jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

const SimpleComponent = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.from(boxRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return <div ref={boxRef}>Animated Box</div>;
};
```

### Timeline Animation

```jsx
import { useEffect, useRef } from "react";
import { createTimeline } from "../utils/gsapAnimations";

const TimelineComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = createTimeline();

    tl.from(".title", {
      opacity: 0,
      y: 30,
      duration: 1,
    })
      .from(
        ".subtitle",
        {
          opacity: 0,
          y: 30,
          duration: 1,
        },
        "-=0.5"
      )
      .from(
        ".content",
        {
          opacity: 0,
          y: 30,
          duration: 1,
        },
        "-=0.5"
      );
  }, []);

  return (
    <div ref={containerRef}>
      <h1 className="title">Title</h1>
      <h2 className="subtitle">Subtitle</h2>
      <p className="content">Content</p>
    </div>
  );
};
```

### Scroll Trigger Animation

```jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollComponent = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".animated-element", {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          markers: false, // Set true for debugging
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef}>
      <div className="animated-element">Animates on scroll</div>
    </section>
  );
};
```

## 5. Cách Thay Thế Framer Motion bằng GSAP

### Framer Motion:

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.5 }}
>
  Content
</motion.div>
```

### GSAP Equivalent:

```jsx
const MyComponent = () => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.from(ref.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });
  }, []);

  return <div ref={ref}>Content</div>;
};
```

## 6. Sử dụng Components Mẫu

### HeroSectionGsap

Component hero section với GSAP timeline animations:

```jsx
import HeroSectionGsap from "./components/sections/HeroSectionGsap";

// In App.jsx
<HeroSectionGsap heroImage={heroImage} />;
```

### InvitationHeaderSectionGsap

Component với parallax và scroll animations:

```jsx
import InvitationHeaderSectionGsap from "./components/sections/InvitationHeaderSectionGsap";

// In App.jsx
<InvitationHeaderSectionGsap invitationImage={invitationImage} />;
```

## 7. Best Practices

### 1. Cleanup với gsap.context()

```jsx
useEffect(() => {
  const ctx = gsap.context(() => {
    // Your animations here
    gsap.from(".element", { opacity: 0 });
  }, containerRef);

  return () => ctx.revert(); // Proper cleanup
}, []);
```

### 2. Register Plugins

```jsx
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
```

### 3. Use Timeline for Complex Animations

```jsx
const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
tl.from(".el1", { opacity: 0 })
  .from(".el2", { opacity: 0 }, "-=0.5") // Overlap
  .from(".el3", { opacity: 0 }, "+=0.2"); // Delay
```

### 4. Performance Tips

- Use `will-change: transform` in CSS cho animated elements
- Prefer transform properties (x, y, scale, rotation) over other properties
- Use `ScrollTrigger.batch()` cho nhiều elements tương tự

## 8. Common Options

### Animation Options

```javascript
{
  duration: 1,           // Animation duration (seconds)
  delay: 0.5,           // Delay before animation starts
  ease: 'power3.out',   // Easing function
  opacity: 0,           // Starting opacity
  x: 100,               // X position
  y: 50,                // Y position
  scale: 0.8,           // Scale
  rotation: 45,         // Rotation in degrees
  stagger: 0.2,         // Delay between multiple elements
}
```

### ScrollTrigger Options

```javascript
{
  trigger: element,                    // Element that triggers animation
  start: 'top 80%',                   // When to start (trigger position viewport position)
  end: 'bottom 20%',                  // When to end
  toggleActions: 'play none none reverse', // onEnter onLeave onEnterBack onLeaveBack
  scrub: true,                        // Link animation to scroll position
  pin: true,                          // Pin element during scroll
  markers: false,                     // Show debug markers
}
```

## 9. Debugging

Enable markers để debug ScrollTrigger:

```jsx
scrollTrigger: {
  trigger: element,
  start: 'top 80%',
  markers: true  // Shows trigger points
}
```

## 10. Resources

- [GSAP Documentation](https://greensock.com/docs/)
- [ScrollTrigger Documentation](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [GSAP Easing Visualizer](https://greensock.com/ease-visualizer/)
- [GSAP React Guide](https://greensock.com/react/)

## Next Steps

1. ✅ Thay thế Framer Motion animations trong existing components
2. ✅ Implement scroll-triggered animations cho sections
3. ✅ Add parallax effects cho images
4. ✅ Create interactive hover animations
5. ✅ Optimize performance với proper cleanup

Chúc bạn code vui vẻ! 🎉
