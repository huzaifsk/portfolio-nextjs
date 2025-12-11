"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface LoadingContextType {
  isAppLoading: boolean;
  setIsAppLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isAppLoading, setIsAppLoading] = useState(true);

  return (
    <LoadingContext.Provider value={{ isAppLoading, setIsAppLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
}