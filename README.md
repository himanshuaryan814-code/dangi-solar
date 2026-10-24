# Dangi Solar Solutions — GitHub-ready website

A responsive React + TypeScript + Vite website starter for Dangi Solar Solutions.

## Run locally
1. Install Node.js 20 or newer.
2. Extract this folder and open it in VS Code.
3. Run `npm install`
4. Run `npm run dev`
5. Open the local URL shown in the terminal.

## Build
Run `npm run build`. Vite outputs the production site to `dist/`.

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. In Vercel, import that repository.
3. Framework preset: **Vite**.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy.

## Important before publishing
- The quote form validates the input and opens the user's email app with a prefilled inquiry. It does **not** save leads to a database or send them to the company automatically. For reliable lead capture, connect a backend/CRM such as Supabase plus a server-side notification workflow.
- No phone number or WhatsApp number was supplied, so the site does not invent one.
- Solar savings are indicative estimates, not guaranteed outcomes.
- The supplied certification/approval labels are shown as **items to verify**, not claims that the business holds those credentials. Confirm evidence before changing them to verified.
- Gallery cards use stock/demo imagery and are labelled as illustrative, not as verified completed company projects.
- Replace the image URLs with authorized company installation photos where available.
- The supplied business figures, reviews, rating and address should be confirmed by the owner before public launch.

## Project structure
- `src/App.tsx` — site content and interactive behaviour
- `src/styles.css` — responsive styling
- `src/main.tsx` — React entry point

## Editing business details
Update the `business` object near the top of `src/App.tsx`. Keep contact fields empty until verified.
