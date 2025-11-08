import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="mx-auto max-w-7xl px-6 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} GoCycle — Menuju masa depan berkelanjutan.
      </div>
    </footer>
  );
};

export default Footer;
