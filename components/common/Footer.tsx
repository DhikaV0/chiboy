import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[var(--brand-green)] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-3">
        {/* Brand */}
        <div>
          <Link href="/" className="font-bold text-xl">
            <Image
              src="/navbar logo.png"
              alt="Chiboy Logo"
              width={120}
              height={40}
              priority
            />
          </Link>
          <p className="text-sm text-white/80 max-w-sm">
            Chiboy merupakan produsen cilok dan bakso colok dengan kualitas
            terjaga serta sistem kemitraan yang terus berkembang.
          </p>
        </div>

        {/* Kontak */}
        <div>
          <h4 className="font-semibold mb-4">Kontak Kami</h4>
          <ul className="space-y-3 text-sm text-white/80">
          <li>Jl. Raya Tapos, Kel. Cimpaeun RT/RW 001/004 No.74, Kec. Tapos, Kota Depok, Jawa Barat 16459</li>
          <li>WhatsApp: +62 85711143500</li>
          </ul>
        </div>

        {/* Sosial */}
        <div>
          <h4 className="font-semibold mb-4">Follow Kami</h4>
          <p className="text-sm text-white/80 mb-4">
            Ikuti media sosial kami untuk update terbaru.
          </p>

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
            <a href="https://www.tiktok.com/@chiboy.bakso.rame" target="_blank">
              <img src="/tiktok.svg" alt="TikTok" className="w-6 h-6 inline-block mr-2" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
