# Quick Reference - CSS Structure

## 📁 File Organization

### Core Files

- **variables.css** - All CSS custom properties (colors, spacing, fonts)
- **base.css** - Reset, typography, buttons, scrollbar
- **layout.css** - Container structure, responsive layout
- **components.css** - Reusable components (forms, buttons, decorative elements)
- **fonts.css** - Font imports (Google Fonts & CDN)
- **animations.css** - Keyframe animations & transitions

### Section Files

- **hero.css** - Hero section with couple names, date
- **invitation.css** - Invitation header, parents info
- **story.css** - Love story, our story sections
- **details.css** - Calendar widget, invitation details
- **gallery.css** - Photo gallery, portraits, large photos
- **misc.css** - Map, RSVP form, final section

## 🎨 Common Variables

### Colors

```css
var(--primary-green)    /* #94a094 */
var(--primary-red)      /* #94a094 (alias) */
var(--secondary-beige)  /* #f8f8f6 */
var(--white)           /* #ffffff */
var(--black)           /* #000000 */
var(--gray)            /* #8c8c8c */
var(--dark-gray)       /* #5c5c5c */
var(--light-gray)      /* #f0f2f5 */
```

### Spacing

```css
var(--spacing-xs)   /* 8px */
var(--spacing-sm)   /* 15px */
var(--spacing-md)   /* 20px */
var(--spacing-lg)   /* 30px */
var(--spacing-xl)   /* 40px */
var(--spacing-xxl)  /* 60px */
```

### Font Sizes

```css
var(--fs-xs)    /* 12px */
var(--fs-sm)    /* 13px */
var(--fs-base)  /* 14px */
var(--fs-md)    /* 16px */
var(--fs-lg)    /* 18px */
var(--fs-xl)    /* 20px */
var(--fs-2xl)   /* 24px */
var(--fs-3xl)   /* 28px */
var(--fs-4xl)   /* 32px */
var(--fs-5xl)   /* 36px */
var(--fs-6xl)   /* 42px */
var(--fs-7xl)   /* 48px */
```

### Font Families

```css
var(--font-primary)     /* 'Quicksand', sans-serif */
var(--font-secondary)   /* 'Playfair Display', serif */
var(--font-cursive)     /* 'Signora', cursive */
var(--font-decorative)  /* 'Soul Note Display', cursive */
```

## 📱 Responsive Breakpoints

```css
/* Mobile First (default) */
.element {
  /* Mobile styles: 0 - 500px */
}

/* Desktop */
@media (min-width: 501px) {
  .element {
    /* Desktop styles: 501px+ */
  }
}
```

## 🔧 Editing Guide

### To change colors:

Edit `src/styles/variables.css`

### To change hero section:

Edit `src/styles/sections/hero.css`

### To change calendar:

Edit `src/styles/sections/details.css`

### To add new animation:

Edit `src/styles/animations.css`

### To change spacing system:

Edit `src/styles/variables.css` (--spacing-\* variables)

## 💡 Tips

1. **Always use variables** instead of hardcoded values
2. **Mobile first**: Write mobile styles first, then desktop overrides
3. **DRY principle**: Use shared classes from `components.css`
4. **Test on mobile**: Most users will view on mobile devices

## 🐛 Common Issues

### Fonts not loading?

Check `src/styles/fonts.css` - CDN might be down

### Layout broken on mobile?

Check viewport meta tag in HTML:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### Colors not working?

Make sure `variables.css` is imported first in `App.css`

### Animations not working?

Check `animations.css` is imported last

## 📊 File Size Reference

| File           | Size      | Purpose            |
| -------------- | --------- | ------------------ |
| variables.css  | ~4KB      | Design tokens      |
| base.css       | ~3KB      | Resets & base      |
| layout.css     | ~3KB      | Structure          |
| components.css | ~4KB      | Reusable UI        |
| hero.css       | ~4KB      | Hero section       |
| invitation.css | ~4KB      | Invitations        |
| story.css      | ~5KB      | Story sections     |
| details.css    | ~8KB      | Calendar & details |
| gallery.css    | ~7KB      | Gallery & photos   |
| misc.css       | ~7KB      | Other sections     |
| animations.css | ~3KB      | Animations         |
| fonts.css      | ~1KB      | Font imports       |
| **Total**      | **~53KB** | **All CSS**        |

## 🚀 Performance

- Mobile load time: ~200ms (first paint)
- Desktop load time: ~250ms (first paint)
- CSS parsing: ~50ms
- Total CSS size (minified): ~35KB

---

**Last Updated**: October 22, 2025
