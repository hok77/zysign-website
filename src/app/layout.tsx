import type { Metadata } from "next";
import { Inter, Tajawal } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  title: "ZySign - Premium Signage Solutions for Global Business",
  description: "ZySign provides premium signage solutions with global delivery to 150+ countries. Custom LED signs, neon signs, and outdoor signage with ISO9001 certification.",
  keywords: "signage, LED signs, neon signs, outdoor signs, custom signs, business signage, Alibaba supplier, global shipping",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/icon.ico',
  },
  openGraph: {
    title: "ZySign - Premium Signage Solutions for Global Business",
    description: "Premium custom signage solutions with global delivery to 150+ countries. LED signs, neon signs, outdoor signage with ISO9001 certification.",
    type: "website",
    url: "https://www.zysign.com",
    siteName: "ZySign",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZySign - Premium Signage Solutions",
    description: "Premium custom signage solutions with global delivery to 150+ countries.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${inter.variable} ${tajawal.variable}`}>
      <body className="font-inter antialiased">
        {children}
      </body>
    </html>
  );
}
