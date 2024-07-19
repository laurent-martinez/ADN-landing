import React, { useEffect, useState } from 'react';
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
import HorizontalScroll from '@/components/HorizontalScroll';
import AuctionItems from '@/components/AunctionItem';
import AunctionTest from '@/components/AunctionTest';
import SalesComponent from '@/components/SalesComponent';
import ADNEncheresInfo from '@/components/AdnEncheresInfo';
import ExpertsComponent from '@/components/Priseurs';
import BrandGrid from '@/components/Brands';
import AdnInfo from '@/components/AdnInfo';
import AunctionComponent from '@/components/AunctionComponent';
import SellerComponent from '@/components/SellerComponent';
import SellerComponentdeux from '@/components/SellerComponentDeux';




function Dashboard() {
  const [isOpenBurger, setIsOpenBurger] = useState(false);

  return (
    <div className="dashboard overflow-hidden">
      <Navbar />
      <Hero />
      <div className="flex justify-center items-center">
        <Categories />
      </div>
      <main className="mx-auto">
        {/* <BestSeller /> */}
        {/* <AunctionTest /> */}
        <HamburgerMenu isOpenBurger={isOpenBurger} onCloseBurger={() => setIsOpenBurger(false)} />   
        <AuctionItems />
        <LiveSell />
        {/* <Magazine /> */}
        {/* <HorizontalScroll /> */}
        {/* <ExpertsComponent /> */}
        <AdnInfo />
        {/* <BrandGrid /> */}
        {/* <AunctionComponent /> */}
        <ADNEncheresInfo />
        <SellerComponent />
        <SellerComponentdeux />
        {/* <NewsLetter /> */}
      </main>
      <Footer />
    </div>
  );
}
export default Dashboard;
