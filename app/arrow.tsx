type ArrowDirection = "up-right" | "right" | "down" | "left" | "up";

export function Arrow({ direction = "up-right" }: { direction?: ArrowDirection }) {
  return (
    <svg
      className={`arrow arrow-${direction}`}
      viewBox="0 0 12 12"
      width="12"
      height="12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.75 9.25 9.25 2.75M4.25 2.75h5v5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
