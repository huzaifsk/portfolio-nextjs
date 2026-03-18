import { ReactNode } from "react";
import { DeferredDock } from "@/components/deferred-dock";

export function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <main className="max-w-4xl mx-auto px-4 sm:px-8 md:px-12 lg:px-36 py-8 sm:py-12 pb-32 font-normal bg-white dark:bg-black">
        {children}
      </main>
      <DeferredDock />
    </>
  );
}
