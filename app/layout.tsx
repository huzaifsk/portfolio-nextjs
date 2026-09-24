import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { PageWrapper } from "@/components/page-wrapper";
import { Analytics } from "@vercel/analytics/next";
import { defaultMetadata } from "@/data/site";

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/*
        No manual preloads. These previously pointed at Skills-section icons
        far below the fold, forcing the browser to spend early, high-priority
        bandwidth on off-screen images instead of the font and JS the hero
        actually needs first.
      */}
      <body
        className={`${GeistSans.variable} antialiased bg-white dark:bg-black text-black dark:text-white`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <PageWrapper>{children}</PageWrapper>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
