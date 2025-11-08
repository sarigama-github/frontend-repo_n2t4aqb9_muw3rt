import React from 'react';
import { Leaf } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-full border border-white/10 bg-white/70 p-2 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <a href="#home" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#27AE60] to-[#1e824c] text-white shadow">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="font-semibold text-[#1C2833]">GoCycle</span>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-[#1C2833] md:flex">
            <a href="#marketplace" className="hover:text-[#27AE60]">Marketplace</a>
            <a href="#education" className="hover:text-[#27AE60]">Edukasi</a>
            <a href="#community" className="hover:text-[#27AE60]">Komunitas</a>
            <a href="#about" className="hover:text-[#27AE60]">Tentang</a>
            <a href="#contact" className="hover:text-[#27AE60]">Kontak</a>
          </nav>

          <a href="#marketplace" className="hidden rounded-full bg-[#27AE60] px-4 py-2 text-sm text-white shadow hover:bg-[#2ecc71] md:inline-block">
            Mulai Sekarang
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
