# Image Migration Guide

All components have been updated to use local image paths instead of localhost URLs. 

## Directory Structure

```
public/
├── images/          # For large images (PNG, JPG)
│   ├── about-meeting.jpg
│   ├── project-1.png
│   ├── project-2.png
│   └── project-3.png
├── icons/           # For SVG icons
│   ├── Core Values Icons
│   ├── Services Icons
│   ├── Industries Icons
│   └── Other Icons
└── background.jpg   # Hero background (already added)
```

## Images Already Added

✅ `public/background.jpg` - Hero section background
✅ `public/images/about-meeting.jpg` - About section team image
✅ `public/vector-2.png` - Hero underline vector

## Images That Need to Be Added

### Project Images (in `/public/images/`)
- `project-1.png` - First featured project
- `project-2.png` - Second featured project
- `project-3.png` - Third featured project

### Core Values Icons (in `/public/icons/`)
- `innovation-icon-bg.svg`
- `innovation-icon.svg`
- `collaboration-icon-bg.svg`
- `collaboration-icon-1.svg`
- `collaboration-icon-2.svg`
- `excellence-icon-bg.svg`
- `excellence-icon.svg`
- `integrity-icon-bg.svg`
- `integrity-icon.svg`

### Services Icons (in `/public/icons/`)
- `innovation-icon.svg` (reused from Core Values)
- `mobile-dev-icon.svg`
- `web-dev-icon.svg`
- `cloud-icon.svg`
- `cybersecurity-icon.svg`
- `analytics-icon.svg`

### Industries Icons (in `/public/icons/`)
- `transport-icon.svg`
- `finance-icon.svg`
- `education-icon.svg`
- `healthcare-icon.svg`
- `retail-icon.svg`
- `startup-icon.svg`

### Other Icons (in `/public/icons/`)
- `process-ellipse.svg` - Process step circles
- `mail-icon.svg` - Contact icons
- `github-icon.svg` - Footer social icon
- `twitter-icon.svg` - Footer social icon
- `social-ellipse.svg` - Social icon backgrounds
- `footer-line.svg` - Footer divider line

## How to Add Images

1. **From Figma**: Export the images from your Figma design
2. **Place them** in the appropriate directories (`public/images/` or `public/icons/`)
3. **Use the exact filenames** listed above

## Component Updates

All components have been updated to:
- Use Next.js `Image` component for optimized loading
- Reference local paths in `/public/` folder
- Include proper sizing and responsive attributes

## Next Steps

1. Export images from Figma design
2. Save them to the correct directories with the exact filenames
3. The components will automatically use the local images

