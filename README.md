# Nexora Healthcare — Web Portal

Official responsive web application for **Nexora Healthcare Pvt. Ltd.** — Turnkey hospital equipment and medical imaging systems supplier in India (Digital X-Ray, Ultrasound, C-Arm, CT, MRI, ICU & Operation Theatre setups).

---

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 7](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Outfit & Syne (Google Fonts)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or newer) installed.

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/kamleshgupta905/nexora-healthcare.git
cd nexora-healthcare
npm install
```

### Development Server

Run the development server locally:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### Production Build

Create an optimized production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 📁 Project Structure

```text
├── public/                 # Static assets (images, favicon, robots.txt, sitemap)
│   ├── images/             # High-resolution equipment imagery
│   ├── favicon.svg         # Brand SVG favicon
│   ├── robots.txt          # SEO crawlers directive
│   └── sitemap.xml         # XML Sitemap
├── src/
│   ├── pages/              # Route view pages (Home, About, Products, Contact, etc.)
│   ├── components.tsx      # Shared UI components (Navbar, Footer, Hero, QuoteForm)
│   ├── data.ts             # Product catalog, categories, specifications & contact data
│   ├── router.tsx          # Client-side hash routing handler
│   ├── seo.ts              # Dynamic metadata & JSON-LD schema injection
│   ├── index.css           # Global Tailwind & design system theme variables
│   ├── App.tsx             # Root application component
│   └── main.tsx            # Application entry point
├── index.html              # HTML template with SEO meta tags & Schema.org markup
├── package.json            # Project dependencies and npm scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build configuration
```

---

## 📄 License

Private repository. All rights reserved © Nexora Healthcare Pvt. Ltd.
