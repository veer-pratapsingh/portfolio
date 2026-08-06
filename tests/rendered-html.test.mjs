import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
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
  assert.match(html, /I build websites/);
  assert.match(html, /people remember\./);
  assert.match(html, /Built for the real world\./);
  assert.match(html, /Let’s make it/);

  const renderedProjects = html.match(/<article class="project-card/g) ?? [];
  assert.equal(renderedProjects.length, 7);

  for (const domain of [
    "daselb.com",
    "hotelmetropolis.in",
    "ambur.co.in",
    "synterra-technologies.vercel.app",
    "crickroo.com",
    "hormonenutritionclinic.com",
    "tripundtechnologies.in",
  ]) {
    assert.match(html, new RegExp(domain.replaceAll(".", "\\.")));
  }
});

test("removes starter-only assets and keeps portfolio metadata", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /const projects = \[/);
  assert.match(layout, /Websites people remember/);
  assert.match(layout, /\/og\.png/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);

  await assert.rejects(
    access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)),
  );
});
