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

test("server-renders the personal portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Veer Pratap/);
  assert.match(html, /Open to Werkstudent roles/);
  assert.match(html, /I build AI that ships/);

  // Two live-demo panels, the biogas simulator panel and four indexed projects.
  assert.equal((html.match(/<article class="feature"/g) ?? []).length, 3);
  assert.equal((html.match(/class="index-row"/g) ?? []).length, 4);

  // The simulator has no public demo, so it shows six screenshots and no role or team lines.
  assert.match(html, /Smart Biogas Plant Simulator/);
  assert.equal((html.match(/<figure>/g) ?? []).length, 6);
  assert.doesNotMatch(html, /My part|feature-facts/);

  // Every preview image the page references is in public/.
  for (const url of new Set(html.match(/\/projects\/[\w/-]+\.webp/g))) {
    await access(new URL(`../public${url}`, import.meta.url));
  }

  for (const text of ["Swaja Robotics", "talk2move", "UMUN Tech", "IIT Kanpur", "Otto von Guericke University Magdeburg"]) {
    assert.match(html, new RegExp(text));
  }

  // The hackathon win is the orange highlight, and the AFS panel dissolves into it.
  assert.match(html, /class="award"/);
  assert.match(html, /schubKI Founders’ Award/);
  assert.match(html, /One of two winning teams among 63/);
  assert.equal((html.match(/class="pixel-transition"/g) ?? []).length, 2);

  // A short intro plays on load; X is gone because it isn't used.
  assert.match(html, /class="loader"/);
  assert.doesNotMatch(html, /x\.com\//);

  // The CV downloads from the header and from the contact section.
  assert.equal((html.match(/href="\/Veer_Pratap_Singh_CV\.pdf" download=""/g) ?? []).length, 2);
  await access(new URL("../public/Veer_Pratap_Singh_CV.pdf", import.meta.url));

  for (const url of [
    "https://afsnationalaihackathon.vercel.app/",
    "https://md-forge-teal.vercel.app/",
    "https://github.com/veer-pratapsingh/HCAI-fairness-recsys",
    "https://github.com/veer-pratapsingh/airline-satisfaction-mlops",
    "https://www.linkedin.com/in/veer-pratap-singh07/",
    "https://v-and-i-portfolio.vercel.app/",
  ]) {
    assert.match(html, new RegExp(url.replaceAll(".", "\\.")));
  }

  // The joint studio site lives on its own link now.
  assert.doesNotMatch(html, /We build brands|Hotel ElbRivera|Our research/);
});

test("keeps personal metadata and forwards the old research link", async () => {
  const [layout, vercel] = await Promise.all([
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../vercel.json", import.meta.url), "utf8"),
  ]);

  assert.match(layout, /Veer Pratap Singh — AI & Full-Stack Engineer/);
  assert.match(layout, /\/og\.jpg/);

  const { redirects } = JSON.parse(vercel);
  assert.deepEqual(redirects[0], {
    source: "/research",
    destination: "https://v-and-i-portfolio.vercel.app/research",
    permanent: false,
  });
});
