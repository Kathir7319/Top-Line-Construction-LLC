# Top Line Construction LLC — 4-Page Authority Website

A premium, conversion-focused multi-page website built with **React**, **Vite**, **Tailwind CSS**, and **React Router** for **Top Line Construction LLC** — custom deck and screened porch builders serving Fuquay-Varina, Holly Springs, Apex, Garner, and Southern Wake County, NC ($10k–$30k+ turnkey projects).

---

## 🏗️ Live Site Pages & Architecture

1. **Home (`/`)**
   - High-impact architectural hero with local trust badges and primary consultation CTA.
   - 4-column trust & credibility strip (Fully Insured, NC Code Compliant, Transparent $10k–$30k+ Proposals, Fuquay-Varina Local).
   - Core Services 2-column feature cards with scope highlights and deep links.
   - 6-project visual portfolio grid with category filtering (All, Custom Decks, Screened Porches) and full lightbox modal inspection.
   - Interactive project budget estimator ($10k–$30k+ slider & specification tool).
   - Verified 5-star homeowner reviews from Fuquay-Varina and Holly Springs.
   - High-converting bottom banner with zero-pressure consultation CTA.

2. **Custom Decks (`/custom-decks`)**
   - Service hero engineered for North Carolina's heat and seasonal weather.
   - **Interactive Material Comparison Guide**: Detailed side-by-side comparison between **Trex® Composite Decking** and **Pressure-Treated #1 Pine** (lifespan, maintenance, investment, aesthetics, best fit).
   - Structural standards breakdown (12" joist spacing, Simpson Strong-Tie® hardware, rot-proof ledger flashing, custom railing systems, low-voltage LED riser lighting, deck resurfacing).
   - Curated custom decks gallery.

3. **Screened Porches & Additions (`/screened-porches`)**
   - Service hero for bug-free, four-season covered outdoor living.
   - Custom features & finishes grid (Seamless roofline tie-ins, vaulted tongue-and-groove ceilings, high-visibility & pet-resistant screens, Eze-Breeze® window compatibility).
   - **Interactive 5-Step Project Timeline**: Visual phased roadmap from Step 1 In-Home Measurement to Step 5 Final Municipal Inspection & Walkthrough.
   - Screened porch inspiration gallery.

4. **Book Consultation (`/consultation` or `/book-consultation`)**
   - 2-Column conversion layout (Trust value proposition & what to expect vs. project intake form).
   - Qualifying intake form capturing:
     - Full Name & Phone Number (Required)
     - Email Address & Street Address / Zip Code (Confirms Wake County service area)
     - Project Type dropdown (Trex Composite, Wood Deck, Screened Porch, Deck Resurfacing, Home Addition)
     - Estimated Budget Range dropdown ($10k–$15k, $15k–$25k, $25k–$35k+, Need Guidance)
     - Target Start Timeframe dropdown (Within 30 Days, 1–3 Months, Next Season)
     - Preferred consultation time window
     - Brief project notes text area
   - Interactive Objection-Handling FAQ accordion block answering insurance, permits, pricing, and timelines.

---

## 🎨 Brand Identity & Custom Logo

- **Custom Architectural Logo Component (`<Logo />`)**:
  - Incorporates an elevated gable roofline truss, architectural keystone, and 3 horizontal foundation/deck planks highlighting the top plank ("Top Line").
  - Palette: Deep Slate (`#0B1325`), Warm Architectural Amber/Cedar (`#D97706`, `#F59E0B`), and Clean White.
  - Available as SVG assets in `/public/logo.svg` and `/public/favicon.svg`.

---

## 🚀 Getting Started Locally

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 🐙 Step-by-Step GitHub Push

To push this repository to your GitHub account:

1. Create a new repository on [GitHub](https://github.com/new) (e.g. `top-line-construction`). Do **not** initialize with README or license.
2. In your terminal, run:

```bash
# Add your GitHub remote URL
git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/<YOUR-REPO-NAME>.git

# Ensure default branch is main
git branch -M main

# Push your code
git push -u origin main
```

---

## ⚡ Vercel Deployment

This project includes a pre-configured `vercel.json` file with Single-Page Application (SPA) URL rewrites so deep routes (`/custom-decks`, `/screened-porches`, `/consultation`) load cleanly without 404 errors.

### Option A: Deploy via Vercel Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New"** &rarr; **"Project"**.
3. Select your GitHub repository (`top-line-construction`).
4. Vercel automatically detects **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **"Deploy"**. Your website will be live with an SSL HTTPS URL in ~30 seconds!

### Option B: Deploy via Vercel CLI
```bash
# Deploy to preview
npx vercel

# Deploy directly to production
npx vercel --prod
```

---

## 📱 Mobile Responsiveness Features
- Collapsible navigation drawer with quick-action click-to-call.
- Persistent mobile bottom sticky bar (`Call (919) 888-2931` and `Free Estimate`).
- Responsive comparison tables that transform into legible stacked cards on small screens.
- Responsive touch-friendly step navigation and lightboxes.
