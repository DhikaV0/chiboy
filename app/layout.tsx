import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "Chiboy - Kemitraan Cilok & Bakso",
  description: "Produsen cilok dan bakso colok dengan sistem kemitraan",
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
