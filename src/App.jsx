import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import { Marketplace, Education, Community, AboutContact } from './components/Sections';

function App() {
  return (
    <div className="font-sans text-[#1C2833]">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Highlights />
        <Marketplace />
        <Education />
        <Community />
        <AboutContact />
      </main>
      <footer className="bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-slate-600">
          © {new Date().getFullYear()} GoCycle — Menuju masa depan berkelanjutan.
        </div>
      </footer>
    </div>
  );
}

export default App;
