# TBD Art Club

A simple marketing landing page for TBD Art Club — a Kenyan creative community that connects artists, runs monthly meetups, and offers mural, commission, and teaching services.

Built with Next.js 16.2.6, React 19.2.4, TypeScript, and Tailwind CSS 4.

## Features

- Responsive single-page layout with smooth in-page navigation
- Hero section with full-width background image
- Membership and mission sections
- Horizontal image carousel for past meetups
- Mobile-friendly header with collapsible navigation
- Static image optimization using `next/image`

## Project structure

- `app/page.tsx` — main landing page and content layout
- `app/layout.tsx` — root app layout, metadata, and font setup
- `app/components/SiteHeader.tsx` — responsive navigation header
- `app/components/GalleryCarousel.tsx` — interactive carousel for event photos
- `app/globals.css` — global Tailwind + base styles
- `public/images` — static assets used by the site

## Scripts

Install dependencies and run the project locally.

```bash
npm install
npm run dev
```

Available scripts:

```bash
npm run dev    # start local development server
npm run build  # build production assets
npm run start  # start the production server
npm run lint   # run ESLint checks
```

## Stack

- Next.js 16.2.6
- React 19.2.4
- Tailwind CSS 4
- TypeScript
- ESLint

## Development notes

- The app uses the `app` directory and Next.js App Router.
- Fonts are loaded through `next/font/google`.
- The carousel uses a client component for scroll interaction.

## Contact

If you want to update the page or add more content, start by editing `app/page.tsx` and the header/carousel components in `app/components/`.
