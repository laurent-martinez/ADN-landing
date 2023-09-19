import React from 'react';
import BestSeller from '@/components/BestSeller';
import Categories from '@/components/Categories';
import Hero from '@/components/Hero';
import LiveSell from '@/components/LiveSell';
import Magazine from '@/components/Magazine';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsLetter from '@/components/NewsLetter';
import HamburgerMenu from '@/components/HamburgerMenu';

function Dashboard() {
  return (
    <div className="dashboard overflow-hidden">
      <Navbar />
      <Hero />
      <div className="flex justify-center items-center">
        <Categories />
      </div>
      <main className="bg-[#EAEAE9]">
        <BestSeller />
        <HamburgerMenu isOpen />
        <LiveSell />
        <Magazine />
        <NewsLetter />
      </main>
      <Footer />
    </div>
  );
}
export default Dashboard;
