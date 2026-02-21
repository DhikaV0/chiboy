import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://chiboy.vercel.app"),

  verification: {
    google: "V-J_NTZUuZF8JcJjVimA8XEr3TA1BO03Mu5FEm0OqfM"
  },

  title: {
    default: "Chiboy Bakso Rame | Kemitraan Cilok & Bakso Colok Berkualitas",
    template: "%s | Chiboy Cilok & Bakso Colok",
  },

  description:
    "Chiboy adalah produsen cilok dan bakso colok dengan sistem kemitraan terpercaya. Produk halal, tanpa pengawet, dan siap dikembangkan di berbagai daerah Indonesia.",

  keywords: [
    "chiboy",
    "cilok chiboy",
    "bakso colok chiboy",
    "kemitraan cilok",
    "franchise cilok",
    "cilok bakso",
    "usaha cilok",
    "sarta dipa",
  ],

  openGraph: {
    title: "Chiboy | Kemitraan Cilok & Bakso Colok",
    description:
      "Peluang usaha kemitraan cilok dan bakso colok dengan sistem teruji dan modal terjangkau.",
    url: "https://chiboy.vercel.app",
    siteName: "Chiboy",
    images: [
      {
        url: "/banner-chiboy.png",
        width: 1200,
        height: 630,
        alt: "Chiboy Cilok & Bakso Colok",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Chiboy | Kemitraan Cilok & Bakso Colok",
    description:
      "Produsen cilok dan bakso colok dengan sistem kemitraan terpercaya.",
    images: ["/banner-chiboy.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col bg-white text-slate-800">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

