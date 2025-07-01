import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brico Habitat Pat - Artisan du Bâtiment en Bourgogne",
  description: "Brico Habitat Pat : artisan spécialisé en plaquisterie, peinture, agencement, électricité et plomberie. Intervention en Bourgogne. Devis gratuit au 06 98 41 57 13",
  keywords: "Brico Habitat Pat, plaquiste, peinture, agencement, électricité, plomberie, artisan, Bourgogne, travaux, rénovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
