import type { Metadata } from "next";
import { Baskervville } from "next/font/google";
import "./globals.css";
import "./fonts.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const baskervville = Baskervville({ 
  subsets: ['latin'],
  weight: '400'
});

export const metadata: Metadata = {
  title: "Manhaton Lane - Brisbane's Best Burgers & Steaks",
  description: "Experience the finest burgers and steaks in Brisbane at Manhaton Lane. We serve delicious burgers, steaks, schnitzels, and more in a cozy atmosphere.",
  icons: {
    icon: [
      {
        url: '/restaurant-logo.svg',
        type: 'image/svg+xml',
      }
    ],
    shortcut: '/restaurant-logo.svg',
    apple: '/restaurant-logo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
          #__next-build-watcher { display: none !important; }
          [data-nextjs-dialog-overlay] { display: none !important; }
          [data-nextjs-dialog] { display: none !important; }
        `}</style>
        <link rel="icon" href="/restaurant-logo.svg" type="image/svg+xml" />
      </head>
      <body className={baskervville.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
