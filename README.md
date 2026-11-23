# WebNote Technologies – Enterprise Digital Engineering & AI Growth Agency

WebNote Technologies is a leading global digital engineering agency specializing in enterprise-grade web development, scalable mobile applications, strategic digital marketing solutions, and autonomous AI automation.

This repository is structured for clean separation of concerns, independent frontend deployment on **Vercel**, and future backend microservices integration.

---

## 📂 Repository Architecture

```text
webnotetechnologies/
├── frontend/                     # Complete, self-contained Next.js frontend application
│   ├── public/                   # Static assets, fonts, high-resolution WebP/PNG images, logos
│   ├── src/
│   │   ├── app/                  # Next.js 16 App Router pages and dynamic routes
│   │   │   ├── blogs/            # Technical research & publication articles
│   │   │   ├── career/           # Global careers directory & direct submission application
│   │   │   ├── contact/          # Multi-channel enterprise consultation request portal
│   │   │   ├── cookie-policy/    # EU/US GDPR & CCPA cookie compliance documentation
│   │   │   ├── portfolio/        # Enterprise architecture breakdowns & POC case studies
│   │   │   ├── privacy-policy/   # Enterprise privacy & data protection policy
│   │   │   ├── technicals/       # Full-stack engineering architecture & tech directory
│   │   │   ├── terms/            # Master services agreement & terms of engagement
│   │   │   ├── what-we-do/       # Enterprise capabilities catalog & dedicated web service
│   │   │   ├── globals.css       # Tailwind CSS v4 styling & responsive mesh gradients
│   │   │   ├── layout.tsx        # Centralized RootLayout (Geist fonts, DevIcon, Nav, Footer)
│   │   │   ├── not-found.tsx     # Custom 404 error experience
│   │   │   ├── page.tsx          # High-converting flagship homepage with 3D fluid hero
│   │   │   ├── robots.ts         # Automated search engine crawler directives
│   │   │   └── sitemap.ts        # Dynamic XML sitemap generator
│   │   ├── components/
│   │   │   ├── canvas3d/         # Three.js & WebGL2 fluid simulations (IntersectionObserver optimized)
│   │   │   ├── navigation/       # Navbar, MobileMenu, Footers, and MegaMenus
│   │   │   └── ui/               # Reusable atomic UI components (Badge, Button, Card, SectionHeading)
│   │   ├── data/                 # Master company info, service catalogs, tech stacks, portfolio
│   │   └── lib/                  # Utility helpers, devicon class mapping, and site constants
│   ├── scripts/                  # Automated Playwright cross-viewport test suites
│   ├── .env.example              # Environment variables template
│   ├── .gitignore                # Frontend-specific build & dependency ignore patterns
│   ├── eslint.config.mjs         # Strict ESLint configuration
│   ├── next.config.ts            # Next.js 16 configuration with Turbopack & asset redirects
│   ├── package.json              # Frontend dependencies and automated scripts
│   ├── tsconfig.json             # TypeScript strict mode configuration
│   └── README.md                 # Frontend-specific documentation
├── backend/                      # Reserved for future backend APIs & microservices
│   └── .gitkeep                  # Empty directory preservation
├── README.md                     # Root repository overview & deployment guide
└── .gitignore                    # Global repository ignore rules
```

---

## 🚀 Quick Start (Local Development)

The frontend application is completely self-contained inside `frontend/`.

### Prerequisites
- **Node.js**: v20.x or v22.x LTS
- **npm**: v10.x+

### 1. Clone the repository
```bash
git clone https://github.com/webnotetechnologies/webnotetechnologies.git
cd webnotetechnologies/frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
npm run build
```

### 5. Run responsive & overflow test suite
```bash
npm run test:responsive
```

---

## 🌐 Deploying the Frontend to Vercel

The frontend is engineered to be deployed independently to Vercel in less than 2 minutes.

### Step-by-Step Instructions:

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "feat: complete WebNote Technologies frontend architecture"
   git push origin main
   ```

2. **Log in to [Vercel](https://vercel.com)**:
   - Click **"Add New..."** → **"Project"**.
   - Select your `webnotetechnologies` repository.

3. **Configure Project Settings (CRITICAL)**:
   - **Root Directory**: Click "Edit" and set this to **`frontend`**.
   - **Framework Preset**: Automatically detected as **Next.js**.
   - **Build Command**: `npm run build` (default).
   - **Output Directory**: `.next` (default).
   - **Install Command**: `npm install` (default).

4. **Environment Variables**:
   - Add `NEXT_PUBLIC_SITE_URL` = `https://webnotetechnologies.com` (or your domain).

