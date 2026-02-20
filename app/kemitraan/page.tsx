import CTA from "@/components/sections/CTA";
import Image from "next/image";

const packages = [
  {
    title: "RESELLER",
    price: "Mulai Rp1.200.000",
    items: [
      "1 Booth portable",
      "1 Set Kompor",
      "1 Dangdang",
      "Bahan baku awal",
      "Dokumen kemitraan",
    ],
  },
  {
    title: "AGEN",
    price: "Mulai Rp9.500.000",
    items: [
      "10 Booth portable",
      "10 Dangdang",
      "10 Pasang Botol Saus Dan Kecap",
      "1 pcs Kaos Chiboy Management",
      "Sertifikat Kemitraan",
    ],
  },
];

export default function KemitraanPage() {
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
          Sistem ini dirancang agar mudah dijalankan, dan cocok untuk para pelaku usaha
          yang ingin memulai bisnis jajanan.
        </p>
      </section>

      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center text-slate-800">
            Jenis Kemitraan
          </h2>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto text-center mb-10">
            Kami menyediakan dua jenis kemitraan yang dapat dipilih sesuai dengan kapasitas dan kebutuhan bisnis Anda.
          </p>

          <div className="grid align-center md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
              areas={[
                "Serang", 
                "Petir", 
                "Cilegon", 
                "Pondok Cabe"
              ]}
            />

            <RegionCard
              title="Purwakarta"
              areas={[
                "Sadang", 
                "Babakan Cikao"
              ]}
            />

            <RegionCard
              title="Brebes (Jawa Tengah)"
              areas={["Tanjung Brebes"]}
            />
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-semibold text-neutral-900 mb-4">
          Paket Mitra Chiboy
        </h2>
        <p className="text-neutral-600">
          Pilih paket kemitraan yang sesuai dengan kapasitas bisnis Anda.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8">
        {packages.map((pkg) => (
          <div
            key={pkg.title}
            className="bg-white border rounded-xl p-8 flex flex-col justify-between"
          >
            <div >
              <h3 className="text-xl font-semibold mb-2 text-slate-800">{pkg.title}</h3>
              <p className="text-neutral-500 mb-6">{pkg.price}</p>

              <ul className="space-y-3 text-sm text-neutral-700">
                {pkg.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span>✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#"
              className="mt-8 border border-neutral-900 text-center py-3 rounded-md hover:bg-neutral-900 text-black hover:text-white transition"
            >
              Chat via WhatsApp
            </a>
          </div>
        ))}
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
