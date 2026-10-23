# Wanderwell travel website

A responsive travel website built with Astro. It includes a home page, destination directory with filtering, six itinerary pages, an About page, a journal with three stories, and a Contact page.

## Run locally

```sh
npm install
npx astro dev --background
```

Use `npx astro dev status`, `npx astro dev logs`, and `npx astro dev stop` to manage the background development server.

## Production build

```sh
npm run build
npm run preview
```

The static site is generated in `dist/`.

## Notes

- Destination and journal content is maintained in `src/data/travel.ts`.
- The contact form opens a prefilled email draft addressed to `hello@wanderwell.travel`; the visitor reviews and sends it from their email app.
- Photography is loaded from Unsplash and requires an internet connection.
