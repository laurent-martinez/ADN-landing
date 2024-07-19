import React from 'react';

const SalesComponent = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="mb-8 text-3xl md:text-4xl font-bold text-center">
        <span className="">Participez à nos ventes </span>
        <span className="text-secondaryColor">LIVE</span>
        <span className=""> et </span>
        <span className="text-primaryColor">CHRONO</span>
      </h2>
      
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8">
        <div className="flex flex-col shadow-lg rounded-lg overflow-hidden w-full lg:w-[calc(50%-1rem)] max-w-2xl">
          <div className="bg-secondaryColor text-white flex items-center justify-center p-8">
            <span className="text-4xl font-bold">LIVE</span>
          </div>
          <div className="bg-white p-8 flex items-center space-x-3 flex-grow">
            <p className='p-4 rounded-full bg-secondaryColor text-white font-bold w-2 h-2 flex-shrink-0'></p>
            <p className="text-gray-700 text-xl">
              La vente est en direct, vous pourrez enchérir en même temps que la salle et disposerez du retour vidéo/son.
            </p>
          </div>
        </div>

        <div className="flex flex-col shadow-lg rounded-lg overflow-hidden w-full lg:w-[calc(50%-1rem)] max-w-2xl">
          <div className="bg-primaryColor text-white flex items-center justify-center p-8">
            <span className="text-4xl font-bold">CHRONO</span>
          </div>
          <div className="bg-white p-8 flex items-center space-x-3 flex-grow">
            <p className='p-4 rounded-full bg-primaryColor text-white font-bold w-2 h-2 flex-shrink-0'></p>
            <p className="text-gray-700 text-xl">
              La vente se déroule sur plusieurs jours. Vous pouvez enchérir ou déposer une enchère automatique jusqu'à clôture des enchères.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesComponent;