import React from 'react';
import Image from 'next/image';

function CategoryModal({ isOpen, onClose, categories }) {
  if (!isOpen) return null;

  const primaryColor = '#5EBB95';
  const secondaryColor = '#173C6A';

  const getImageBackgroundColor = (index) => {
    if (index < 4) {
      return index % 2 === 0 ? secondaryColor : primaryColor;
    } else {
      return index % 2 === 0 ? primaryColor : secondaryColor;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-200 p-4 rounded-lg w-11/12 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-[#173C6A]">Categories</h2>
          <button onClick={onClose} className="text-xl text-[#173C6A]">&times;</button>
        </div>
        
        {/* Vue mobile */}
        <div className="md:hidden space-y-3 overflow-y-auto">
          {categories.map((category, index) => (
            <div 
              key={category.id} 
              className="bg-white rounded-lg p-2 shadow-md flex items-center space-x-3"
            >
              <div 
                className="relative w-16 h-16 rounded-lg flex-shrink-0"
                style={{ backgroundColor: getImageBackgroundColor(index) }}
              >
                <Image
                  fill
                  src={category.image}
                  alt={category.name}
                  className="object-contain p-1"
                />
              </div>
              <h3 className="text-sm font-semibold text-[#173C6A] flex-grow">{category.name}</h3>
            </div>
          ))}
        </div>

        {/* Vue tablette et bureau */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {categories.map((category, index) => (
            <div 
              key={category.id} 
              className="bg-white rounded-lg p-3 shadow-md"
            >
              <div 
                className="relative w-full h-28 mb-2 rounded-lg"
                style={{ backgroundColor: getImageBackgroundColor(index) }}
              >
                <Image
                  fill
                  src={category.image}
                  alt={category.name}
                  className="object-contain p-1.5"
                />
              </div>
              <h3 className="text-sm font-semibold text-[#173C6A] truncate">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryModal;