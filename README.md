# ChemTech - Climate Technology Dashboard and Tools

A modern climate tech dashboard for chemical engineering, emissions visualization, workflow management, tech knowledge, and process calculator tools. Built with Vite, React, TypeScript, TailwindCSS, shadcn/ui, Radix, Plotly, and more.

---

## Features & Modules

- **Dashboard:** Emission metrics, interactive map, sector charts
- **Calculator:** Cost and process calculators for chemical engineers
- **Knowledge Hub:** Global case studies, workflows
- **Visualizations:** Advanced charts (recharts, plotly.js)
- **UI:** Modern, accessible components (shadcn/ui, radix-ui, lucide, TailwindCSS)

---

## Added Features (Project-specific)

- **Sector-wise Emissions Chart (Recharts):**
  - Implemented `SectorChart` with `ResponsiveContainer`, axes, tooltips, legend.
  - Integrated into `src/pages/Dashboard.tsx` under “Sector-wise Emissions”.
- **Regional Hotspots Chart (Recharts):**
  - New `RegionalHotspotsChart` horizontal bar chart for top emitting states.
  - Wired into Dashboard under “Regional Hotspots”.
- **AI Assistant Integration (Supabase Edge Function + Gemini):**
  - Edge Function at `supabase/functions/ai-assistant/index.ts` with CORS, input/env validation, error handling, normalized `{ answer }` response.
  - Frontend page `src/pages/AIAssistant.tsx` invoking the function and rendering Markdown with `react-markdown` + `remark-gfm`.
- **Supabase Client Setup:**
  - `src/integrations/supabase/client.ts` uses `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`.
- **.gitignore Hardened:**
  - Ignores `.env`, `.env.*`, `.env.local`, and local Supabase artifacts.

---

## Folder Structure
```
chem-tech-project/
├── public/           # Static files (emissions-data, images)
├── src/
│   ├── assets/       # Images, static media
│   ├── components/   # Feature & UI components
│   │   ├── calculator/
│   │   ├── dashboard/
│   │   ├── home/
│   │   ├── knowledge/
│   │   ├── layout/
│   │   ├── technologies/
│   │   └── ui/       # shadcn/ui & custom primitives
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Utilities
│   ├── pages/        # App route views
│   └── main.tsx      # App entry
├── package.json      # Dependency & script management
├── tailwind.config.ts, postcss.config.js
├── vite.config.ts    # Vite build config
└── README.md
```

---

## Tech Stack
- **Frontend:** React 18, TypeScript, Vite
- **Styling:** TailwindCSS, tailwindcss-animate, postcss
- **UI Library:** shadcn/ui, radix-ui, lucide-react, vaul, recharts
- **Forms and Validation:** react-hook-form, zod, @hookform/resolvers
- **State & Data:** @tanstack/react-query
- **Charts:** plotly.js, react-plotly.js, recharts
- **Routing:** react-router-dom
- **Theming:** next-themes
- **Carousel:** embla-carousel-react

## Dependencies
All are managed using `npm`. Major dependencies (see `package.json` for all):

```
@hookform/resolvers, @tanstack/react-query, clsx, date-fns, embla-carousel-react, input-otp, lucide-react, next-themes, plotly.js, react, react-day-picker, react-dom, react-hook-form, react-plotly.js, react-resizable-panels, react-router-dom, recharts, shadcn/ui, sonner, tailwind-merge, tailwindcss, tailwindcss-animate, vaul, zod, @radix-ui/*, class-variance-authority, cmdk
```

---

## Prerequisites
- **Node.js:** v18 or newer recommended
- **npm:** v9 or newer

---

## Getting Started

1. **Clone the repo:**
   ```bash
   git clone <your-repo-url>
   cd chem-tech-project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   Your app will be running at [http://localhost:5173](http://localhost:5173).

4. **Build for production:**
   ```bash
   npm run build
   ```
   Preview prod build:
   ```bash
   npm run preview
   ```

---

## Scripts
| Command           | Description             |
|-------------------|------------------------|
| npm run dev       | Start Vite dev server  |
| npm run build     | Build for production   |
| npm run preview   | Preview prod build     |
| npm run lint      | Run eslint linter      |

---

## Linting & Formatting
- Uses eslint with `@eslint/js`, `typescript-eslint`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh` for code quality.
- See `eslint.config.js`.

---

## Styling
- TailwindCSS is fully set up (see `tailwind.config.ts`, PostCSS is used).
- Ready for dark mode (via class strategy) and custom themes via CSS vars.

---

## Data & Expansion
- Main emissions data: `public/data/emissions-data.json`
- Expand modules via `src/components/`, add new features or pages in `src/pages/`

---

## Notes
- Make sure to use a compatible Node.js version as above.
- All dependencies are listed in `package.json`.
- Modify and customize for your institute, company, or research project needs!

---

## License
*(Add your license here if releasing publicly)*

---
