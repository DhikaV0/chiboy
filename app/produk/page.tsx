"use client";

import { useState } from "react";
import Image from "next/image";
export default function ProdukPage() {
  return (
    <>
      <section className="bg-[var(--brand-yellow)]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold">Produk Chiboy</h1>
          <p className="mt-4 max-w-2xl text-slate-700">
            Chiboy menghadirkan produk cilok dan bakso colok dengan cita rasa
            khas, berkualitas, dan aman dikonsumsi.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10 text-slate-800">Produk</h2>

        <div
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
        >
          {products.map((product, idx) => (
            <ProductCard
              key={idx}
              title={product.title}
              desc={product.desc}
              image={product.image}
            />
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-10 text-center text-slate-800">
            Keunggulan Produk
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            <FeatureItem title="Rasa Khas">
              Cita rasa klasik yang disukai berbagai kalangan.
            </FeatureItem>
            <FeatureItem title="Bahan Berkualitas">
              Menggunakan bahan baku pilihan.
            </FeatureItem>
            <FeatureItem title="Tanpa Pengawet">
              Aman dan sehat untuk dikonsumsi.
            </FeatureItem>
            <FeatureItem title="Siap Usaha">
              Dirancang untuk mendukung sistem kemitraan.
            </FeatureItem>
          </div>
        </div>
      </section>
    </>
  );
}

function ProductCard({
  title,
  desc,
  image,
}: {
  title: string;
  desc: string;
  image: string;
}) {
  return (
    <div className="min-w-[220px] md:min-w-[260px] border rounded-xl overflow-hidden bg-white">
      {/* Image */}
      <div className="relative aspect-square bg-slate-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
        <p className="text-sm text-slate-500">{desc}</p>
      </div>
    </div>
  );
}

const products = [
  {
    title: "Cilok",
    desc: "Cilok dengan rasa gurih dan kenyal.",
    image: "/placeholder.png",
  },
  {
    title: "Bakso Colok",
    desc: "Bakso colo k favorit semua kalangan.",
    image: "/placeholder.png",
  },
  {
    title: "Cilok Pedas",
    desc: "Varian cilok dengan sambal khas.",
    image: "/placeholder.png",
  },
  {
    title: "Bakso Original",
    desc: "Bakso original tanpa pengawet.",
    image: "/placeholder.png",
  },
  {
    title: "Bakso Original",
    desc: "Bakso original tanpa pengawet.",
    image: "/placeholder.png",
  },
    {
      title: "Bakso Original",
      desc: "Bakso original tanpa pengawet.",
      image: "/placeholder.png",
    },
];


function FeatureItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white p-6 rounded-lg border">
      <h4 className="font-semibold mb-2 text-slate-800">{title}</h4>
      <p className="text-sm text-slate-600">{children}</p>
    </div>
  );
}
