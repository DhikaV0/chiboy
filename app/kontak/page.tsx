export default function KontakPage() {
  return (
    <>
      <section className="bg-[var(--brand-orange)] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold">Kontak Kami</h1>
          <p className="mt-4 max-w-2xl text-white/90">
            Hubungi Chiboy untuk informasi produk maupun peluang kemitraan.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-slate-800">
            Informasi Kontak
          </h2>

          <ul className="space-y-4 text-slate-700">
            <li>
              <span className="font-medium">Alamat Pabrik:</span>
              <br />
              Jl. Raya Tapos, Kel. Cimpaeun RT/RW 001/004 No.74,
              Kec. Tapos, Kota Depok, Jawa Barat 16459
            </li>

            <li>
              <span className="font-medium">WhatsApp Admin:</span>
              <br />
              <a
                href="https://wa.me/6285711143500"
                target="_blank"
                className="text-[var(--brand-green)] font-semibold"
              >
                0857-1114-3500
              </a>
            </li>

            <li>
              <span className="font-medium">Media Sosial:</span>
            </li>
            <div className="flex items-center space-x-4 mt-2">
              <a href="https://www.instagram.com/chiboy_baksorame.official" target="_blank">
                  <img src="/instagram.svg" alt="Instagram" className="w-6 h-6 inline-block mr-2" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100089692304994" target="_blank">
                  <img src="/facebook.svg" alt="Facebook" className="w-6 h-6 inline-block mr-2" />
              </a>
              <a href="https://www.youtube.com/@chiboychannelofficial6347" target="_blank">
                  <img src="/youtube.svg" alt="YouTube" className="w-6 h-6 inline-block mr-2" />
              </a>
            </div>
          </ul>
        </div>

        <div className="bg-slate-50 p-10 rounded-lg border">
          <h3 className="text-2xl font-semibold mb-4 text-slate-800">
            Tertarik Bermitra?
          </h3>
          <p className="text-slate-600 mb-8">
            Dapatkan informasi lengkap mengenai sistem kemitraan Chiboy
            dengan menghubungi admin kami.
          </p>

          <a
            href="https://wa.me/6285711143500"
            target="_blank"
            className="inline-block w-full text-center bg-[var(--brand-green)] text-white px-6 py-4 rounded-md font-semibold"
          >
            Hubungi via WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
