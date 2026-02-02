"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          <Image
            src="/navbar logo.png"
            alt="Chiboy Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-slate-700 font-medium">
          <NavLinks />
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2"
          aria-label="Toggle Menu"
        >
          <Image
            src="/burger-bar.svg"
            alt="Menu Icon"
            width={24}
            height={24}
          />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t bg-white">
          <nav className="flex flex-col px-6 py-6 space-y-4 text-slate-700 font-medium">
            <NavLinks onClick={() => setOpen(false)} />
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLinks({ onClick }: { onClick?: () => void }) {
  return (
    <>
      <Link href="/" onClick={onClick}>Home</Link>
      <Link href="/tentang" onClick={onClick}>Tentang</Link>
      <Link href="/produk" onClick={onClick}>Produk</Link>
      <Link href="/kemitraan" onClick={onClick}>Kemitraan</Link>
      <Link href="/kontak" onClick={onClick}>Kontak</Link>
    </>
  );
}
