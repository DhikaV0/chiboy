import CTA from "@/components/sections/CTA";

export default function KemitraanPage() {
  return (
    <>
      <section className="bg-[var(--brand-green)] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-5xl font-bold max-w-3xl">
            Peluang Usaha dengan Sistem Kemitraan Chiboy
          </h1>
          <p className="mt-6 max-w-2xl text-white/90">
            Bangun usaha jajanan cilok dan bakso colok bersama Chiboy dengan
            sistem kemitraan yang sudah berjalan dan terbukti.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6 text-black">
          Apa itu Kemitraan Chiboy?
        </h2>
        <p className="text-slate-600 max-w-3xl leading-relaxed">
          Kemitraan Chiboy adalah bentuk kerja sama usaha yang saling
          menguntungkan antara Chiboy sebagai produsen dengan mitra usaha
          dalam mendistribusikan produk cilok dan bakso colok ke konsumen.
          Sistem ini dirancang agar mudah dijalankan, baik untuk pemula
          maupun pelaku usaha yang ingin berkembang.
        </p>
      </section>

      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-10 text-center text-slate-800">
            Jenis Kemitraan
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <KemitraanCard
              title="Distribusi Center (DC)"
              desc="Pusat pendistribusian utama untuk area tertentu."
            />
            <KemitraanCard
              title="Depo Pengembang"
              desc="Pendistribusi tingkat kota yang membina agen."
            />
            <KemitraanCard
              title="Agen"
              desc="Pendistribusi tingkat kecamatan dan pemasok reseller."
            />
            <KemitraanCard
              title="Reseller"
              desc="Mitra penjual langsung ke konsumen."
            />
          </div>
        </div>
      </section>
      
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-slate-800">
              Kemitraan Chiboy Tersebar di Berbagai Daerah
            </h2>
            <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
              Mitra Chiboy telah berkembang dan tersebar di berbagai wilayah
              Jabodetabek hingga Jawa Tengah.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <RegionCard
              title="Jakarta Timur"
              areas={[
                "Cibubur",
                "Duren Sawit",
                "Kalibaru",
                "Jatinegara",
                "Cipinang",
                "Pisangan Timur",
              ]}
            />

            <RegionCard
              title="Jakarta Pusat"
              areas={[
                "Kemayoran",
                "Senen",
                "Cempaka Putih",
                "Tanah Abang",
                "Johar Baru",
              ]}
            />

            <RegionCard
              title="Jakarta Utara"
              areas={[
                "Sunter",
                "Tanjung Priuk",
                "Koja",
                "Pelumpang",
                "Cilincing",
              ]}
            />

            <RegionCard
              title="Depok"
              areas={[
                "Tapos",
                "Cilodong",
                "Cimanggis",
                "Sukmajaya",
                "Pancoran Mas",
                "Beji",
                "Cinere",
                "Sawangan",
              ]}
            />

            <RegionCard
              title="Bogor"
              areas={[
                "Bojong Gede",
                "Klapanunggal",
                "Ciluar",
                "Citeureup",
                "Cikeas",
                "Karanggan",
              ]}
            />

            <RegionCard
              title="Bekasi"
              areas={[
                "Rawa Lumbu",
                "Setu",
                "Jati Asih",
                "Jatiwaringin",
                "Cikunir",
                "Bintara",
              ]}
            />

            <RegionCard
              title="Banten"
              areas={["Serang", "Petir", "Cilegon", "Pondok Cabe"]}
            />

            <RegionCard
              title="Purwakarta"
              areas={["Sadang", "Babakan Cikao"]}
            />

            <RegionCard
              title="Brebes (Jawa Tengah)"
              areas={["Tanjung Brebes"]}
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10 text-center text-slate-800">
          Kenapa Gabung dengan Chiboy?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <BenefitItem title="Produk Berkualitas">
            Menggunakan bahan baku berkualitas dan telah bersertifikat halal.
          </BenefitItem>
          <BenefitItem title="Sistem Teruji">
            Sistem kemitraan sudah berjalan dan berkembang di banyak wilayah.
          </BenefitItem>
          <BenefitItem title="Peluang Berkembang">
            Cocok untuk usaha sampingan maupun usaha utama.
          </BenefitItem>
        </div>
      </section>

      <CTA />
    </>
  );
}

function KemitraanCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg border text-center">
      <h3 className="font-semibold text-lg mb-2 text-slate-800">{title}</h3>
      <p className="text-sm text-slate-600">{desc}</p>
    </div>
  );
}

function RegionCard({
  title,
  areas,
}: {
  title: string;
  areas: string[];
}) {
  return (
    <div className="bg-white border rounded-lg p-6">
      <h3 className="font-semibold text-lg mb-4 text-slate-800">{title}</h3>
      <ul className="space-y-1 text-sm text-slate-600">
        {areas.map((area) => (
          <li key={area}>• {area}</li>
        ))}
      </ul>
    </div>
  );
}

function BenefitItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="text-center">
      <h3 className="font-semibold text-lg mb-2 text-slate-800">{title}</h3>
      <p className="text-sm text-slate-600">{children}</p>
    </div>
  );
}
