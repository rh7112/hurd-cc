# hurd.cc

**Draft rework in progress (`hurd-craft-co-rework` branch)** -- reworking this from a family-links
landing page into the site for Hurd Craft Co. LLC (Ryan's sole-member LLC, software engineering
focused). Family sites and client work (e.g. `bbsystems.us`) are now framed as "Works" under the
company, and a "Services" section covers non-software work (currently just lawn care/landscaping).
Not merged to `main` yet -- still reviewing layout/formatting before deciding on this direction for real.

The landing page at the root of `hurd.cc` -- links out to immediate family's own sites (`ryan.hurd.cc`, `alycia.hurd.cc`, `blog.hurd.cc`, `ramona.bauch.cc`, `braden.tucker.bid`) and client work (`bbsystems.us`), regardless of which domain each one actually lives on. Nothing dynamic: no portfolio-api calls, no backend, just a static page.

Built with Vite + React, deployed as a Cloudflare Worker with static assets -- same pattern as the rest of the family's sites (`alycias-portfolio`, `ramonas-portfolio`), just without a custom Worker script since there's no `/api/*` route or proxy needed here.

## Local dev

```bash
npm install
npm run dev
```

## Setup (Ryan -- not done yet)

1. **GitHub repo secret**: `Settings -> Secrets and variables -> Actions` on this repo, add `CLOUDFLARE_API_TOKEN` (Workers Scripts: Edit permission -- reuse an existing one scoped to this Cloudflare account if you still have the value saved, no need to create a new one).
2. Push to `main` (or run the workflow manually) once the secret's set -- `wrangler.jsonc`'s `routes` attaches both `hurd.cc` and `www.hurd.cc` as custom domains automatically on deploy, no dashboard step needed for that part.

That's it -- no database, no Access application, no other moving pieces.

## Adding another site to the list

Edit the `works` array in `src/App.jsx`. Services live in the separate `services` array in the
same file.
