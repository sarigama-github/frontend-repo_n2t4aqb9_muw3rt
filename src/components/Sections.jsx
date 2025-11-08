import React, { useMemo } from 'react';
import { Leaf, Recycle, Sprout, Globe2, MapPin, MessageCircle, Play } from 'lucide-react';

const SectionHeader = ({ eyebrow, title, subtitle, id }) => (
  <div className="mx-auto max-w-3xl text-center" id={id}>
    <span className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-[#27AE60]">
      {eyebrow}
    </span>
    <h2 className="mt-3 text-2xl font-bold text-[#1C2833] sm:text-3xl">{title}</h2>
    {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
  </div>
);

export const Marketplace = () => {
  const products = useMemo(() => [
    { id: 1, name: 'Tas Daur Ulang', category: 'Daur Ulang', price: 'Rp120.000' },
    { id: 2, name: 'Botol Reusable', category: 'Lifestyle', price: 'Rp85.000' },
    { id: 3, name: 'Komposter Mini', category: 'Komposter', price: 'Rp350.000' },
    { id: 4, name: 'Sabun Organik', category: 'Rumah Ramah Lingkungan', price: 'Rp45.000' },
  ], []);

  const categories = ['Semua', 'Daur Ulang', 'Rumah Ramah Lingkungan', 'Lifestyle', 'Komposter'];

  return (
    <section id="marketplace" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Marketplace"
          title="Produk Ramah Lingkungan"
          subtitle="Temukan produk terkurasi untuk gaya hidup berkelanjutan."
        />

        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((c) => (
            <button key={c} className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-[#1e824c] hover:bg-emerald-100">
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div key={p.id} className="group rounded-2xl border border-emerald-100 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex h-36 items-center justify-center rounded-xl bg-emerald-50">
                <Leaf className="h-10 w-10 text-[#27AE60]" />
              </div>
              <h3 className="mt-4 font-semibold text-[#1C2833]">{p.name}</h3>
              <p className="text-sm text-slate-600">{p.category}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-semibold text-[#27AE60]">{p.price}</span>
                <button className="rounded-full bg-[#27AE60] px-4 py-2 text-sm text-white transition hover:bg-[#2ecc71]">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Education = () => {
  const topics = [
    { id: 1, title: 'Cara Memilah Sampah', icon: Recycle },
    { id: 2, title: 'Mulai Berkebun & Kompos', icon: Sprout },
    { id: 3, title: 'Kebiasaan Hidup Berkelanjutan', icon: Globe2 },
  ];

  return (
    <section id="education" className="bg-[#F9F9E9] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Edukasi"
          title="Belajar Dari Dasar Hingga Mahir"
          subtitle="Artikel dan video singkat untuk menumbuhkan kebiasaan hijau."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {topics.map(({ id, title, icon: Icon }) => (
            <article key={id} className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex rounded-xl bg-emerald-50 p-3 text-[#27AE60]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-[#1C2833]">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">Video ringkas dan artikel praktik terbaik.</p>
              <button className="mt-4 inline-flex items-center rounded-full bg-[#27AE60] px-4 py-2 text-sm text-white hover:bg-[#2ecc71]">
                <Play className="mr-2 h-4 w-4" />
                Mulai Belajar
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Community = () => {
  const testimonials = [
    { name: 'Ayu', text: 'Kami berhasil mengurangi 40% sampah rumah dalam 2 bulan!' },
    { name: 'Bima', text: 'Komunitasnya aktif, banyak kegiatan tanam pohon.' },
  ];

  return (
    <section id="community" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Komunitas"
          title="Gerakan Nyata di Sekitarmu"
          subtitle="Temukan acara dan bagikan ide aksi hijau."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-emerald-100 p-6">
            <div className="flex items-center gap-2 text-[#27AE60]">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">Peta Inisiatif Hijau</span>
            </div>
            <div className="mt-4 h-64 w-full rounded-xl bg-emerald-50" />
            <p className="mt-2 text-sm text-slate-600">Peta interaktif acara dan inisiatif akan hadir di sini.</p>
            <button className="mt-4 rounded-full bg-[#27AE60] px-4 py-2 text-sm text-white hover:bg-[#2ecc71]">
              Gabung Komunitas Hijau Kami
            </button>
          </div>

          <div className="space-y-4">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl border border-emerald-100 bg-[#F9F9E9] p-6">
                <div className="flex items-center gap-2 text-[#1C2833]">
                  <MessageCircle className="h-5 w-5 text-[#27AE60]" />
                  <span className="font-semibold">{t.name}</span>
                </div>
                <p className="mt-2 text-slate-700">“{t.text}”</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const AboutContact = () => {
  return (
    <section id="about" className="bg-[#F9F9E9] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Tentang"
          title="Visi, Misi, dan Dampak"
          subtitle="Mendorong masyarakat untuk bergerak menuju ekonomi sirkular."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-emerald-100 bg-white p-6 text-center">
            <h3 className="text-3xl font-bold text-[#27AE60]">12K+</h3>
            <p className="text-slate-600">anggota peduli lingkungan</p>
          </div>
          <div className="rounded-2xl border border-emerald-100 bg-white p-6 text-center">
            <h3 className="text-3xl font-bold text-[#27AE60]">280T</h3>
            <p className="text-slate-600">sampah didaur ulang</p>
          </div>
          <div className="rounded-2xl border border-emerald-100 bg-white p-6 text-center">
            <h3 className="text-3xl font-bold text-[#27AE60]">540+</h3>
            <p className="text-slate-600">proyek aksi hijau</p>
          </div>
        </div>

        <div id="contact" className="mt-12 rounded-2xl border border-emerald-100 bg-white p-6">
          <h3 className="text-xl font-semibold text-[#1C2833]">Kontak</h3>
          <p className="mt-1 text-sm text-slate-600">Ada ide atau kolaborasi? Kirim pesanmu.</p>
          <form className="mt-6 grid gap-4 md:grid-cols-2">
            <input className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 outline-none placeholder:text-slate-500" placeholder="Nama" />
            <input className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 outline-none placeholder:text-slate-500" placeholder="Email" />
            <textarea className="md:col-span-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 outline-none placeholder:text-slate-500" rows={4} placeholder="Pesan" />
            <div>
              <button type="button" className="rounded-full bg-[#27AE60] px-6 py-3 text-white hover:bg-[#2ecc71]">Kirim Pesan</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
