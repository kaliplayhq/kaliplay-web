export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <span className={`logo-mark ${className}`} aria-hidden="true">
      <svg viewBox="0 0 64 64" role="img">
        <path className="logo-frame" d="M16 8h32l8 8v32l-8 8H16l-8-8V16z" />
        <path className="logo-k" d="M20 15v34M46 16 25 32l21 16" />
        <path className="logo-play" d="M31 21 46 32 31 43z" />
      </svg>
    </span>
  );
}
