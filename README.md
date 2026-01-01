# Nimbus Wandering - Link Page

A mobile-first link-in-bio page featuring parallax scrolling, share modals, and affiliate product links for cat gear.


## Features

- **Parallax hero image** with smooth scroll effects
- **Dynamic share buttons** (Multiple socials, Copy, Native share)
- **Product showcase grid** with images and affiliate links
- **Privacy Policy modal** with affiliate disclosure
- **Responsive design** - perfect for mobile sharing
- **Customizable** colors, images, and links via props

## 🚀 Quick Start

```bash
npm create vite@latest link-in-bio -- --template react
cd link-in-bio
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## 1. Configure Tailwind

```tsx
// vite.config.js
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

```css
/* src/index.css */
@import "tailwindcss";
```

## 2. Replace App.jsx

Copy the main component code into src/App.jsx.

## 3. Add your data

You have **two options** to add your links and images:

### Option 1: External URLs (easiest)
```tsx
const links = [
  {
    href: "https://amazon.com/",
    label: "Interactive Laser Toy",
    image: "https://your-product-image.jpg"
  }
];
```

### Option 2: Local assets (faster, private)

1. Add images to `public/assets/` folder
2. Import them in your component:

```tsx
import laserToy from './assets/laser-toy.jpg';

const links = [
  {
    href: "https://amazon.com/",
    label: "Interactive Laser Toy",
    image: laserToy
  }
];
```

### Social media section

```tsx
import { InstagramIcon } from 'react-icons/fa6';

const media = [
  {
    href: "https://instagram.com/your-profile",
    icon: InstagramIcon
  }
];
```

## 4. Run 
```bash
npm run dev
```

---

## 🛠 Components

- **LinkShareModal** - Share dialog with dynamic messages
- **Parallax background** - Fixed image with scroll transform
- **Share buttons** - Multiple socials + copy + native share
- **Privacy modal** - Legal compliance

## 🎨 Styling

- **TailwindCSS** with custom backdrop-blur effects
- **Glassmorphism** design (bg-black/10, backdrop-blur-sm)
- **Rounded-3xl** cards with hover animations
- **Gradient overlays** for smooth image transitions


## 🙏 Credits

- **Icons**: 
  - Heroicons 
  - Font Awesome Free 6.5.1 [https://fontawesome.com/license/free](https://fontawesome.com/license/free)
- **Design**: Custom glassmorphism + parallax  
- **Stack**: Vite + React (JSX) + TailwindCSS
- **Cat**: Nimbus 🐱✨
