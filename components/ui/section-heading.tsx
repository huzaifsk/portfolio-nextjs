import type { ReactNode } from "react";

/**
 * Shared section heading: title plus a hairline that fills the remaining width.
 *
 * Section titles previously rendered at 16px, the same size as body subtext, so
 * a section opening read no louder than the paragraph inside it. The rule gives
 * each section a clear top edge and delineates it from the one above.
 *
 * The fade matches the timeline spine in the experience and education sections,
 * so the page uses one hairline language throughout.
 */
export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="shrink-0 text-xl font-semibold tracking-tight text-black dark:text-white">
        {children}
      </h2>
      <span
        aria-hidden="true"
        className="h-px flex-1 bg-linear-to-r from-gray-200 via-gray-200/70 to-transparent dark:from-gray-800 dark:via-gray-800/70"
      />
    </div>
  );
}