5. **Click "Deploy"**:
   - Vercel will install dependencies, run TypeScript verification, statically pre-render all 45 pages, and provide a live production URL with global Edge CDN caching.

---

## 📱 Mobile Responsiveness & Viewport Compatibility

The frontend has been verified using Playwright headless browser testing across all required viewports with **zero horizontal scrolling** and touch-friendly interactions:

| Viewport Width | Device Category | Status | Horizontal Overflow |
| :--- | :--- | :---: | :---: |
| **320px** | Mobile Extra Small (iPhone SE 1st Gen) | ✅ Passed | 0px |
| **360px** | Android Compact (Galaxy S8/S9) | ✅ Passed | 0px |
| **375px** | iPhone SE / iPhone 8 | ✅ Passed | 0px |
| **390px** | iPhone 12 / 13 / 14 / 15 Standard | ✅ Passed | 0px |
| **430px** | iPhone 14 / 15 Pro Max | ✅ Passed | 0px |
| **768px** | iPad Mini / Portrait Tablets | ✅ Passed | 0px |
| **1024px** | iPad Pro / Small Laptops | ✅ Passed | 0px |
| **1366px** | Standard Laptops | ✅ Passed | 0px |
| **1440px+** | Desktop Displays & Ultrawides | ✅ Passed | 0px |

### Key Responsive Fixes Implemented:
- `overflow-x: clip;` and `max-width: 100vw;` enforced across root `html`, `body`, and container layers.
- Mobile navigation menu with body scroll locking, accessible focus handling, and touch targets >= 44px.
- Fluid fluid typography using standard Tailwind responsive utility steps.
- Touch-friendly form inputs with 16px minimum font size on iOS to prevent auto-zooming.
- Stat counters and grids configured to collapse to 1 or 2 columns gracefully on narrow viewports without overlap.

---

## ⚡ Performance & 3D WebGL Optimizations

- **IntersectionObserver Render Loops**: All Three.js canvas components (`GlobalGlobe3DCanvas`, `Services3DCanvas`, `Technicals3DCanvas`, `Hero3DCanvas`, `SculptureHero`) automatically pause their `requestAnimationFrame` loops when scrolled out of the viewport or when the tab is hidden, eliminating idle battery drain and scroll lag.
- **DPR Scaling**: Renderer device pixel ratio is clamped to 1.0 on mobile devices (<768px) and 1.5 on desktop, eliminating mobile GPU thermal throttling.
- **Local DevIcon Bundling**: Replaced render-blocking external jsDelivr CDN links with local npm bundling (`devicon/devicon.min.css`), improving First Contentful Paint and offline capability.
- **Resource Disposal**: Complete WebGL geometry, material, texture, and listener disposal on component unmount to prevent memory leaks during client-side navigation.
- **Reduced Motion Support**: Automatically honors `prefers-reduced-motion: reduce` by dampening 3D rotation velocities and marquee speeds.

---

## 🔒 Security & Code Quality

- **Zero Vulnerabilities**: Verified via `npm audit` with 0 known vulnerabilities.
- **Environment Variables**: No sensitive tokens or secrets are committed. Template provided in `frontend/.env.example`.
- **Form Sanitization**: Strict input typing, required field attributes, and validated states across career applications and contact submissions.
- **TypeScript Strict Mode**: Fully typed across all data models, components, and server page parameters.

---

## 🔮 Future Backend Integration Roadmap

When backend development begins:
1. Initialize backend microservices inside the `backend/` directory (e.g. Node.js/Express, Python/FastAPI, or Go).
2. Set `NEXT_PUBLIC_API_URL` in `frontend/.env.local` pointing to the backend API domain.
3. Wire the contact form submission handler (`handleSubmit` in `frontend/src/app/contact/page.tsx`) and job application handler (`frontend/src/app/career/page.tsx`) to dispatch POST requests to `NEXT_PUBLIC_API_URL`.
4. Deploy the backend independently (e.g., AWS, Render, Railway, DigitalOcean, or Google Cloud Platform).

---

## 📄 License & Attribution

Copyright © 2026 WebNote Technologies Private Limited. All rights reserved.
