import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import MarketplacePage from './MarketplacePage';
import EducationPage from './EducationPage';
import CommunityPage from './CommunityPage';
import ContactPage from './ContactPage';
import About from './About';

const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/marketplace" element={<MarketplacePage />} />
      <Route path="/education" element={<EducationPage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default NavRoutes;
