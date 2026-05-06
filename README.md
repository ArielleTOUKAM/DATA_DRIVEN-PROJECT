# Data Driven Dashboard

A React + Vite dashboard application for marketing analytics, chart visualization, datasets management, and calendar planning.

## Features

- Dashboard overview with KPI cards, line and bar charts, and recent transactions
- Analytics page with filterable marketing data and totals
- Datasets page for importing mock marketing data
- Bar, Pie, and Line chart views
- Interactive calendar with event creation and removal
- Settings and FAQ pages
- Theme switching between dark and light modes

## Tech Stack

- React 19
- Vite
- Material UI
- React Router DOM
- Nivo charts
- FullCalendar
- MUI Data Grid

## Getting Started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173` by default.

### Build for production

```bash
npm run build
```

## Notes

- This project uses mock data in `src/data/mockData.js`.
- The dashboard is currently a frontend demo and does not include a backend API.
- The project is designed as a portfolio-ready example.

## Project structure

- `src/App.jsx` — main routing and layout
- `src/scenes` — page views for dashboard, analytics, charts, calendar, settings, FAQ, and datasets
- `src/components` — reusable chart and UI components
- `src/data/mockData.js` — sample data used across pages
- `src/theme.js` — theme and color mode configuration

## Future improvements

- Add real CSV import/export for datasets
- Add search behavior in the top bar
- Replace placeholder FAQ questions with real content
- Persist settings using local storage or backend storage
- Add a GitHub Pages or Vercel deployment link
