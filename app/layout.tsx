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
      <head>
        <link rel="preload" href="/react_light.svg" as="image" />
        <link rel="preload" href="/nextjs_icon_dark.svg" as="image" />
        <link rel="preload" href="/typescript.svg" as="image" />
      </head>
      <body className={`${GeistSans.variable} antialiased bg-white dark:bg-black text-black dark:text-white`}>
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
