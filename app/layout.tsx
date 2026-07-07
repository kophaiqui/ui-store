import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://that-one-ui.vercel.app";
const SITE_DESCRIPTION =
  "The UI library you keep coming back to. One accessible component, many complete styles — copy the source or download the file.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "That One UI",
    template: "%s — That One UI",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "That One UI",
    url: SITE_URL,
    title: "That One UI",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "That One UI",
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${geistMono.variable} font-sans`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
