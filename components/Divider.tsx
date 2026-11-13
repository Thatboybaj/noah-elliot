/** 1px white rule drawn in a 3px box, as the reference's line SVGs are. */
export function Divider({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`flex h-[3px] w-full items-center ${className}`}>
      <div className="h-px w-full bg-border" />
    </div>
  );
}
