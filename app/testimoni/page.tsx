import Image from "next/image";
import { testimony as testimonials } from "@/data/testimony";

export default function TestimoniPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[5vh] min-h-[350px] text-white">
        <Image
          src="/banner-chiboy.png"
          alt="Testimoni Mitra"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold max-w-3xl">
            Testimoni
          </h1>
          <p className="mt-4 max-w-2xl text-white">
            Apa kata mitra dan pelanggan kami tentang pengalaman mereka dengan
          </p>
        </div>
      </section>

      {/* SECTION BREAK STYLE */}
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-20">
        {testimonials.map((item, i) => (
          <div key={i} className="text-center">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
              “{item.text}”
            </p>

            <div className="mt-6">
              <p className="font-semibold text-slate-800">
                {item.name}
              </p>
              <p className="text-sm text-slate-500">
                -{item.description}-
              </p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}