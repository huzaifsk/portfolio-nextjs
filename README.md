# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Inspired by [chanhdai.com](https://chanhdai.com), featuring a clean design with dark mode support and smooth animations.

## ✨ Features

- 🎨 **Modern Design**: Clean, professional layout with attention to detail
- 🌓 **Dark Mode**: System preference detection with manual toggle
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- ⚡ **Performance**: Built with Next.js 16 for optimal performance
- 🎭 **Animations**: Smooth transitions using Framer Motion
- ♿ **Accessible**: Semantic HTML and ARIA attributes
- 🎯 **SEO Optimized**: Meta tags and Open Graph support

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Theme**: next-themes

## 📦 Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization Guide

### 1. Personal Information

Edit `/data/personal.ts` to update your personal information:

```typescript
export const personalData = {
  name: "Your Name",
  role: "Design Engineer",
  tagline: "Your tagline here",
  email: "your@email.com",
  // ... more fields
};
```

### 2. Skills & Technologies

Update `/data/skills.ts` to list your skills.

### 3. Work Experience

Edit `/data/experience.ts` to add your work history.

### 4. Projects

Update `/data/projects.ts` with your projects.

### 5. Blog Posts

Edit `/data/blog.ts` to add blog posts.

### 6. Awards & Recognition

Update `/data/awards.ts` with your achievements.

### 7. Metadata & SEO

Edit `/app/layout.tsx` to update SEO metadata.

## 📂 Project Structure

```
portfolio-nextjs/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── about.tsx           # About section
│   ├── awards.tsx          # Awards section
│   ├── blog.tsx            # Blog section
│   ├── experience.tsx      # Experience section
│   ├── footer.tsx          # Footer component
│   ├── hero.tsx            # Hero section
│   ├── navbar.tsx          # Navigation bar
│   ├── projects.tsx        # Projects section
│   ├── skills.tsx          # Skills section
│   └── theme-provider.tsx  # Theme provider
├── data/
│   ├── awards.ts           # Awards data
│   ├── blog.ts             # Blog posts data
│   ├── experience.ts       # Work experience data
│   ├── personal.ts         # Personal information
│   ├── projects.ts         # Projects data
│   └── skills.ts           # Skills data
└── lib/
    └── utils.ts            # Utility functions
```

## 🚀 Deployment

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design Principles

This portfolio follows these design principles:

1. **Clarity**: Clean, readable typography and generous whitespace
2. **Consistency**: Uniform spacing, colors, and components
3. **Accessibility**: Semantic HTML, proper contrast, keyboard navigation
4. **Performance**: Optimized images, lazy loading, minimal bundle size
5. **Responsiveness**: Mobile-first design that scales beautifully

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🙏 Credits

Design inspiration from [Chánh Đại's portfolio](https://chanhdai.com)

---

**Built with ❤️ using Next.js and TypeScript**
