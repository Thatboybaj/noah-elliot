import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Providers } from "@/components/Providers";
import { Nav } from "@/components/Nav";
import { site } from "@/lib/content";
import "./globals.css";

/* Inter Tight (variable, latin), self-hosted from @fontsource-variable/inter-tight. */
const interTight = localFont({
  src: "./fonts/InterTight-Variable.woff2",
  variable: "--font-inter-tight",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
};

export const viewport: Viewport = {
  themeColor: "#1e1e1e",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={interTight.variable}>
      <head>
        {/* Without JavaScript, entrance animations never run: show everything. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <a
          href="#main"
          className="t-nav sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-14 focus:z-[60] focus:bg-background focus:p-3"
        >
          Skip to content
        </a>
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
