import Image from "next/image";

const certificates = [
  { title: "HKI", image: "/hki-logo.svg" },
  { title: "DINKES", image: "/dinkes-logo.svg" },
  { title: "HALAL", image: "/halal-logo.svg" },
];

const photosLeft = [
  {src: "", desc: ""},
  {src: "", desc: ""},
  {src: "", desc: ""}
];

const photosRight = [
  {src: "", desc: ""},
  {src: "", desc: ""},
  {src: "", desc: ""}
];

export default function DokumentasiPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[50vh] min-h-[350px] text-white">
        <Image
          src="/banner-chiboy.png"
          alt="Dokumentasi Chiboy"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Dokumentasi & Legalitas
          </h1>
        </div>
      </section>

      {/* LEGALITAS */}
      <section className="bg-slate-50 border-y">
        <div className="max-w-7xl mx-auto px-6 py-10">
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
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">

          {/* Column 1 */}
          <div className="flex md:flex-col gap-6 overflow-x-auto md:overflow-visible scrollbar-hide">
            {photosLeft.map((item, i) => (
              <div
                key={i}
                className="min-w-[250px] md:min-w-0 flex-shrink-0"
              >
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.desc}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 250px, 50vw"
                  />
                </div>
            
                <p className="mt-2 text-sm text-slate-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex md:flex-col gap-6 overflow-x-auto md:overflow-visible scrollbar-hide">
            {photosLeft.map((item, i) => (
              <div
                key={i}
                className="min-w-[250px] md:min-w-0 flex-shrink-0"
              >
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.desc}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 250px, 50vw"
                  />
                </div>
            
                <p className="mt-2 text-sm text-slate-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}