"use client";

import { useEffect } from "react";

const isOrange = (canvas: HTMLCanvasElement, x: number, y: number) => {
  const rect = canvas.getBoundingClientRect();
  const scale = canvas.width / rect.width;
  const pixel = canvas.getContext("2d")?.getImageData((x - rect.left) * scale, (y - rect.top) * scale, 1, 1).data;
  return !!pixel && pixel[3] > 0 && pixel[0] > 200 && pixel[1] < 140 && pixel[2] < 80;
};

/**
 * The header inverts whatever is under it (mix-blend-mode: difference), which turns its
 * white ink blue over orange. While the award band, or the part of the AFS panel that has
 * already dissolved to orange, sits under the header, it switches to plain black ink.
 */
export function HeaderTone() {
  useEffect(() => {
    const header = document.querySelector(".site-header");
    if (!header) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = header.getBoundingClientRect().height / 2;
      // Sample three points along the header line, left of the CV button; two must be orange.
      const hits = [0.15, 0.35, 0.55].filter((fraction) => {
        const x = innerWidth * fraction;
        const under = document.elementsFromPoint(x, y).find((node) => !header.contains(node));
        if (under?.closest(".award")) return true;
        const canvas = under?.closest(".feature-panel")?.querySelector("canvas");
        return canvas ? isOrange(canvas, x, y) : false;
      }).length;
      header.classList.toggle("on-accent", hits >= 2);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    addEventListener("scroll", schedule, { passive: true });
    addEventListener("resize", schedule);
    schedule();
    return () => {
      removeEventListener("scroll", schedule);
      removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
