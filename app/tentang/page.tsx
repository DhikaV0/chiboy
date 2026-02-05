import Image from "next/image";

export default function TentangPage() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] text-white">
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
            Tentang Chiboy
          </h1>
          <p className="mt-4 max-w-2xl text-white/90">
            Mengenal lebih dekat perjalanan dan nilai yang dibangun oleh Chiboy.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6 text-slate-800">
          Sekilas Tentang Chiboy
        </h2>
        <p className="text-slate-600 leading-relaxed max-w-3xl">
          Chiboy (Cilok dan Bakso Colok Yess) merupakan usaha di bidang
          pengolahan pangan yang dirintis sejak tahun 2016. Berawal dari
          pengalaman panjang di berbagai bidang usaha, Chiboy hadir dengan
          tujuan menghadirkan jajanan khas Indonesia yang berkualitas,
          aman, dan bernilai ekonomi bagi banyak pihak melalui sistem
          kemitraan.
        </p>
      </section>

      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-slate-800">Visi</h3>
            <p className="text-slate-600 leading-relaxed">
              Menjadi produsen cilok dan bakso yang terkemuka di Indonesia
              dengan mengutamakan kualitas, pelayanan, dan kepuasan pelanggan.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-slate-800">Misi</h3>
            <ul className="space-y-3 text-slate-600 list-disc list-inside">
              <li>
                Mengangkat jajanan khas Indonesia agar lebih modern dan
                berdaya saing.
              </li>
              <li>
                Menyediakan produk berkualitas dengan standar keamanan pangan.
              </li>
              <li>
                Membangun kemandirian ekonomi melalui sistem kemitraan.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10 text-center text-slate-800">
          Nilai yang Kami Pegang
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <ValueItem title="Kualitas">
            Mengutamakan bahan baku terbaik dan proses produksi yang baik.
          </ValueItem>
          <ValueItem title="Kejujuran">
            Menjalankan usaha dengan prinsip transparan dan bertanggung jawab.
          </ValueItem>
          <ValueItem title="Kemanfaatan">
            Berorientasi pada manfaat ekonomi dan sosial bagi mitra.
          </ValueItem>
        </div>
      </section>
    </>
  );
}

function ValueItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border rounded-lg p-6">
      <h4 className="font-semibold text-lg mb-2 text-slate-800">{title}</h4>
      <p className="text-sm text-slate-600">{children}</p>
    </div>
  );
}
