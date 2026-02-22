"use client";

import { useState } from "react";
import Image from "next/image";
import { products } from "@/data/products";

export default function ProdukPage() {
  return (
    <>
      <section className="relative h-[5vh] min-h-[350px] text-white">
        <Image
          src="/banner-chiboy.png"
          alt="Banner Chiboy"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold max-w-3xl">
            Produk Chiboy
          </h1>
          <p className="mt-4 max-w-2xl text-white">
            Chiboy menghadirkan produk cilok dan bakso colok dengan cita rasa
            khas, berkualitas, dan aman dikonsumsi.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Produk Kami
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Pilihan produk unggulan Chiboy yang telah digunakan oleh berbagai mitra.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100"
            >
              <div className="relative aspect-[4/3]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
          
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-800">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {product.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
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
