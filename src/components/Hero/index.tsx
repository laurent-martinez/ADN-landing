import Image from 'next/image';
import React, {
  useState, useEffect,
} from 'react';

interface HeroSection {
  id: number;
  backgroundColor: string;
  content: React.ReactNode; // Allow any type of content
}

const heroSections: HeroSection[] = [
  {
    id: 1,
    backgroundColor: '#5EBB95',
    content: (
      <div className="flex items-center justify-center h-full w-full">
        <Image alt="ADN brand logo" src="/logo_adn.svg" width={166} height={62} className="w-[226px] h-[126px] bg-white p-5" />
      </div>
    ),
  },
  {
    id: 2,
    backgroundColor: '#5EBB95',
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full">
        <Image src="/Group 9.png" width={1024} height={314} alt="macbooks pro" className="z-10 w-[512px] h-[157px] lg:w-full lg:h-full" />
        <p className="absolute bottom-10 px-4 xl:px-0 tracking-[.25em] text-center font-poppins font-semibold lg:text-2xl text-white z-50">*N°1 des ventes aux enchères publiques de biens neufs et High-Tech en France*</p>
        <Image src="/vector-wave.png" width={1440} height={252} className="z-1 w-full absolute bottom-0 opacity-70" alt="electric peugeot car" />
      </div>
    ),
  },
  {
    id: 3,
    backgroundColor: '#173C6A',
    content: (
      <div className="flex items-center justify-center h-full w-full">
        <h2 className="text-6xl text-white text-center font-normal">
          Maison de ventes aux enchères
        </h2>
      </div>
    ),
  },
  {
    id: 4,
    backgroundColor: '#173C6A',
    content: (
      <div className="flex flex-col items-center h-full w-full">
        <Image src="/car-pic.png" className="z-10" width={545} height={29} alt="electric peugeot car" />
        <p className="absolute bottom-10 tracking-[.25em] font-poppins font-semibold lg:text-2xl text-white z-50">*Retrouvez-nous au Mans ou en Live*</p>
        <Image src="/vector-wave.png" width={1440} height={228.69} className="z-1 w-full absolute bottom-0 opacity-70" alt="electric peugeot car" />
      </div>
    ),
  },
  {
    id: 5,
    backgroundColor: '#5EBB95',
    content: (
      <div className="flex items-center justify-center h-full w-full">
        <h2 className="text-6xl text-white font-normal">Vendre vos objets...</h2>
      </div>
    ),
  },
  {
    id: 6,
    backgroundColor: '#5EBB95',
    content: (
      <div className="flex flex-col items-center h-full w-full">
        <Image src="/Group 8.png" className="z-10" width={484} height={316} alt="electric peugeot car" />
        <p className="absolute bottom-10 tracking-[.25em] font-poppins font-semibold lg:text-2xl text-white z-50">*La garantie d’une expertise de qualité de vos lots*</p>
        <Image src="/vector-waves.png" width={1442} height={269} className="z-1 lg:h-full lg:w-full absolute bottom-0 opacity-70" alt="electric peugeot car" />
      </div>
    ),
  },
  // ... More hero sections
];

function Hero() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (!isPaused) {
      timer = setInterval(() => {
        setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroSections.length);
      }, 3000); // Switch content every 3 seconds
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isPaused]);

  const togglePause = () => setIsPaused((prevState) => !prevState);

  return (
    <div className="hidden sm:block relative w-full h-[512px] transition-all duration-1200 ease-out hero-container" style={{ backgroundColor: heroSections[currentHeroIndex].backgroundColor }}>
      <button
        className="absolute bottom-5 right-5 z-100 px-4 py-2 z-50  text-white  cursor-pointer transition-transform transform-glow hover:glow duration-500"
        onClick={togglePause}
        type="button"
      >
        {isPaused ? <Image src="/play.svg" width={28} height={36} alt="play icon" /> : <Image src="/pause.svg" width={28} height={36} alt="pause icon" />}
      </button>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white lg:text-2xl">{heroSections[currentHeroIndex].content}</div>
      </div>
    </div>
  );
}

export default Hero;
