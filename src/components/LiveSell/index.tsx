import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

function LiveSell() {
  const auctionItems = [
    {
      id: 1,
      image: "/nikon.png",
      title: "Exceptionnel coffret nécessaire de deux pistolets",
      estimationLow: 1200000,
      estimationHigh: 1500000,
      lotNumber: 215,
      closingDate: "07/07/2024",
      status: "Live"
    },
    {
      id: 2,
      image: "/chooGlasses.png",
      title: "Contenu de la cave - vente suite à tutelle",
      estimation: 100,
      lotNumber: 123,
      closingDate: "09/07/2024",
      status: "Live"
    },
    {
      id: 3,
      image: "/hermes.png",
      title: "France, 1ère GM. Fusil FSA 17 transformé à répétition manuelle",
      estimationLow: 600,
      estimationHigh: 800,
      lotNumber: 255,
      closingDate: "06/07/2024",
      status: "Live"
    },
    {
      id: 4,
      image: "/prada.png",
      title: "Sac en cuir noir TIMELESS en chevron usure et décousu à l'intérieur",
      estimation: 450,
      lotNumber: 21,
      closingDate: "04/07/2024",
      status: "Live"
    },
    {
      id: 5,
      image: "/nikon.png",
      title: "Exceptionnel coffret nécessaire de deux pistolets",
      estimationLow: 1200000,
      estimationHigh: 1500000,
      lotNumber: 215,
      closingDate: "07/07/2024",
      status: "Live"
    },
    {
      id: 6,
      image: "/chooGlasses.png",
      title: "Contenu de la cave - vente suite à tutelle",
      estimation: 100,
      lotNumber: 123,
      closingDate: "09/07/2024",
      status: "Live"
    },
    {
      id: 7,
      image: "/hermes.png",
      title: "France, 1ère GM. Fusil FSA 17 transformé à répétition manuelle",
      estimationLow: 600,
      estimationHigh: 800,
      lotNumber: 255,
      closingDate: "06/07/2024",
      status: "Live"
    },
    {
      id: 8,
      image: "/prada.png",
      title: "Sac en cuir noir TIMELESS en chevron usure et décousu à l'intérieur",
      estimation: 450,
      lotNumber: 21,
      closingDate: "04/07/2024",
      status: "Live"
    }
  ];

  const [isHovering, setIsHovering] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationId;

    const scroll = () => {
      if (scrollContainer && !isHovering && !showGrid) {
        scrollContainer.scrollLeft += 1;
        if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isHovering, showGrid]);

  return (
    <div>
      <div className="py-12 px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-medium leading-tight">
          Trouvez <span className="text-primaryColor font-serif italic">La perle rare</span> en ventes aux enchères
          <br className="hidden md:block" />
          parmi nos <span className="text-primaryColor font-serif italic">lots premium</span>
        </h2>
      </div>
      <div className="sm:container mx-auto h-auto sm:px-8 py-12">
        {showGrid ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {auctionItems.map((item, index) => (
              <div key={index} className="group cursor-pointer overflow-hidden transition-all duration-300 ease-in-out hover:opacity-75 flex flex-col bg-white w-full">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                  />
                </div>
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <p className="text-sm text-gray-500 mb-2">
                      Estimation : {item.estimationLow ?
                        `${item.estimationLow} € - ${item.estimationHigh} €` :
                        `${item.estimation} €`
                      }
                    </p>
                    <p className="text-sm font-semibold text-secondaryColor mb-2">Lot {item.lotNumber}</p>
                    <h3 className="text-base mb-2 line-clamp-3">{item.title}</h3>
                  </div>
                  <div className="flex justify-between items-center text-sm text-primaryColor">
                    <span>{item.status}</span>
                    <span>{item.closingDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div 
            ref={scrollRef}
            className="flex overflow-x-scroll no-scrollbar"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="flex gap-8">
              {auctionItems.map((item, index) => (
                <div key={index} className="group cursor-pointer overflow-hidden transition-all duration-300 ease-in-out hover:opacity-75 flex flex-col bg-white w-64 sm:w-48 md:w-56 lg:w-64 flex-shrink-0">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-base mb-2 font-bold text-gray-800">{item.title}</h3>
                      <p className="text-sm text-gray-500 mb-1">Estimation</p>
                      <p className="text-sm text-gray-700 mb-2">
                       {item.estimationLow ?
                          `${item.estimationLow} € - ${item.estimationHigh} €` :
                          `${item.estimation} €`
                        }
                      </p>
                    </div>
                    <div className="flex justify-between items-center text-sm text-primaryColor">
                      <span className="text-gray-500">{item.closingDate}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center my-4">
        <button 
          onClick={() => setShowGrid(!showGrid)} 
          className="text-primaryColor text-base font-semibold bg-white border border-primaryColor px-4 py-2 rounded hover:bg-primaryColor hover:text-white transition-colors duration-300"
        >
          {showGrid ? "RETOUR" : "TOUS LES LOTS"}
        </button>
      </div>
    </div>
  );
}

export default LiveSell;
