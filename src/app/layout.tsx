import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";
import "./globals.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: SITE.name, template: `%s | ${SITE.name}` },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${font.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="mx-auto min-h-[70vh] max-w-3xl px-5 py-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}