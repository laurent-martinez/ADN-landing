import Image from "next/image";
import Link from "next/link";
import React from "react";

interface HamburgerMenuProps {
  isOpenBurger: boolean;
  onCloseBurger: () => void;
}

function HamburgerMenu({ isOpenBurger, onCloseBurger }: HamburgerMenuProps) {
  const closeModal = () => {
    onCloseBurger();
  };
  return (
    <div
      className={`fixed top-0 left-0 sm:w-2/3 w-full h-screen flex justify-center items-center bg-secondaryColor  transition-opacity ${
        isOpenBurger ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{
        zIndex: 1000,
        position: "fixed",
        top: 0,
        left: 0,
        transition: "opacity 0.7s ease-in-out",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none flex"
        style={{ backgroundImage: "url('/noise-light.png')" }}
      />
      <div className="flex flex-col h-60 justify-between items-center text-white text-5xl font-bold gap-8 relative">
        <Link
          href="/"
          className="burgerMenu-item hover:text-primaryColor ease-linear duration-250 font-bold flex flex-col group justify-center relative"
        >
          <Image
            src="/home-hamburger.svg"
            width={24}
            height={24}
            alt="home icon"
            className="w-[50px] h-[50px] text-white p-2 rounded-full border-2 border-white"
          />{" "}
          <span className="bulb-menu opacity-0 group-hover:opacity-100 text-center" />
        </Link>
        <Link
          href="https://adn-encheres-live.fr/vendre-vos-biens-avec-adn-encheres-commissaires-priseurs-au-mans-et-en-live/"
          className="burgerMenu-item hover:text-primaryColor ease-linear duration-250 font-semibold flex flex-col group justify-center relative"
        >
          Vendre{" "}
          <span className="bulb-menu opacity-0 group-hover:opacity-100 text-center" />{" "}
        </Link>
        <Link
          href="https://espace-client.adn-encheres-live.fr/fr/connexion"
          className="burgerMenu-item hover:text-primaryColor ease-linear duration-250 font-bold flex flex-col group justify-center relative"
        >
          Mon espace{" "}
          <span className="bulb-menu opacity-0 group-hover:opacity-100 text-center" />
        </Link>
      </div>
      <button
        type="button"
        className="absolute top-2 right-2 hover:opacity-60"
        style={{ zIndex: 1001 }}
        onClick={closeModal}
        aria-label="Close modal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 32 32"
        >
          <path
            fill="white"
            d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2zm5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4l-1.6 1.6z"
          />
        </svg>
      </button>
    </div>
  );
}

export default HamburgerMenu;
