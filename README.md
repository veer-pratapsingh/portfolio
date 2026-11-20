# Veer Pratap Singh — Portfolio

Personal portfolio of Veer Pratap Singh, AI and full-stack engineer and M.Sc.
Data and Knowledge Engineering student at Otto von Guericke University
Magdeburg.

**Live site:** [veer-pratap-singh-portfolio.vercel.app](https://veer-pratap-singh-portfolio.vercel.app)

The hospitality web studio work with Inderpreet Singh (V+I) lives on its own
site: [v-and-i-portfolio.vercel.app](https://v-and-i-portfolio.vercel.app).
The old `/research` link on this domain forwards there (see `vercel.json`).

## Selected work

- [AFS In-line Spectroscopy Assistant](https://afsnationalaihackathon.vercel.app/) ([code](https://github.com/Adarshpandey2003/afs_national_ai_hackathon))
- [md forge](https://md-forge-teal.vercel.app/) ([code](https://github.com/veer-pratapsingh/md-forge))
- Smart Biogas Plant Simulator (Unity 6 team project; screenshots on the site)
- [Fairness in LLM-based learning recommendation](https://github.com/veer-pratapsingh/HCAI-fairness-recsys)
- [Airline satisfaction MLOps pipeline](https://github.com/veer-pratapsingh/airline-satisfaction-mlops) (team project)
- [Focus Guardian](https://github.com/veer-pratapsingh/focus-guardian)
- [Sign-language detection](https://github.com/veer-pratapsingh/Final-Year-Project-Sign-Language-Detection)

## Built with

- Next.js 16 and React 19, TypeScript
- Antonio, DM Mono and DM Sans via `next/font`
- Plain CSS: scroll-linked progress bar and text reveal, reduced-motion support
- `app/pixel-transition.tsx`: canvas pixel-and-glyph dissolve between sections;
  `app/header-tone.tsx` keeps the inverting header readable over orange
- `public/Veer_Pratap_Singh_CV.pdf`: the downloadable CV, a copy of the generic
  CV from the job-application folder; replace it when the CV changes

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

Live-demo panels use a 1440×900 capture of each site, saved in three widths as
`public/projects/<image>-640.webp`, `-1280.webp` and `-2000.webp`. After adding
a project with `image` and `url` to `featured` in `app/page.tsx` (or when a site
changes), regenerate them with Chrome or Edge installed:

```bash
node tools/capture-previews.mjs            # every featured project
node tools/capture-previews.mjs md-forge   # just one
```

The biogas simulator is a Windows app with no web demo, so its panel
(`biogas-simulator-*.webp`) and gallery (`public/projects/biogas/`) are in-app
screenshots from the Unity project's `Pictures` folder. Gallery shots are
centre-cropped to 16:9 at 640 and 1280 px, for example:

```bash
ffmpeg -nostdin -i "Comparison Screen.png" \
  -vf "crop='min(iw,ih*16/9)':'min(ih,iw*9/16)',scale=1280:720:flags=lanczos,format=yuv420p" \
  -c:v libwebp -quality 78 -compression_level 6 public/projects/biogas/run-comparison-1280.webp
```
