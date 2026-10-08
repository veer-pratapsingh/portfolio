import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html", host: "localhost" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the completed portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Veer Pratap Singh/);
  assert.match(html, /Inderpreet Singh/);
  assert.match(html, /We build brands/);
  assert.match(html, /people choose\./);
  assert.match(html, /Our research/);
  assert.match(html, /Our work, already live\./);
  assert.match(html, /Live view/);
  assert.match(html, /class="live-preview-frame"/);
  assert.match(html, /Let’s turn your next idea/);

  const renderedProjects = html.match(/<article class="project-card/g) ?? [];
  assert.equal(renderedProjects.length, 9);

  const renderedContentCases = html.match(/<article class="content-case/g) ?? [];
  assert.equal(renderedContentCases.length, 0);

  const renderedBenchmarks = html.match(/<a href="[^"]+" target="_blank" rel="noreferrer"><span>\d{2}<\/span>/g) ?? [];
  assert.equal(renderedBenchmarks.length, 6);

  assert.match(html, /Selected hotel projects,/);
  assert.match(html, /across India\./);
  assert.doesNotMatch(html, /Not client work|references we study|study the category/);
  assert.doesNotMatch(html, /Concept build|Concept builds|concept builds/);
  assert.doesNotMatch(html, /A focused opportunity \/ Hotel ElbRivera/);
  assert.doesNotMatch(html, /Das Elb|daselb\.com|Singh Laly|Intellia|singhlalyofficial|intellia_miet|Munich|Cologne/);

  for (const domain of [
    "hotelmetropolis.in",
    "ambur.co.in",
    "synterra-technologies.vercel.app",
    "crickroo.com",
    "hormonenutritionclinic.com",
    "tripundtechnologies.in",
    "hotel-elbrivera.de",
    "langbar-berlin-concept.vercel.app",
    "langbar-berlin-concept-2.vercel.app",
  ]) {
    assert.match(html, new RegExp(domain.replaceAll(".", "\\.")));
  }
});

test("server-renders the dedicated Hotel ElbRivera research pitch", async () => {
  const response = await render("/research");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Our research \/ Hotel ElbRivera/);
  assert.match(html, /From riverside stay/);
  assert.match(html, /Website &amp; direct-booking journey/);
  assert.match(html, /SEO &amp; GEO discoverability/);
  assert.match(html, /Performance ads &amp; remarketing/);
  assert.match(html, /Google presence &amp; reputation/);
  assert.match(html, /F&amp;B Activation &amp; Event Planning/);
  assert.match(html, /A focused first 90 days/);
  assert.match(html, /Discuss the proposal/);
});

test("removes starter-only assets and keeps portfolio metadata", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /const projects = \[/);
  assert.match(layout, /Veer \+ Inderpreet/);
  assert.match(layout, /Hospitality Web, Content & Brand Partners/);
  assert.match(layout, /\/og\.png/);
  assert.doesNotMatch(layout, /avatar\.jpg/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);

  await assert.rejects(
    access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)),
  );
});
