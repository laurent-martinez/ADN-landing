import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import CategoryModal from '../ModalCategory';

function Categories() {
  const categories = [
    { id: 1, name: 'Destockage', image: '/categories-1.png' },
    { id: 2, name: 'Informatique', image: '/categories-2.png' },
    { id: 3, name: 'Téléphonie', image: '/categories-3.png' },
    { id: 4, name: 'Electroménager', image: '/categories-4.png' },
    { id: 5, name: 'Loisir', image: '/categories-6.png' },
    { id: 6, name: 'Mode', image: '/categories-7.png' },
    { id: 7, name: 'Ameublement', image: '/categories-8.png' },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleCategories, setVisibleCategories] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 640 && width < 768) {
        setVisibleCategories(3);
      } else if (width >= 768 && width < 1280) {
        setVisibleCategories(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto">
      {/* Pour les téléphones portables */}
      <div className="sm:hidden flex flex-wrap justify-center items-center gap-2 mt-6">
        {categories.slice(0, 2).map((category) => (
          <div
            key={category.id}
            className="w-[120px] h-[72px] group cursor-pointer relative"
          >
            <div className="category-image">
              <div className="relative">
                <Image
                  width={120}
                  height={72}
                  alt={category.name}
                  src={category.image}
                  className="w-full h-full object-cover shadow-lg rounded-lg"
                />
                <div className="absolute inset-0 bg-[#FFFDD0] opacity-0 group-hover:opacity-40 transition-opacity ease-out duration-500" />
              </div>
              <p className="text-center font-poppins font-semibold text-xs text-[#505050] mt-1">
                {category.name}
              </p>
            </div>
          </div>
        ))}
        <button
          className="bg-primaryColor hover:opacity-75 transition-opacity duration-500 ease-out text-white font-bold py-2 px-3 rounded capitalize text-xs mt-2 sm:mt-0"
          onClick={openModal}
        >
          tout voir
        </button>
      </div>

{/* Pour les tablettes et écrans moyens */}
<div className="hidden sm:flex xl:hidden justify-center items-start mt-6 space-x-4">
  {categories.slice(0, visibleCategories).map((category) => (
    <div
      key={category.id}
      className="w-[144px] sm:w-[172.8px] group cursor-pointer"
    >
      <div className="category-image">
        <div className="relative">
          <Image
            width={172}
            height={86}
            alt={category.name}
            src={category.image}
            className="w-full h-[86px] sm:h-[103.6px] object-cover shadow-lg rounded-lg"
          />
          <div className="absolute inset-0 bg-[#FFFDD0] opacity-0 lg:group-hover:opacity-40 transition-opacity ease-out duration-500" />
        </div>
        <p className="text-center font-poppins font-semibold text-xs sm:text-sm text-[#505050] mt-2">
          {category.name}
        </p>
      </div>
    </div>
  ))}
  <div className="w-[144px] sm:w-[172.8px]">
    <button
      className="bg-primaryColor hover:opacity-75 transition-opacity duration-500 ease-out text-white font-bold rounded capitalize w-full h-[86px] sm:h-[103.6px] flex items-center justify-center"
      onClick={openModal}
    >
      <span>Tout voir</span>
    </button>
  </div>
</div>

      {/* Pour les écrans très larges, affichez toutes les catégories */}
      <div className="hidden xl:flex justify-between items-center mt-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="w-[144px] sm:w-[172.8px] h-[86px] sm:h-[129.6px] inline-block mb-2 sm:mb-4 mr-2 sm:mr-4 group cursor-pointer relative"
          >
            <div className="category-image">
              <div className="relative">
                <Image
                  width={172}
                  height={86}
                  alt={category.name}
                  src={category.image}
                  className="w-full h-full object-cover shadow-lg rounded-lg"
                />
                <div className="absolute inset-0 bg-[#FFFDD0] opacity-0 lg:group-hover:opacity-40 transition-opacity ease-out duration-500" />
              </div>
              <p className="text-center font-poppins font-semibold text-xs sm:text-sm text-[#505050]">
                {category.name}
              </p>
            </div>
          </div>
        ))}
      </div>
      <CategoryModal
        isOpen={isModalOpen}
        onClose={closeModal}
        categories={categories}
      />
    </div>
  );
}

export default Categories;