import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer className="w-full relative bg-white">
      <div className="border-t">
        <div className="container mx-auto">
          <div className="footer-header py-8">
            <p className="text-xl sm:text-3xl font-medium text-center">
              Rejoignez
              {' '}
              <span className="text-primaryColor font-bold">adn</span>
              {' '}
              enchères sur les réseaux!
            </p>
            <div className="flex justify-center items-center gap-9 mt-5 px-4 sm:px-0">
              <Image width={60} height={60} alt="social facebook" src="/social-facebook.svg" className="hover:opacity-70 cursor-pointer ease-linear duration-300 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]" />
              <Image width={60} height={60} alt="social google" src="/social-google.svg" className="hover:opacity-70 cursor-pointer ease-linear duration-300 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]" />
              <Image width={60} height={60} alt="social linkedin" src="/social-linkedin.svg" className="hover:opacity-70 cursor-pointer ease-linear duration-300 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]" />
              <Image width={60} height={60} alt="social instagram" src="/social-onsta.svg" className="hover:opacity-70 cursor-pointer ease-linear duration-300 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="container mx-auto">
          <div className="flex-col lg:flex-row flex justify-center gap-9 py-8 text-center lg:text-left">
            <div>
              <div className="text-xl sm:text-2xl pb-4">Adresse</div>
              <div className="text-[#929397]">
                <p>2 rue Roberval, bâtiment ok box</p>
                <p>72100 Le Mans</p>
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl pb-4">Contact</div>
              <div className="text-[#929397]">
                <p>0 821 23 08 72</p>
                <p>Service 0,20€/min + prix appel</p>
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl pb-4">Mails</div>
              <div className="text-[#929397]">
                <p>support client : adn@priseur.net</p>
                <p>expéditions : commandes@priseur.net</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="container mx-auto">
          <div className="w-full flex-col lg:flex-row flex gap-5 justify-around items-center py-5">
            <p className="hover:text-secondaryColor ease-linear duration-200 cursor-pointer text-[#929397]">Condition Générales des Ventes</p>
            <p className="hover:text-secondaryColor ease-linear duration-300 cursor-pointer text-[#929397]">Conditions Générales des Expéditions</p>
            <p className="hover:text-secondaryColor ease-linear duration-300 cursor-pointer text-[#929397]">Politique de Confidentialité</p>
            <p className="hover:text-secondaryColor ease-linear duration-300 cursor-pointer text-[#929397]">Mentions Légales</p>
            <Link href={'https://espace-client.adn-encheres-live.fr/fr/connexion'} className="hover:text-secondaryColor ease-linear duration-300 cursor-pointer text-[#929397]">Support ADN Enchères</Link>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="container mx-auto">
          <div className="py-3 text-[#929397] flex justify-center w-full">
            © ADN Enchères- 2023 -
            <a href="mailto:laurent@ac2000.net" className="text-primaryColor hover:text-secondaryColor ml-1"> adn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;