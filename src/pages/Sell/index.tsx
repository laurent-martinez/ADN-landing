import Navbar from '@/components/Navbar';
import React from 'react';

function Sell() {
  return (
    <div className="overflow-hidden w-screen h-screen">
      <Navbar />
      <div className="flex justify-center items-center sell-container w-full h-full overflow-hidden bg-[#5EBB95]">
        <h1 className="font-bold text-7xl text-[#FFFDD0]">Vendre</h1>
      </div>
    </div>
  );
}

export default Sell;
