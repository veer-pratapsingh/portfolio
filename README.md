# Veer + Inderpreet — Portfolio

A hospitality-focused studio portfolio for Veer Pratap Singh and Inderpreet
Singh, showcasing live websites, digital experiences, brand consulting services,
and a tailored Hotel ElbRivera website audit.

**Live site:** [veer-pratap-singh-portfolio.vercel.app](https://veer-pratap-singh-portfolio.vercel.app)

## Selected work

Hotel websites are listed first, then the rest of the work.

- [Hotel ElbRivera](https://www.hotel-elbrivera.de/)
- [Hotel Metropolis](https://hotelmetropolis.in/)
- [Hotel Golden Pearl](https://hotel-golden-pearl.vercel.app/)
- [Ratswaage Hotel Magdeburg](https://ratswaage-hotel-magdeburg.vercel.app/)
- [Langbar Berlin](https://langbar-berlin-concept.vercel.app/)
- [Langbar Berlin — Night Edit](https://langbar-berlin-concept-2.vercel.app/)
- [CrickRoo](https://www.crickroo.com/)
- [Synterra Tech Labs](https://synterra-technologies.vercel.app/)
- [Hormone Nutrition Clinic](https://www.hormonenutritionclinic.com/)
- [Ambur Cold Chain](https://ambur.co.in/)
- [Tripund Technologies](https://tripundtechnologies.in/)
- [AFS National AI Hackathon](https://afsnationalaihackathon.vercel.app/)

## Our research

The dedicated `/research` page presents a client-ready Hotel ElbRivera growth
proposal covering the direct-booking website, SEO and GEO, Google presence,
reputation management, paid campaigns, social content, F&B activation, event
planning and a focused 90-day implementation roadmap.

The portfolio also includes a hospitality project board featuring six hotel
websites from India.

## Built with

- Next.js 16 and React 19
- TypeScript
- Responsive CSS with reduced-motion support
- Dynamic Open Graph and X metadata
- Vercel production deployment

## Local development

```bash
npm install
npm run dev
```

Useful checks:

```bash
npm run lint
npm test
npm run build:vercel
```

## Project previews

Each project card uses a 1440×900 capture of the live landing page, saved in
three widths as `public/projects/<image>-640.webp`, `-1280.webp` and
`-2000.webp`. After adding a project to `app/page.tsx` (or when a site
changes), regenerate them with Chrome or Edge installed:

```bash
node tools/capture-previews.mjs            # every project
node tools/capture-previews.mjs crickroo   # just one
```
