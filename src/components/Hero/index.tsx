import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroSection {
  id: number;
  backgroundColor: string;
  content: React.ReactNode;
  mobileContent?: React.ReactNode;
}

const contentTemplate = (title: string, paragraphs: string[], buttonText: string, buttonLink: string, imageSrc: string, imageAlt: string, backgroundColor: string): HeroSection => ({
  id: Math.random(),
  backgroundColor,
  content: (
    <div className="flex items-center justify-between h-full w-full px-16">
      <div className="flex flex-col items-start justify-center w-1/2 pr-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6" style={{color: backgroundColor === '#5EBB95' ? 'black' : 'white'}}>
          <span dangerouslySetInnerHTML={{ __html: title }} />
        </h2>
        {paragraphs.map((p, index) => (
          <p key={index} className="text-lg md:text-xl mb-4 font-semibold" style={{color: backgroundColor === '#5EBB95' ? '#333' : '#e0e0e0'}}>
            {p}
          </p>
        ))}
        {buttonText && (
          <Link href={buttonLink} className={`mt-4 px-6 py-2 rounded-full font-semibold transition-colors ${
            backgroundColor === '#5EBB95' 
              ? 'bg-black text-white hover:bg-white hover:text-black hover:border-black hover:border' 
              : 'bg-white text-secondaryColor border border-gray-100 hover:bg-secondaryColor hover:text-white'
          }`}>
            {buttonText}
          </Link>
        )}
      </div>
      <div className="w-1/2 flex justify-end items-center">
        <Image src={imageSrc} width={384} height={384} alt={imageAlt} className='w-96 h-96 object-contain' />
      </div>
    </div>
  ),
  mobileContent: (
    <div className="flex flex-col items-center justify-center h-full w-full px-6 py-8 text-center">
      <h2 className="text-2xl font-bold leading-tight mb-4" style={{color: backgroundColor === '#5EBB95' ? 'black' : 'white'}}>
        <span dangerouslySetInnerHTML={{ __html: title }} />
      </h2>
      {paragraphs.map((p, index) => (
        <p key={index} className="text-base mb-3 font-semibold" style={{color: backgroundColor === '#5EBB95' ? '#333' : '#e0e0e0'}}>
          {p}
        </p>
      ))}
      {buttonText && (
        <Link href={buttonLink} className={`mt-4 px-6 py-2 rounded-full font-semibold transition-colors ${
          backgroundColor === '#5EBB95' 
            ? 'bg-black text-white hover:bg-white hover:text-black hover:border-black hover:border' 
            : 'bg-white text-secondaryColor border border-gray-100 hover:bg-secondaryColor hover:text-white'
        }`}>
          {buttonText}
        </Link>
      )}
    </div>
  )
});

const heroSections: HeroSection[] = [
  {
    id: 1,
    backgroundColor: '#5EBB95',
    content: (
      <div className="flex items-center justify-center h-full w-full">
        <Image alt="ADN brand logo" src="/logo_adn.svg" width={226} height={126} className="bg-white rounded-lg p-5 sm:w-[226px] sm:h-[126px] w-[180px] h-[100px]" />
      </div>
    ),
  },
  {
    id: 2,
    backgroundColor: '#173C6A',
    content: (
      <div className="flex items-center justify-center h-full w-full">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl text-white text-center font-bold leading-relaxed">
          Maison de ventes aux enchères
        </h2>
      </div>
    ),
  },
  contentTemplate(
    "N°1 des ventes aux enchères publiques de <span class='text-white'>biens neufs</span> et <span class='text-white'>High-Tech</span> en France",
    [],
    "",
    "",
    "/ordi.png",
    "vendre avec adn",
    '#5EBB95'
  ),
  contentTemplate(
    "Venez enchérir",
    [
      "dans notre maison des ventes au mans",
      "ou en live via la plateforme Interencheres.com"
    ],
    "Accéder",
    "https://www.interencheres.com/recherche/ventes?search=adn",
    "/card.png",
    "electric peugeot car",
    '#173C6A'
  ),
  contentTemplate(
    "Vendre vos objets",
    [
      "Avec ADN Enchères, bénéficiez d'une expertise reconnue.",
      "Contactez-nous pour une estimation gratuite."
    ],
    "Accéder",
    "https://www.adn-encheres.fr/vendre",
    "/money-wallet.png",
    "vendre avec adn",
    '#5EBB95'
  ),
  contentTemplate(
    "Accéder à votre espace Adjudicataire",
    [
      "Régler mes lots et l'expédition",
      "Enlever mes lots sur rdv"
    ],
    "Accéder",
    "https://espace-client.adn-encheres-live.fr/fr/connexion",
    "/pass-small.png",
    "electric peugeot car",
    '#173C6A'
  ),
];

function Hero() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (!isPaused) {
      timer = setInterval(() => {
        setDirection(1);
        setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroSections.length);
      }, 5000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isPaused]);

  const togglePause = () => setIsPaused((prevState) => !prevState);
  const goToNext = () => {
    setDirection(1);
    setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroSections.length);
  };
  const goToPrevious = () => {
    setDirection(-1);
    setCurrentHeroIndex((prevIndex) => (prevIndex - 1 + heroSections.length) % heroSections.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="relative w-full h-[430px] lg:rounded-lg overflow-hidden container mx-auto mt-4">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentHeroIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0"
          style={{ backgroundColor: heroSections[currentHeroIndex].backgroundColor }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full sm:block hidden">
              {heroSections[currentHeroIndex].content}
            </div>
            <div className="w-full h-full sm:hidden block">
              {heroSections[currentHeroIndex].mobileContent || heroSections[currentHeroIndex].content}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-50">
        {heroSections.map((_, index) => (
          <div
            key={index}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white transition-opacity duration-300 ${
              index === currentHeroIndex ? 'opacity-100' : 'opacity-50'
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-5 right-5 flex items-center space-x-2 z-50">
        <button
          className="bg-white bg-opacity-80 rounded-full p-1 sm:p-2 cursor-pointer transition-all duration-300 hover:bg-gray-200"
          onClick={goToPrevious}
          type="button"
        >
          <Image src="/left.svg" width={20} height={20} alt="previous" className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
        <button
          className="bg-white bg-opacity-80 rounded-full p-1 sm:p-2 cursor-pointer transition-all duration-300 hover:bg-gray-200"
          onClick={goToNext}
          type="button"
        >
          <Image src="/right.svg" width={20} height={20} alt="next" className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
        <button
          className="bg-white bg-opacity-80 rounded-full p-1 sm:p-2 cursor-pointer transition-all duration-300 hover:bg-gray-200"
          onClick={togglePause}
          type="button"
        >
          {isPaused ? (
            <Image src="/play.svg" width={20} height={20} alt="play icon" className="w-4 h-4 sm:w-6 sm:h-6" />
          ) : (
            <Image src="/pause.svg" width={20} height={20} alt="pause icon" className="w-4 h-4 sm:w-6 sm:h-6" />
          )}
        </button>
      </div>
    </div>
  );
}

export default Hero;