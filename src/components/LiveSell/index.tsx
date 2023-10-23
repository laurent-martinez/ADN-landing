import Image from 'next/image';
import React from 'react';

function LiveSell() {
  const fakeData = [{
    image: '/nikon.png',
    title: 'Nikon 5ES',
  }, {
    image: '/chooGlasses.png',
    title: 'Lunettes Choo',
  }, {
    image: '/hermes.png',
    title: 'Foulard Hermès',
  }, {
    image: '/iphone.png',
    title: 'Iphone 14S',
  }, {
    image: '/prada.png',
    title: 'Sac Prada',
  }, {
    image: '/graphix.png',
    title: 'Carte graphique',
  }];

  return (
    <div className="bg-gradient-to-b from-[#173C6A] from-90% to-10%  to-[#08172a] w-screen h-auto p-3 flex flex-col justify-center items-center">
      <p className="py-6 text-xl sm:text-3xl text-white font-semibold">Lots les plus populaires</p>
      <div className="live-sell w-screen flex overflow-x-auto gap-0 my-4">
        {fakeData.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className="w-full xl:w-1/6 group cursor-pointer relative flex flex-col justify-center items-center" key={index}>
            <div className="absolute inset-0 bg-[#FFFDD0] opacity-0 lg:group-hover:opacity-40 transition-opacity ease-out duration-500" />
            <Image
              className="xl:w-full xl:h-[250px] min-w-[200px] h-[150px] xl:object-fill xs:p-4 lg:p-0"
              src={item.image}
              alt="nikon camera"
              width={849}
              height={748}
            />
            <p className="text-md sm:text-lg font-poppins font-semibold text-center text-white p-2 ">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LiveSell;
