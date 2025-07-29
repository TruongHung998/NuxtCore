# Wedding Website Development Prompts for Cursor

## Initial Setup Prompt

```
Create a modern React wedding website with the following specifications:

DESIGN REQUIREMENTS:
- Primary color: #94a094 (sage green)
- Secondary color: #f8f8f6 (off-white)
- Modern, elegant, soft font family (use Google Fonts like Playfair Display for headings and Source Sans Pro for body text)
- All images from 'hinhcuoi' folder in webp format
- No footer

TECHNICAL REQUIREMENTS:
- React.js with modern hooks
- Install necessary libraries: react-intersection-observer, framer-motion, react-masonry-css
- Responsive design
- Step-based scrolling (4 distinct sections)
- Loading screen that preloads all images from hinhcuoi folder

WEDDING DETAILS:
- Groom: Viet Hung
- Bride: Lan Huyen  
- Wedding Date: November 30, 2025
- Venue: 455 Nguyen Van Tao, Nha Be, Ho Chi Minh City

Create the basic project structure and main App.js component with routing for 4 sections.
```

## Section 1 - Hero Animation Prompt

```
Create Section 1 - Hero section with karaoke-style lyrics animation:

REQUIREMENTS:
- Single background image: HUG00052.webp from hinhcuoi folder
- Full viewport height background cover
- Animated karaoke-style lyrics appearing one line at a time
- Each word should scale up and highlight when "sung"
- Only show one line at a time on screen
- Use elegant typography with smooth transitions

LYRICS (animate in this order):
1. "Georgia, wrap me up in all your-"
2. "I want you in my arms"
3. "Oh, let me hold you"
4. "I'll never let you go again like I did"
5. "I would never fall in love again until I found her"
6. "I said, I would never fall unless it's you I fall into"
7. "I was lost within the darkness, but then I found her"
8. "I found you"

ANIMATION SPECS:
- Each word scales from 1 to 1.2 when highlighted
- Highlighted words use primary color #94a094
- Non-highlighted words use semi-transparent white
- 0.5s delay between words
- 2s delay between lines
- Smooth fade in/out transitions
- Loop the animation after completion

Use framer-motion for animations. Center the text both horizontally and vertically.
```

## Section 2 - Wedding Info Prompt

```
Create Section 2 - Wedding information and countdown:

LAYOUT:
- Elegant card design with soft shadows
- Centered content with generous padding
- Background: #f8f8f6 with subtle texture or gradient

CONTENT TO DISPLAY:
- Couple names: "Viet Hung & Lan Huyen" (large, elegant heading)
- Wedding date: "November 30, 2025" (formatted beautifully)
- Venue address: "455 Nguyen Van Tao, Nha Be, Ho Chi Minh City"
- Live countdown timer to wedding date

COUNTDOWN TIMER:
- Show days, hours, minutes, seconds
- Each unit in separate styled boxes
- Update every second
- Use primary color #94a094 for accent
- Format: "123 DAYS • 14 HOURS • 30 MINUTES • 45 SECONDS"

ANIMATIONS:
- Fade in from bottom when section comes into view
- Gentle floating animation for the main card
- Numbers should flip/animate when countdown updates

Use elegant spacing and typography hierarchy. Make it feel romantic and sophisticated.
```

## Section 3 - Photo Gallery Prompt

```
Create Section 3 - Masonry photo gallery:

GALLERY REQUIREMENTS:
- Masonry layout using react-masonry-css
- Display all images from hinhcuoi folder except HUG00052.webp
- Variable heights to create natural masonry effect
- Images should fit tightly together like bricks
- 3-4 columns on desktop, 2 on tablet, 1 on mobile

INTERACTIONS:
- Hover effects: scale up slightly (1.05) with smooth transition
- Add subtle shadow on hover
- Click to open full-size lightbox modal
- Smooth animations when scrolling into view (stagger effect)

LIGHTBOX MODAL:
- Dark overlay background
- Centered image with max dimensions
- Close button (X) in top right
- Click outside to close
- Navigation arrows for next/previous image
- Smooth fade in/out transitions

SCROLL ANIMATIONS:
- Images animate in from bottom as user scrolls
- Staggered animation (0.1s delay between each image)
- Use intersection observer to trigger animations
- Smooth easing transitions

STYLING:
- Rounded corners on images
- Subtle border or shadow
- Responsive spacing between images
- Loading states for images

Implement lazy loading for performance. Use framer-motion for smooth animations.
```

## Section 4 - Map Integration Prompt

```
Create Section 4 - Wedding venue map:

MAP REQUIREMENTS:
- Embed Google Maps showing venue location
- Address: 455 Nguyen Van Tao, Nha Be, Ho Chi Minh City
- Custom marker with wedding-themed icon
- Responsive map container

STYLING:
- Full width section with proper padding
- Map height: 400px on desktop, 300px on mobile
- Elegant section title: "Find Us Here" or "Wedding Venue"
- Address details displayed above or beside map
- Consistent color scheme with rest of site

FUNCTIONALITY:
- Clickable map for directions
- Zoom controls enabled
- Custom map styling if possible (muted colors matching theme)
- Loading state while map loads

LAYOUT OPTIONS:
- Option A: Full width map with floating address card
- Option B: Split layout - address info left, map right
- Option C: Stacked layout for mobile responsiveness

Include proper error handling for map loading failures. Add smooth scroll-triggered animation when section comes into view.

Use either Google Maps Embed API or react-google-maps library. Ensure proper API key handling and responsive design.
```

## Loading Screen Prompt

```
Create an elegant loading screen component:

FUNCTIONALITY:
- Show on initial page load
- Preload ALL images from hinhcuoi folder
- Track loading progress (0-100%)
- Hide loading screen when all images loaded + minimum 2s display time

DESIGN:
- Clean, minimal design
- Primary color #94a094 and secondary #f8f8f6
- Couple names: "Viet Hung & Lan Huyen"
- Wedding date: "30.11.2025"
- Loading progress indicator (elegant progress bar or percentage)
- Subtle animation (heartbeat, fade pulse, or elegant spinner)

ANIMATIONS:
- Smooth fade in when component mounts
- Progress bar fills smoothly
- Text animations (typewriter effect for names?)
- Smooth fade out transition to main content
- Optional: Floating hearts or floral elements

TECHNICAL:
- Use Promise.all() to preload images
- Track individual image load progress
- Minimum loading time to prevent flash
- Smooth transition to main content
- Handle loading errors gracefully

Make it feel romantic and anticipatory, not just functional. The loading screen should build excitement for the wedding content.
```

## Final Integration Prompt

```
Integrate all sections with smooth step-based scrolling:

SCROLLING BEHAVIOR:
- Implement step-based/snap scrolling between sections
- Each section takes full viewport height
- Smooth transitions between sections
- Disable free scrolling, only allow section-to-section movement

NAVIGATION:
- Optional: Subtle navigation dots on side
- Scroll wheel moves one section at a time
- Touch/swipe support for mobile
- Keyboard navigation (arrow keys, space)

PERFORMANCE OPTIMIZATIONS:
- Lazy loading for non-critical images
- Optimize webp images for web
- Preload critical resources
- Smooth 60fps animations
- Efficient re-renders

RESPONSIVE DESIGN:
- Mobile-first approach
- Test on various screen sizes
- Adjust layouts for tablet/mobile views
- Touch-friendly interactions
- Readable text on all devices

FINAL TOUCHES:
- Add subtle background textures or gradients
- Consistent spacing and typography scale
- Smooth page transitions
- Error boundaries for graceful failures
- SEO meta tags and accessibility features

Ensure everything works cohesively as a single-page wedding website experience.
```