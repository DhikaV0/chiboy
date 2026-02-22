"use client";

import { useState } from "react";
import Image from "next/image";
import { documentation as photos } from "@/data/documentation";

export default function DokumentasiPage() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const certificates = [
    { title: "HKI", image: "/hki-logo.svg" },
    { title: "DINKES", image: "/dinkes-logo.svg" },
    { title: "HALAL", image: "/halal-logo.svg" },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative h-[5vh] min-h-[350px] text-white">
        <Image
          src="/banner-chiboy.png"
          alt="Dokumentasi Chiboy"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold max-w-3xl">
            Dokumentasi & Legalitas
          </h1>
          <p className="mt-4 max-w-2xl text-white">
            Kumpulan foto foto Dokumentasi kegiatan yang di ambil oleh tim Chiboy 
            serta legalitas produk yang kami miliki.
          </p>
        </div>
      </section>

      {/* LEGALITAS */}
      <section className="bg-slate-50 border-y">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">
            Legalitas Produk
          </h2>
          <div className="flex gap-10 overflow-x-auto scrollbar-hide items-center">
            {certificates.map((item, i) => (
              <div
                key={i}
                className="min-w-[160px] flex flex-col items-center"
              >
                <div className="relative w-20 h-20 mb-3">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm text-slate-700 font-medium">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOTO GRID */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold text-slate-800 mb-10">
            Dokumentasi Kegiatan
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((item, i) => (
              <div
                key={i}
                onClick={() => setActiveImage(item.src)}
                className="cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-emerald-100"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.src}
                    alt={item.desc}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-700">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL PREVIEW */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={activeImage}
                alt="Preview"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}