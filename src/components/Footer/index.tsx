import Image from 'next/image';
import React from 'react';

function Footer() {
  return (
    <footer className="w-full bg-[#07172A] relative">
      <div className="footer-header">
        <p className="text-xl sm:text-3xl font-medium text-center text-white pt-5">
          Rejoignez
          {' '}
          <span className="text-primaryColor font-bold">ADN</span>
          {' '}
          enchères sur les réseaux!
        </p>
        <div className="flex justify-center items-center gap-9 mt-5">
          <Image width={60} height={60} alt="social facebook" src="/social-facebook.svg" className="hover:opacity-70 cursor-pointer ease-linear duration-300 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]" />
          <Image width={60} height={60} alt="social facebook" src="/social-google.svg" className="hover:opacity-70 cursor-pointer ease-linear duration-300 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]" />
          <Image width={60} height={60} alt="social facebook" src="/social-linkedin.svg" className="hover:opacity-70 cursor-pointer ease-linear duration-300 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]" />
          <Image width={60} height={60} alt="social facebook" src="/social-onsta.svg" className="hover:opacity-70 cursor-pointer ease-linear duration-300 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]" />
        </div>
      </div>
      <div className="flex-col lg:flex-row flex justify-center gap-9 mt-4 mb-9 py-9 text-center lg:text-left">
        <div>
          <div className="text-xl sm:text-2xl text-white pb-4">Adresse</div>
          <div className="text-primaryColor">
            <p>2 rue Roberval, bâtiment ok box</p>
            <p>72100 Le Mans</p>
          </div>
        </div>
        <div>
          <div className="text-xl sm:text-2xl text-white pb-4">Contact</div>
          <div className="text-primaryColor">
            <p>0 821 23 08 72</p>
            <p>Service 0,20€/min + prix appel</p>
          </div>
        </div>
        <div>
          <div className="text-xl sm:text-2xl text-white pb-4">Mails</div>
          <div className="text-primaryColor">
            <p>support client : adn@priseur.net</p>
            <p>expéditions : commandes@priseur.net</p>
          </div>
        </div>
      </div>
      <div className="w-full bg-primaryColor text-white flex-col lg:flex-row flex gap-5 justify-around items-center p-5">
        <p className="hover:text-secondaryColor ease-linear duration-200 cursor-pointer">Condition Générales des Ventes</p>
        <p className="hover:text-secondaryColor ease-linear duration-300 cursor-pointer">Conditions Générales des Expéditions</p>
        <p className="hover:text-secondaryColor ease-linear duration-300 cursor-pointer">Politique de Confidentialité</p>
        <p className="hover:text-secondaryColor ease-linear duration-300 cursor-pointer">Mentions Légales</p>
        <p className="hover:text-secondaryColor ease-linear duration-300 cursor-pointer">Support ADN Enchères</p>
      </div>
      <div className=" p-3 bg-[#07172A]  text-white flex justify-center w-full">
        © ADN Enchères- 2023 -
        <a href="mailto:laurent@ac2000.net" className="text-primaryColor hover:text-secondaryColor  ml-1"> adn</a>
      </div>
    </footer>
  );
}

export default Footer;
