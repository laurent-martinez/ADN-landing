import React from 'react';
import Image from 'next/image';

function Categories() {
  const categories = [{
    id: 1,
    name: 'Véhicule',
    image: '/categories-1.png',
  },
  {
    id: 2,
    name: 'Informatique',
    image: '/categories-2.png',
  },
  {
    id: 3,
    name: 'Téléphonie',
    image: '/categories-3.png',
  },
  {
    id: 4,
    name: 'Electroménager',
    image: '/categories-4.png',
  },
  {
    id: 5,
    name: 'Outillage',
    image: '/categories-5.png',
  },
  {
    id: 6,
    name: 'Loisir',
    image: '/categories-6.png',
  },
  {
    id: 7,
    name: 'Mode',
    image: '/categories-7.png',
  },
  {
    id: 8,
    name: 'Ameublement',
    image: '/categories-8.png',

  }];
  return (
    <div className="carousel xl:flex xl:justify-center items-center overflow-x-auto whitespace-nowrap p-2 sm:p-6 sm:mt-4">
      {categories && categories.map((category) => (
        <div
          key={category.id}
          className="sm:w-[216px] sm:h-[162px] w-[172.8px] h-[129.6px] inline-block sm:mr-6 group cursor-pointer"
        >
          <div className="category-image w-11/12 sm:w-full">
            <div className="relative">
              <Image width={216} height={128} alt="picture of orange car" src={category.image} className="sm:w-full shadow-lg rounded-md" />
              <div className="absolute inset-0 bg-[#FFFDD0] opacity-0 lg:group-hover:opacity-40 transition-opacity ease-out duration-500" />
            </div>
            <p className="text-center font-poppins font-semibold group-hover:font-bold sm:text-xl text-sm sm:text-[#505050]">{category.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Categories;
