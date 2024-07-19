import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SignUpModal from '../SignModal';
import SellModal from '../SellModal';
import HamburgerMenu from '../HamburgerMenu';

function Navbar() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [opening, setOpening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const openSellModal = () => {
    setOpening(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const closeBurger = () => {
    setIsOpen(false);
  };
  const openBurger = () => {
    setIsOpen(true);
  };

  return (
    <nav className="container px-4 sm:px-0 mx-auto  h-[90px] z-10">
      <div className="flex justify-between items-center h-full">
        <SignUpModal isOpen={isModalOpen} onClose={closeModal} />
        <HamburgerMenu isOpenBurger={isOpen} onCloseBurger={closeBurger} />
        <SellModal opening={opening} onClose={() => setOpening(false)} />
        
        <Link href="/" className="logo">
          <Image alt="ADN brand logo" src="/logo_adn.svg" width={166} height={62} className="sm:w-[166px] sm:h-[62px] w-[103px] h-[51px]" />
        </Link>
        
        <div className="hidden lg:flex flex-row justify-end items-center space-x-6 font-poppins font-semibold flex-grow">
          <Link
            href="https://adn-encheres-live.fr/vendre-vos-biens-avec-adn-encheres-commissaires-priseurs-au-mans-et-en-live/"
            className='nav-link-anchor flex items-center gap-1 text-xl navnav-link relative z-10'
          >
            <p>Vendre</p>
          </Link>
          <Link
            href="https://espace-client.adn-encheres-live.fr/fr/connexion"
            className='nav-link-anchor flex gap-1 text-xl nav-link relative z-10'
          >
            <p>Mon Espace Adjudicataire</p>
          </Link>
        </div>
        
        <Link
          href="/"
          aria-label="shortcut to home"
          className="nav-link relative z-10 nav-link-anchor hidden lg:block"
        >
          <div className={`border-2 hover:border-[#85d0b1] rounded-full p-2 ${router.pathname === '/' ? 'border-primaryColor' : 'border-transparent'}`}>
            <Image src="/home.svg" width={24} height={24} alt="home icon" />
          </div>
        </Link>
        
        <button
          type="button"
          onClick={openBurger}
          className="flex lg:hidden"
        >
          <Image width={45} height={45} alt="hamburger menu icon" src="/hamburger.svg" className="w-[35px] sm:w-[45px] h-[35px] sm:h-[35px]" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
