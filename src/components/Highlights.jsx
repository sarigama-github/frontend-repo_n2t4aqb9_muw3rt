import React from 'react';
import { BookOpen, ShoppingBag, Users } from 'lucide-react';

const highlights = [
  {
    icon: BookOpen,
    title: 'Edukasi Lingkungan',
    desc: 'Materi, artikel, dan video untuk memulai kebiasaan ramah lingkungan dari rumah.',
  },
  {
    icon: ShoppingBag,
    title: 'Marketplace Hijau',
    desc: 'Produk daur ulang, reusable, hingga teknologi hijau terpercaya dan terkurasi.',
  },
  {
    icon: Users,
    title: 'Komunitas Aksi Hijau',
    desc: 'Bergabung, berbagi, dan bergerak dalam program aksi hijau di sekitarmu.',
  },
];

const Highlights = () => {
  return (
    <section className="bg-[#F9F9E9] py-16" aria-labelledby="highlights-heading">
      <div className="mx-auto max-w-7xl px-6">
        <h2 id="highlights-heading" className="text-center text-2xl font-bold text-[#1C2833] sm:text-3xl">
          Tiga Pilar GoCycle
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex rounded-xl bg-emerald-50 p-3 text-[#27AE60]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-[#1C2833]">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{desc}</p>
              <div className="mt-4 h-1 w-0 bg-gradient-to-r from-[#27AE60] to-[#2ecc71] transition-all duration-300 group-hover:w-24" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
