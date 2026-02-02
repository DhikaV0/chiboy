import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[var(--brand-orange)] text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
          Produsen Cilok & Bakso Colok dengan Sistem Kemitraan
        </h1>

        <p className="mt-6 max-w-xl text-white/90">
          Menghadirkan jajanan khas Indonesia yang berkualitas, halal, dan
          siap dikembangkan melalui kemitraan.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/kemitraan"
            className="bg-white text-[var(--brand-orange)] px-6 py-3 rounded-md font-semibold"
          >
            Gabung Kemitraan
          </Link>
          <Link
            href="/produk"
            className="border border-white px-6 py-3 rounded-md"
          >
            Lihat Produk
          </Link>
        </div>
      </div>
    </section>
  );
}
