import React from 'react';
import Navbar from './components/Navbar';
import NavRoutes from './components/NavRoutes';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <Navbar />
      <main className="pt-2">
        <NavRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
