import React, { useState } from 'react';
import BestSeller from '@/components/BestSeller';
import Categories from '@/components/Categories';
import Hero from '@/components/Hero';
import LiveSell from '@/components/LiveSell';
import Magazine from '@/components/Magazine';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsLetter from '@/components/NewsLetter';
// eslint-disable-next-line import/no-named-as-default
import HamburgerMenu from '@/components/HamburgerMenu';

function Dashboard() {
  const [isOpenBurger, setIsOpenBurger] = useState(false);

  return (
    <div className="dashboard overflow-hidden">
      <Navbar />
      <Hero />
      <div className="flex justify-center items-center">
        <Categories />
      </div>
      <main className="sm:bg-[#EAEAE9]  bg-[#F2F2F2]">
        <BestSeller />
        <HamburgerMenu isOpenBurger={isOpenBurger} onCloseBurger={() => setIsOpenBurger(false)} />
        <LiveSell />
        <Magazine />
        <NewsLetter />
      </main>
      <Footer />
    </div>
  );
}
export default Dashboard;
