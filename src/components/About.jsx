import React from 'react';

const About = () => {
  return (
    <section className="bg-[#F9F9E9] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-[#27AE60]">Tentang</span>
          <h2 className="mt-3 text-2xl font-bold text-[#1C2833] sm:text-3xl">Visi, Misi, dan Dampak</h2>
          <p className="mt-2 text-slate-600">Mendorong masyarakat untuk bergerak menuju ekonomi sirkular.</p>
        </div>

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
      </div>
    </section>
  );
};

export default About;
