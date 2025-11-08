import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, ShoppingBag } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient and texture overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b2e1b]/70 via-[#0b2e1b]/50 to-[#0b2e1b]/80" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center text-white">
        <span className="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-sm backdrop-blur">
          Eco Platform • Edukasi • Marketplace • Komunitas
        </span>
        <h1 className="font-display max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          GoCycle – Gerakkan Daur Ulangmu Sekarang.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/90 sm:text-lg">
          Platform hijau untuk belajar hidup berkelanjutan, belanja produk ramah lingkungan, dan bergerak bersama komunitas aksi hijau.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#education"
            className="group inline-flex items-center rounded-full bg-[#27AE60] px-6 py-3 text-white shadow-lg shadow-emerald-800/30 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#2ecc71]"
          >
            Mulai Aksi Hijau
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#marketplace"
            className="inline-flex items-center rounded-full bg-white/90 px-6 py-3 text-[#1C2833] shadow-md transition-colors hover:bg-white"
          >
            <ShoppingBag className="mr-2 h-5 w-5 text-[#27AE60]" />
            Jelajahi Marketplace
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
