// Captures each project's landing page and writes the responsive previews the
// portfolio serves: public/projects/<image>-{640,1280,2000}.webp
//
//   node tools/capture-previews.mjs              every project in app/page.tsx
//   node tools/capture-previews.mjs crickroo     only the named previews
//
// Needs Chrome or Edge installed; set CHROME_PATH if it lives somewhere unusual.
import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const viewport = { width: 1440, height: 900 };
const widths = [640, 1280, 2000];
const settleMs = Number(process.env.SETTLE_MS ?? 9000);

const browserPath = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
].find((candidate) => candidate && existsSync(candidate));

// Keeps scrollbars, consent overlays and custom cursors out of the frame.
const tidyPage = `(() => {
  const style = document.createElement("style");
  style.textContent = \`
    html { scrollbar-width: none !important; }
    ::-webkit-scrollbar { display: none !important; }
    .cmplz-cookiebanner, #cmplz-cookiebanner-container, #cmplz-manage-consent,
    .cky-consent-container, #CybotCookiebotDialog, .cc-window, #onetrust-consent-sdk,
    [id*="cookie-banner" i], [class*="cookie-banner" i], [class*="cookieconsent" i],
    [class*="cookie-consent" i], [id*="cookie-consent" i],
    .cursor-dot, .cursor-ring, .cursor-el { display: none !important; }
  \`;
  document.head.appendChild(style);
  window.scrollTo(0, 0);
})()`;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function readProjects() {
  const source = await readFile(path.join(root, "app", "page.tsx"), "utf8");
  const projects = [...source.matchAll(/image: "([^"]+)",\s+url: "([^"]+)"/g)].map(
    ([, image, url]) => ({ image, url }),
  );
  if (projects.length === 0) {
    throw new Error("No `image` + `url` pairs found in app/page.tsx");
  }
  return projects;
}

async function connect(profileDir) {
  const portFile = path.join(profileDir, "DevToolsActivePort");
  for (let attempt = 0; attempt < 80 && !existsSync(portFile); attempt += 1) {
    await sleep(250);
  }
  const [port, browserTarget] = (await readFile(portFile, "utf8")).trim().split("\n");
  const socket = new WebSocket(`ws://127.0.0.1:${port}${browserTarget}`);
  await new Promise((resolve, reject) => {
    socket.addEventListener("open", resolve, { once: true });
    socket.addEventListener("error", reject, { once: true });
  });

  let nextId = 0;
  const pending = new Map();
  const listeners = new Set();
  socket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    const request = pending.get(message.id);
    if (request) {
      pending.delete(message.id);
      if (message.error) request.reject(new Error(message.error.message));
      else request.resolve(message.result);
      return;
    }
    for (const listener of listeners) listener(message);
  });

  return {
    close: () => socket.close(),
    send(method, params = {}, sessionId) {
      const id = ++nextId;
      socket.send(JSON.stringify({ id, method, params, sessionId }));
      return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
    },
    once(method, sessionId, timeoutMs) {
      return new Promise((resolve) => {
        const listener = (message) => {
          if (message.method !== method || message.sessionId !== sessionId) return;
          clearTimeout(timer);
          listeners.delete(listener);
          resolve(true);
        };
        const timer = setTimeout(() => {
          listeners.delete(listener);
          resolve(false);
        }, timeoutMs);
        listeners.add(listener);
      });
    },
  };
}

async function capture(devtools, project) {
  const { targetId } = await devtools.send("Target.createTarget", { url: "about:blank" });
  const { sessionId } = await devtools.send("Target.attachToTarget", { targetId, flatten: true });
  const send = (method, params) => devtools.send(method, params, sessionId);

  await send("Page.enable");
  await send("Emulation.setDeviceMetricsOverride", {
    ...viewport,
    deviceScaleFactor: 1,
    mobile: false,
  });
  const loaded = devtools.once("Page.loadEventFired", sessionId, 45000);
  await send("Page.navigate", { url: project.url });
  await loaded;
  await sleep(settleMs);
  await send("Runtime.evaluate", { expression: tidyPage });
  await sleep(700);

  const sizes = [];
  for (const width of widths) {
    // Re-rasterising at the target scale keeps text sharper than resampling.
    const { data } = await send("Page.captureScreenshot", {
      format: "webp",
      quality: width > 1280 ? 74 : 80,
      clip: { x: 0, y: 0, ...viewport, scale: width / viewport.width },
    });
    const image = Buffer.from(data, "base64");
    await writeFile(path.join(root, "public", "projects", `${project.image}-${width}.webp`), image);
    sizes.push(`${width}w ${Math.round(image.length / 1024)}KB`);
  }
  await devtools.send("Target.closeTarget", { targetId });
  return sizes.join("  ");
}

if (!browserPath) {
  throw new Error("Chrome or Edge not found. Set CHROME_PATH to the browser executable.");
}

const requested = process.argv.slice(2);
const projects = (await readProjects()).filter(
  (project) => requested.length === 0 || requested.includes(project.image),
);
if (projects.length === 0) {
  throw new Error(`No project preview named ${requested.join(", ")}`);
}

const profileDir = await mkdtemp(path.join(tmpdir(), "portfolio-previews-"));
const browser = spawn(
  browserPath,
  [
    "--headless=new",
    "--remote-debugging-port=0",
    `--user-data-dir=${profileDir}`,
    `--window-size=${viewport.width},${viewport.height}`,
    "--hide-scrollbars",
    "--no-first-run",
    "--no-default-browser-check",
    "--disable-extensions",
    "--disable-background-networking",
    "--disable-component-update",
    "--mute-audio",
    "about:blank",
  ],
  { stdio: "ignore" },
);

try {
  const devtools = await connect(profileDir);
  for (const project of projects) {
    try {
      console.log(`${project.image.padEnd(22)} ${await capture(devtools, project)}`);
    } catch (error) {
      process.exitCode = 1;
      console.error(`${project.image.padEnd(22)} failed: ${error.message}`);
    }
  }
  devtools.close();
} finally {
  browser.kill();
  await sleep(500);
  await rm(profileDir, { recursive: true, force: true, maxRetries: 5, retryDelay: 300 });
}
