"use client";

import { useEffect, useRef } from "react";

const GLYPHS = "ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#$%&@*?!";
const INK = "#0b0b0b";
const PAPER = "#f5f5f3";

/**
 * Pixel-and-glyph dissolve: as its area scrolls up and out of view, a ragged band of
 * black glyph cells climbs from the bottom and leaves a solid `fill` behind, so the area
 * flows into the section below; a few `accent` cells flash in the band. Draws nothing for
 * reduced-motion visitors.
 */
export function PixelTransition({ fill, accent = "#ff5500" }: { fill: string; accent?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const atlas = document.createElement("canvas");
    let width = 0;
    let height = 0;
    let size = 24;
    let cols = 0;
    let rows = 0;
    let seeds = new Float32Array(0);
    let frame = 0;
    let visible = false;

    // One black tile per glyph, so a frame is image copies instead of text layout.
    const buildAtlas = () => {
      const tileCtx = atlas.getContext("2d");
      if (!tileCtx) return;
      const dpr = Math.min(devicePixelRatio || 1, 2);
      const tile = Math.round(size * dpr);
      const font = getComputedStyle(document.body).getPropertyValue("--font-mono").trim() || "monospace";
      atlas.width = tile * GLYPHS.length;
      atlas.height = tile;
      tileCtx.fillStyle = INK;
      tileCtx.fillRect(0, 0, atlas.width, tile);
      tileCtx.fillStyle = PAPER;
      tileCtx.font = `500 ${Math.round(tile * 0.5)}px ${font}`;
      tileCtx.textAlign = "center";
      tileCtx.textBaseline = "middle";
      [...GLYPHS].forEach((glyph, i) => tileCtx.fillText(glyph, i * tile + tile / 2, tile / 2 + dpr));
    };

    const draw = () => {
      frame = 0;
      const rect = canvas.getBoundingClientRect();
      // 0 while the bottom edge sits at the bottom of the screen; 1 once it has risen 85% of the height.
      const progress = Math.min(Math.max((innerHeight - rect.bottom) / (rect.height * 0.85), 0), 1);
      ctx.clearRect(0, 0, width, height);
      if (progress === 0) return;

      const front = 1.3 - 1.6 * progress;
      const tile = atlas.height;
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const i = (row * cols + col) * 2;
          // How far below the ragged front this cell sits: solid fill, then a mixed band,
          // then dense glyph cells, then a few scattered ones above the front.
          const depth = (row + 0.5) / rows + (seeds[i] - 0.5) * 0.3 - front;
          const chance = seeds[i + 1];
          // Glyph cells are tracked apart from colour: the dark fill is the same ink.
          let color = "";
          let glyph = false;
          if (depth > 0.2 || (depth > 0.08 && chance < (depth - 0.08) / 0.12)) color = fill;
          else if (depth > 0) {
            if (chance > 0.94) color = PAPER;
            else if (chance > 0.86) color = accent;
            else glyph = true;
          } else if (depth > -0.15 && chance < (1 + depth / 0.15) * 0.35) glyph = true;

          const x = col * size;
          const y = row * size;
          if (glyph) {
            const index = (Math.random() * GLYPHS.length) | 0;
            ctx.drawImage(atlas, index * tile, 0, tile, tile, x, y, size, size);
          } else if (color) {
            ctx.fillStyle = color;
            ctx.fillRect(x, y, size, size);
          }
        }
      }
    };

    const schedule = () => {
      if (visible && !frame) frame = requestAnimationFrame(draw);
    };

    const resize = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      ({ width, height } = canvas.getBoundingClientRect());
      size = width < 720 ? 16 : 24;
      cols = Math.ceil(width / size);
      rows = Math.ceil(height / size);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seeds = Float32Array.from({ length: cols * rows * 2 }, () => Math.random());
      buildAtlas();
      draw();
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      schedule();
    });
    const ro = new ResizeObserver(resize);
    io.observe(canvas);
    ro.observe(canvas);
    addEventListener("scroll", schedule, { passive: true });
    // Rebuild the tiles once the mono web font has loaded.
    document.fonts.ready.then(() => {
      buildAtlas();
      schedule();
    });

    return () => {
      io.disconnect();
      ro.disconnect();
      removeEventListener("scroll", schedule);
      cancelAnimationFrame(frame);
    };
  }, [fill, accent]);

  return <canvas ref={ref} className="pixel-transition" aria-hidden="true" />;
}
