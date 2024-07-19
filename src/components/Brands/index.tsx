import React from 'react';
import Image from 'next/image';

const BrandGrid = () => {
  const brands = [
    { name: 'Pokemon', imageUrl: '/pokemon.svg' },
    { name: 'LEGO', imageUrl: '/lego.svg' },
    { name: 'HERMES', imageUrl: '/hermes.svg' },
    { name: 'LOUIS VUITTON', imageUrl: '/lv.svg' },
    { name: 'The MACALLAN', imageUrl: '/macallan.svg' },
    { name: 'märklin', imageUrl: '/marklin.svg' },
    { name: 'ROLEX', imageUrl: '/rolex.svg' },
    { name: 'Cartier', imageUrl: '/cartier.svg' },
    { name: 'OMEGA', imageUrl: '/omega.svg' },
    { name: 'Nikon', imageUrl: '/nikon.svg' },
    { name: 'Apple', imageUrl: '/apple.svg' },
    { name: 'Pixel', imageUrl: '/pixel.svg' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Vous pouvez retrouvez de nombreuses <span className='font-cormo text-4xl text-primaryColor'>marques</span> chez adn enchères</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {brands.map((brand) => (
  <div key={brand.name} className="bg-gray-100 p-4 flex items-center justify-center h-24 cursor-pointer hover:opacity-75 rounded-lg">
    {brand.name === 'Apple' ? (
      <img src={brand.imageUrl} alt={brand.name} className="w-16 h-auto" />
    ) : (
      <Image
        src={brand.imageUrl}
        alt={brand.name}
        width={100}
        height={50}
        objectFit="contain"
      />
    )}
  </div>
))}
      </div>
    </div>
  );
};

export default BrandGrid;