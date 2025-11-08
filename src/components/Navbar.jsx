import React from 'react';
import { NavLink } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const Navbar = () => {
  const linkBase = 'rounded-full px-4 py-2 text-sm transition-colors';
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-3">
          <NavLink to="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#27AE60] to-[#1e824c] text-white shadow">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="font-semibold text-[#1C2833]">GoCycle</span>
          </NavLink>

          <nav className="hidden items-center gap-2 md:flex">
            <NavLink
              to="/marketplace"
              className={({ isActive }) => `${linkBase} ${isActive ? 'bg-[#27AE60] text-white' : 'text-[#1C2833] hover:bg-emerald-100'}`}
            >
              Marketplace
            </NavLink>
            <NavLink
              to="/education"
              className={({ isActive }) => `${linkBase} ${isActive ? 'bg-[#27AE60] text-white' : 'text-[#1C2833] hover:bg-emerald-100'}`}
            >
              Edukasi
            </NavLink>
            <NavLink
              to="/community"
              className={({ isActive }) => `${linkBase} ${isActive ? 'bg-[#27AE60] text-white' : 'text-[#1C2833] hover:bg-emerald-100'}`}
            >
              Komunitas
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `${linkBase} ${isActive ? 'bg-[#27AE60] text-white' : 'text-[#1C2833] hover:bg-emerald-100'}`}
            >
              Tentang
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => `${linkBase} ${isActive ? 'bg-[#27AE60] text-white' : 'text-[#1C2833] hover:bg-emerald-100'}`}
            >
              Kontak
            </NavLink>
          </nav>

          <NavLink to="/marketplace" className="hidden rounded-full bg-[#27AE60] px-4 py-2 text-sm text-white shadow hover:bg-[#2ecc71] md:inline-block">
            Mulai Sekarang
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
