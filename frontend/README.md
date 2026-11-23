# WebNote Technologies – Frontend Application

Production-ready Next.js 16 frontend for WebNote Technologies Private Limited.

## Tech Stack
- **Framework**: Next.js 16.4.6 (App Router with Turbopack)
- **Language**: TypeScript 5 Strict
- **Styling**: Tailwind CSS v4.3.3 + Custom Glassmorphism Mesh Gradients
- **3D & Graphics**: Three.js + WebGL2 Fluid Dynamics + SimpleIcons Interactive Cloud
- **Icons**: Devicon (bundled locally) + Lucide Icons
- **Animation**: GSAP 3.15 + Hardware-accelerated CSS transforms

## Available Scripts

In this directory, you can run:

```bash
npm run dev
# Starts Next.js development server at http://localhost:3000

npm run build
# Compiles the optimized production build and generates 45 static pages

npm run start
# Starts the production server locally

npm run lint
# Runs ESLint code style and syntax checks

npm run test:responsive
# Executes automated Playwright browser tests across 9 viewports (320px - 1440px)
```

## Vercel Deployment Instructions
When deploying this repository on Vercel:
1. Link your GitHub repository.
2. Under **Project Settings** → **General** → **Root Directory**, set the directory to:
   ```text
   frontend
   ```
3. Deploy! Next.js is automatically detected.
