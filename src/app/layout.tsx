import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fabrikautomates.tech"),
  title: "Fabrik Automates — Sites, apps & automatisations",
  description:
    "Une fabrique de sites, d'apps et d'automatisations utiles pour créateurs, indépendants et petites entreprises.",
  icons: {
    icon: [
      { url: "/brand/fabrik-automates-icon-64.png", sizes: "64x64", type: "image/png" },
      { url: "/brand/fabrik-automates-icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/brand/fabrik-automates-icon-192.png", sizes: "192x192", type: "image/png" }],
  },
  openGraph: {
    title: "Fabrik Automates",
    description: "Sites, apps & automatisations bien mijotés.",
    images: [{ url: "/brand/fabrik-automates-og.png", width: 1200, height: 675 }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${bricolage.variable} ${inter.variable} ${jetBrainsMono.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
