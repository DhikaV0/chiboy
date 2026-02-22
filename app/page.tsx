import Hero from "@/components/sections/Hero";
import CTA from "@/components/sections/CTA";
import Image from "next/image";
import { documentation, documentation as photos } from "@/data/documentation";
import Link from "next/link";

const certificates = [
  { title: "HKI", image: "/hki-logo.svg" },
  { title: "DINKES", image: "/dinkes-logo.svg" },
  { title: "HALAL", image: "/halal-logo.svg" },
];

export const metadata = {
  title: "Chiboy Bakso Rame - Kemitraan Cilok & Bakso Colok Terpercaya",
  description:
    "Chiboy Bakso Rame adalah produsen cilok dan bakso colok dengan sistem kemitraan terpercaya. Produk halal, tanpa pengawet, dan siap dikembangkan di berbagai daerah Indonesia.",
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold text-lg mb-2 text-slate-800">
            Bersertifikat Halal
          </h3>
          <p className="text-sm text-slate-600">
            Produk Chiboy telah bersertifikat halal dan aman dikonsumsi.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2 text-slate-800">
            Tanpa Pengawet
          </h3>
          <p className="text-sm text-slate-600">
            Menggunakan bahan baku berkualitas tanpa bahan berbahaya.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2 text-slate-800">
            Sistem Kemitraan
          </h3>
          <p className="text-sm text-slate-600">
            Cocok untuk usaha pemula maupun pengembangan bisnis.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/7DK0bWSHk50?si=BJd3NZSoR-D4DgEz"
            title="Company Profile Chiboy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-800">
            Dipercaya oleh Mitra di Berbagai Daerah
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Chiboy telah bermitra dengan berbagai pelaku usaha dan terus
            berkembang di berbagai wilayah Indonesia.
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
          {documentation.slice(0, 6).map((item, i) => (
            <div
              key={i}
              className="min-w-[220px] aspect-square relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <Image
                src={item.src}
                alt={item.desc}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link
            href="/dokumentasi"
            className="inline-block bg-[var(--brand-green)] text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition"
          >
            Lihat Dokumentasi Lengkap
          </Link>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="max-w-2xl mx-auto px-6 py-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-800">
              Legal & Terpercaya
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Produk Chiboy telah melalui proses legalitas dan sertifikasi yang
              berlaku.
            </p>
          </div>

          <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible scrollbar-hide pb-2">
            {certificates.map((item, i) => (
              <CertificateCard key={i} title={item.title} image={item.image} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Chiboy",
            url: "https://chiboy.vercel.app",
            logo: "https://chiboy.vercel.app/banner-chiboy.png",
            description:
              "Produsen cilok dan bakso colok dengan sistem kemitraan terpercaya.",
            sameAs: [
              "https://www.instagram.com/chiboy_baksorame.official",
              "https://www.youtube.com/@chiboychannelofficial6347",
              "https://www.facebook.com/profile.php?id=100089692304994",
              "https://www.tiktok.com/@chiboy.bakso.rame"
            ]
          }),
        }}
      />
    </>
  );
  function CertificateCard({ title, image }: { title: string; image: string }) {
    return (
      <div className="min-w-[170px] md:min-w-0 bg-white border rounded-lg p-6 text-center">
        <div className="relative w-20 h-20 mx-auto mb-4">
          <Image src={image} alt={title} fill className="object-contain" />
        </div>

        <p className="font-medium text-slate-800">{title}</p>
      </div>
    );
  }
}
