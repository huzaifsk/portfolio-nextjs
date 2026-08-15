/**
 * Small pulsing status dot, used only where it marks genuine live state
 * (a role that's currently ongoing, a project that's actually deployed and
 * reachable) rather than as decoration.
 *
 * Blue by explicit choice - this is the first bit of color on an otherwise
 * fully neutral black/white/gray page, scoped deliberately to this one
 * semantic signal rather than adopted as a page-wide accent.
 *
 * aria-hidden: it always sits beside text that already states the same thing
 * ("Present", the project title next to a live link), so it's a visual
 * reinforcement, not new information a screen reader needs to announce
 * separately.
 *
 * The ping ring only animates when the user hasn't asked for reduced motion;
 * the solid center dot renders either way, so the status is never lost.
 */
export function LiveDot() {
  return (
    <span className="relative inline-flex size-2" aria-hidden="true">
      <span className="absolute inline-flex size-full motion-safe:animate-ping rounded-full bg-blue-400 opacity-75 dark:bg-blue-500" />
      <span className="relative inline-flex size-2 rounded-full bg-blue-500 dark:bg-blue-400" />
    </span>
  );
}
