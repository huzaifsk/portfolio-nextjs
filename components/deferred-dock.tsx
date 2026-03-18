"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const DockNavigation = dynamic(
  () => import("@/components/dock-navigation").then((mod) => mod.DockNavigation),
  { ssr: false }
);

type IdleWindow = Window & {
  requestIdleCallback?: (callback: () => void) => number;
  cancelIdleCallback?: (id: number) => void;
};

export function DeferredDock() {
  const [showDock, setShowDock] = useState(false);

  useEffect(() => {
    const idleWindow = window as IdleWindow;

    if (idleWindow.requestIdleCallback) {
      const idleId = idleWindow.requestIdleCallback(() => {
        setShowDock(true);
      });

      return () => {
        idleWindow.cancelIdleCallback?.(idleId);
      };
    }

    const timeoutId = window.setTimeout(() => {
      setShowDock(true);
    }, 1200);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  return showDock ? <DockNavigation /> : null;
}
