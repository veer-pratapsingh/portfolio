import type { CSSProperties } from "react";

// Pseudo-random but deterministic, so the server and the browser render the same markup.
const order = (i: number) => ((i * 7919) % 101) / 100;

/**
 * Splits text into one span per letter, each with a scattered `--o` (0–1) that CSS turns
 * into a delay or a scroll range, for Jetton-style letter-by-letter reveals. Words stay
 * unbreakable. The letters are aria-hidden, so give the parent element an aria-label.
 */
export function Letters({ text, seed = 0 }: { text: string; seed?: number }) {
  let index = seed;
  return (
    <span className="letters" aria-hidden="true">
      {text.split(" ").map((word, w) => (
        <span key={w}>
          {w > 0 && " "}
          <span className="word">
            {[...word].map((letter) => {
              const o = order(index++);
              return (
                <span className="l" key={index} style={{ "--o": o } as CSSProperties}>
                  {letter}
                </span>
              );
            })}
          </span>
        </span>
      ))}
    </span>
  );
}
