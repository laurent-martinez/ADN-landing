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
    <nav className="flex justify-between items-center w-full h-[90px] z-10 px-6 text-[#123c6b] shadow-lg sm:shadow-none">
      <SignUpModal isOpen={isModalOpen} onClose={closeModal} />
      <HamburgerMenu isOpenBurger={isOpen} onCloseBurger={closeBurger} />
      <SellModal opening={opening} onClose={() => setOpening(false)} />
      <Link href="/" className="logo">
        <Image alt="ADN brand logo" src="/logo_adn.svg" width={166} height={62} className="sm:w-[166px] sm:h-[62px] w-[103px] h-[51px]" />
      </Link>
      <div className="hidden lg:flex flex-row justify-center items-center space-x-6 font-poppins font-semibold">
        <button
          type="button"
          className={`nav-link-anchor flex items-center gap-1 text-xl navnav-link relative z-10 ${router.pathname === '/Sell' ? 'active' : ''}`}
          onClick={openSellModal}
        >
          <Image src="/money.svg" width={24} height={24} alt="money icon" className="text-[#5EBB95]" />
          <p>Vendre</p>
          {router.pathname === '/Sell' && <span className="bulb" />}
        </button>
        <Link
          href="/"
          aria-label="shortcut to home"
          className="nav-link relative z-10 nav-link-anchor"
        >
          <div className={`border-2  hover:border-[#85d0b1]  rounded-full p-2 ${router.pathname === '/' ? 'border-primaryColor' : 'border-transparent'}`}>
            <Image src="/home.svg" width={24} height={24} alt="home icon" />
          </div>
        </Link>
        <Link
          href="/Contact"
          className={`nav-link-anchor flex gap-1 text-xl nav-link relative z-10 ${router.pathname === '/Contact' ? 'active' : ''}`}
        >
          <p>Contact</p>
          <Image src="/infoContact.svg" width={18} height={18} alt="info icon" />
          {router.pathname === '/Contact' && <span className="bulb" />}
        </Link>
      </div>
      <button
        type="button"
        onClick={openBurger}
        className="flex lg:hidden order-last"
      >
        <Image width={45} height={45} alt="hamburger menu icon" src="/hamburger.svg" />
      </button>
      <button
        type="button"
        className={` nav-link-anchor  sign flex items-center justify-center font-poppins font-semibold mr-4 cursor-pointer group ${router.pathname === '/SignUp' ? 'active' : ''}`}
        onClick={openModal}
      >
        <Image alt="user icon" src="/sign.svg" width={41.67} height={41.67} className="group-hover:animate-pulse w-[36px] h-[36px] hidden sm:flex" />
        <p className="ml-2 group-hover:text-[#5EBB95] text-xl ease-linear duration-300 hidden md:flex">
          S&apos;identifier
        </p>
      </button>
    </nav>
  );
}

export default Navbar;
