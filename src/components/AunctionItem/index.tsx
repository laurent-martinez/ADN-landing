import Image from 'next/image';
import { HeartIcon, SignalIcon, ClockIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function AuctionItems() {
  const [showAllItems, setShowAllItems] = useState(false);

  const auctionItems = [
    {
      id: 1,
      title: "Quels sont les différents types de vente ?",
      isExplanatory: true,
      image: "/question-mark2.png",
      liveExplanation: "La vente est en direct, vous pourrez enchérir en même temps que la salle et disposerez du retour vidéo/son.",
      chronoExplanation: "La vente se déroule sur plusieurs jours. Vous pouvez enchérir ou déposer une enchère automatique jusqu'à clôture des enchères."
    },
    {
      id: 2,
      image: "/nikon.png",
      title: "EXPEDITION POSSIBLE POUR TOUTE LA VENTE : MODE - VETEMENTS ET CHAUSSURES",
      preparedBy: "ADN Enchères",
      location: "72100 Le Mans - France",
      lotCount: 338,
      closingDate: "14/07/2024",
      closingTime: "10h00",
      status: "Live"
    },
    {
      id: 3,
      image: "/chooGlasses.png",
      title: "EXPEDITION POSSIBLE POUR TOUTE LA VENTE : ELECTROMENAGER / LOISIRS / MULTIMEDIA / OUTILLAGE / STOCK",
      preparedBy: "ADN Enchères",
      lotCount: 130,
      location: "72100 Le Mans - France",
      closingDate: "14/07/2024",
      closingTime: "10h00",
      status: "Chrono"
    },
    {
      id: 4,
      image: "/hermes.png",
      title: "EXPEDITION POSSIBLE POUR TOUTE LA VENTE : APPLE / TELEPHONIE / ORDINATEURS",
      preparedBy: "ADN Enchères",
      location: "72100 Le Mans - France",
      lotCount: 45,
      closingDate: "14/07/2024",
      closingTime: "17h00",
      status: "Live"
    },
    {
      id: 5,
      image: "/prada.png",
      title: "EXPEDITION POSSIBLE POUR TOUTE LA VENTE : MODE - VETEMENTS ET CHAUSSURES",
      preparedBy: "ADN Enchères",
      location: "72100 Le Mans - France",
      closingDate: "21/07/2024",
      closingTime: "10h00",
      status: "Live"
    },
  ];

  const displayedItems = showAllItems ? auctionItems : auctionItems.slice(0, 3);

  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h2 className="text-4xl md:text-5xl font-medium leading-tight text-center md:text-left">
          Nos ventes <span className="text-emerald-500 font-serif italic">en cours</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedItems.map((item) => (
          <div key={item.id} className={`group cursor-pointer overflow-hidden transition-all duration-300 ease-in-out flex flex-col bg-white h-[450px]`}>
            {item.isExplanatory ? (
              <div className="flex flex-col h-full bg-white">
                <div className="relative h-56 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out group-hover:scale-105 sm:rounded-lg"
                  />
                </div>
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <h3 className='text-lg font-semibold mb-4'>{item.title}</h3>
                  <div className="mb-3">
                    <span className="inline-flex items-center px-2 py-1 bg-secondaryColor text-white rounded uppercase font-semibold mb-1 text-xs">
                      <SignalIcon className="h-4 w-4 mr-2" />
                      Live
                    </span>
                    <p className="text-sm">{item.liveExplanation}</p>
                  </div>
                  <div>
                    <span className="inline-flex items-center px-2 py-1 bg-primaryColor text-white rounded uppercase font-semibold mb-1 text-xs">
                      <ClockIcon className="h-4 w-4 mr-2" />
                      Chrono
                    </span>
                    <p className="text-sm">{item.chronoExplanation}</p>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="relative h-56 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out group-hover:scale-105 sm:rounded-lg"
                  />
                </div>
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-sm font-semibold mb-3">{item.title}</h3>
                  </div>
                  {item.lotCount && (
                    <div className="mt-2">
                      <span className="text-red-500 font-semibold text-base mb-2 block">{item.lotCount} LOTS</span>
                      <div className="flex space-x-2">
                        <div className="w-16 h-16 relative">
                          <Image src="/nikon.png" alt="Lot preview" layout="fill" objectFit="cover" className="rounded" />
                        </div>
                        <div className="w-16 h-16 relative">
                          <Image src="/prada.png" alt="Lot preview" layout="fill" objectFit="cover" className="rounded" />
                        </div>
                        <div className="w-16 h-16 relative">
                          <Image src="/hermes.png" alt="Lot preview" layout="fill" objectFit="cover" className="rounded" />
                        </div>
                        <div className="bg-gray-800 text-white text-xs flex items-center justify-center rounded w-16 h-16">
                          Voir les lots
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="flex justify-between items-center text-sm mt-auto">
                    <span className="font-semibold">{item.closingDate} : {item.closingTime}</span>
                    {item.status === 'Live' ? (
                      <button className="bg-secondaryColor text-white px-3 py-1 rounded text-xs">{item.status}</button>
                    ) : (
                      <button className="bg-primaryColor text-white px-3 py-1 rounded text-xs">{item.status}</button>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <button 
          onClick={() => setShowAllItems(!showAllItems)}
          className="text-primaryColor text-base font-semibold bg-white border border-primaryColor px-4 py-2 rounded hover:bg-primaryColor hover:text-white transition-colors duration-300"
        >
          {showAllItems ? 'VOIR MOINS' : 'TOUTES LES VENTES'}
        </button>
      </div>
    </div>
  );
}