# Zahraa Hubail — Portfolio

A single-page developer portfolio built with **React + TypeScript + Vite + Tailwind CSS**.

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build into dist/
npm run preview  # preview the production build locally
npm run lint     # run oxlint
```

## Project structure

```
public/
  assets/
    projects/        project images (SVG placeholders — replace with real screenshots)
    certificates/    certificate images (placeholder.svg is the shared fallback)
    logos/           institution logos
    Zahraa-Hubail-CV.pdf   the downloadable CV
src/
  components/        reusable UI: Button, Badge, Modal, Navbar, Footer, cards, icons…
  sections/          one file per page section (Hero, About, Experience, …)
  data/              all editable content lives here — see below
  hooks/             small custom hooks (scroll spy, reveal-on-scroll, scroll lock)
  types/             shared TypeScript interfaces for the content
  App.tsx            composes the sections in order
  index.css          Tailwind import + design tokens (@theme) + a few keyframes
```

## How to update content

All content is plain data — you never need to touch the components.

| What | File |
| --- | --- |
| Name, role, email, social links, CV path, hero/about copy | `src/data/site.ts` |
| Navigation links | `src/data/site.ts` (`navLinks`) |
| Projects (+ filters) | `src/data/projects.ts` |
| Skills | `src/data/skills.ts` |
| Experience | `src/data/experience.ts` |
| Recommendation letters (shown in the Experience section) | `src/data/recommendations.ts` |
| Education | `src/data/education.ts` |
| Certifications & awards | `src/data/certifications.ts` |

### Project images

Each project has:

- `image` — the single thumbnail shown on the project card.
- `images` — an **optional** array of `{ src, alt, caption }`. When present, the
  project modal shows them as a carousel with prev/next arrows, dot indicators
  and the caption under each image. With one image (or none) the carousel just
  shows that image with no controls.

```ts
image: '/assets/projects/rentify-dashboard.jpg',
images: [
  { src: '/assets/projects/rentify-dashboard.jpg', alt: 'Landlord dashboard', caption: 'Landlord dashboard' },
  { src: '/assets/projects/rentify-lease.jpg',      alt: 'Lease application flow', caption: 'Lease application flow' },
],
```

Steps: drop the files in `public/assets/projects/`, then add/point the `image`
and `images` fields in `src/data/projects.ts`. If a file is missing or the path
is wrong, the site falls back to a placeholder, so nothing ever breaks.

**Keep images light.** Export screenshots at ~1400&nbsp;px wide and save as JPEG
(or WebP) so each file stays well under ~200&nbsp;KB — full-size PNG screenshots
can be 1&nbsp;MB+ each. The two stock-market charts were converted from PNG to
JPEG for this reason.

### Recommendation letters

Two quote cards render at the bottom of the **Experience** section, each linking
to a PDF in `public/assets/recommendations/`. The files currently there are
**plain-text transcripts** — replace them with the original signed PDFs (keep the
same filenames), or edit the `pdf` paths in `src/data/recommendations.ts`:

- `hashim-al-alawi-shura-council.pdf`
- `deena-abbas-ali-shura-council.pdf`

Edit the `quote`, `name` or `title` in the same file to change what the card shows.

### Replacing certificate images

Same idea: drop the file in `public/assets/certificates/` and point the
`image` field in `src/data/certifications.ts` at it.

### Replacing the CV

Replace `public/assets/Zahraa-Hubail-CV.pdf` with your new file (keep the name),
or update `site.cvPath` in `src/data/site.ts`.

## Design tokens

Colours, fonts and shadows are defined once in the `@theme` block at the top of
`src/index.css`. Change them there to re-theme the whole site.

## Accessibility & SEO

- Semantic landmarks, a skip link, keyboard-navigable modals with focus trapping,
  visible focus rings, `prefers-reduced-motion` support.
- Page title, meta description, Open Graph / Twitter tags and a favicon are set
  in `index.html`. Update the `og:url` / `canonical` once the site is deployed.

## Privacy

Phone number and residential address are intentionally kept out of the site and
the committed source.
