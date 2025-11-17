# About Hero Section - Image Setup Guide

## How to Add Your Figma Images

### Step 1: Export Images from Figma

1. Open your Figma design file
2. Select the hero section background/image
3. Right-click → **Export** or use the Export panel
4. Export settings:
   - **Format**: JPG (for photos) or PNG (for graphics with transparency)
   - **Size**: 2x or 3x (for retina displays)
   - **Recommended dimensions**: 1920x1080px or larger

### Step 2: Save Images to Project

1. Place your exported background image in: `public/images/`
2. Name it: `about-hero-background.jpg` (or `.png` if PNG format)

### Step 3: Update Component

Open `src/components/AboutHero.tsx` and update the image path:

```typescript
const heroBackgroundImage = '/images/about-hero-background.jpg';
```

Replace `about-hero-background.jpg` with your actual filename.

### Optional: Additional Images

If your Figma design includes:
- **Pattern overlays**: Export and add to `heroPatternImage`
- **Decorative elements**: Export and add to `heroDecorativeImage`

### Image Optimization Tips

- Use **WebP** format for better compression (if supported)
- Compress images using tools like TinyPNG before adding
- For large images, consider using Next.js Image Optimization

## Current Image Paths

The component expects images at:
- Main background: `/images/about-hero-background.jpg`
- Pattern overlay (optional): `/images/about-hero-pattern.png`
- Decorative element (optional): `/images/about-hero-decorative.svg`

## Responsive Breakpoints

The hero section is fully responsive with these breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px - 1280px
- **Large Desktop**: > 1280px





