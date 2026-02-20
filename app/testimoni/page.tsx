import Image from "next/image";

const testimonials = [
  {
    name: "Ibu Sripati Marliza, SH",
    description: "Notaris Kabupaten Bogor",
    text: "Baksonya enak, rasanya enak dan rasa dagingnya terasa sekali, pkoknya wajib dicoba deh.",
  },
  {
    name: "Ibu Melani",
    description: "Anggota Komunitas Gowes",
    text: "Rasanya enak banget, cocok dipesan jika ada acara seperti pengajian dirumah rumah.",
  },
  {
    name: "Ibu Vivi",
    description: "Ibu Rumah Tangga",
    text: "Coba ikut bazaar di tapos dan kebetulan ketemu booth Chiboy, pas saya cobain, ternyata enak dan bikin nagih.",
  },
  {
    name: "Ibu Tuty",
    description: "Owner Pawen Putri",
    text: "Ciloknya enak, lembut dan gurih, untuk yang tertarik bermitra dengan Chiboy, langsung saja hubungi kontaknya.",
  },
  {
    name: "Ibu Ida",
    description: "Reseller Chiboy",
    text: "Semenjak ada Chiboy, warung saya gk pernah sepi pelanggan karena aroma cilok nya yang enak dan bikin orang dateng terus.",
  },
  {
    name: "Pak Palahudin",
    description: "Guru SMK IT Tazakka",
    text: "Saya coba makan Chiboy, cilok dan bakso colok yes, setelah dicoba, rasanya enak sekali, gurih dan dagingnya terasa sekali.",
  },
];

export default function TestimoniPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[50vh] min-h-[350px] text-white">
        <Image
          src="/banner-chiboy.png"
          alt="Testimoni Mitra"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Testimoni Mitra Chiboy
          </h1>
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