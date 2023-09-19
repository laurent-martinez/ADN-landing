import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function SignModal({ isOpen, onClose } : { isOpen: boolean; onClose: () => void }) {
  const closeModal = () => {
    onClose();
  };
  return (
    <div
      className={`fixed top-0  w-auto h-auto md:w-full md:h-full flex justify-center items-center bg-[#05101d] bg-opacity-90 transition-opacity ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{
        zIndex: 1000, position: 'fixed', top: 0, left: 0, transition: 'opacity 0.5s ease-in-out',
      }}
    >
      <div
        // ref={modalRef}
        className="modal lg:w-[990px]  w-11/12 md:h-[679px] h-[579px] bg-white relative flex flex-col items-center"
      >
        <button
          type="button"
          className="absolute top-2 left-2 hover:opacity-60"
          style={{ zIndex: 1000 }}
          onClick={closeModal}
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 32 32"><path fill="currentColor" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2zm5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4l-1.6 1.6z" /></svg>
        </button>
        <Image src="/logo_adn.svg" width={200} height={75} alt="ADN logo" className="w-[200px] h-[75px] my-4 z-150" />
        <div className="w-full flex relative justify-center items-center h-[339px] object-cover z-1  bg-[#173C6A]">

          <div className="relative flex justify-center items-center z-150 gap-2 overflow-hidden p-4">
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(\'/noise-light.png\')' }} />
            <Image src="/charac1.png" alt="character one of sign up illustration" width={255} height={275} className="border-4 border-white rounded ml-5 p-4 w-[100px] z-50" />
            <Image src="/charac2.png" alt="character one of sign up illustration" width={255} height={275} className="border-4 border-white rounded ml-5 p-4 w-[150px] z-50" />
            <Image src="/charac4.png" alt="character one of sign up illustration" width={255} height={275} className="border-4 border-white rounded ml-5 p-4 w-[200px] z-50" />
            <Image src="/charac3.png" alt="character one of sign up illustration" width={255} height={275} className="border-4 border-white rounded ml-5 p-4 w-[150px] z-50" />
            <Image src="/charac5.png" alt="character one of sign up illustration" width={255} height={275} className="border-4 border-white rounded ml-5 p-4 w-[100px] z-50" />
            <Image src="/charac6.png" alt="character one of sign up illustration" width={255} height={275} className="border-4 border-white rounded ml-5 p-4 w-[90px] z-50" />
            <Image src="/charac7.png" alt="character one of sign up illustration" width={255} height={275} className="border-4 border-white rounded ml-5 p-4 w-[70px] z-50" />
          </div>
        </div>
        <div className="flex justify-center items-center py-5">
          <div className="flex flex-col justify-center items-center">
            <p className="text-xl font-semibold font-poppins">Connectez-vous à votre espace</p>
            <p>ou</p>
            <p className="text-xl font-semibold font-poppins">inscrivez-vous dès maintenant</p>
          </div>
        </div>
        <div className="connect-btn flex flex-col sm:flex-row justify-center items-stretch sm:absolute sm:bottom-8">
          <Link href="https://espace-client.adn-encheres-live.fr/connexion" className="bg-[#173C6A] hover:opacity-75  text-white text-2xl font-semibold font-poppins sm:mr-6 py-4 sm:px-12 px-4  flex-grow sm:w-1/2 whitespace-nowrap ease-linear duration-250">Se connecter</Link>
          <Link href="/SignUp" className="bg-white  border-2 border-[#173C6A] hover:border-darkTextColor hover:text-darkTextColor text-[#173C6A] hover:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.3)]  text-2xl font-semibold font-montserrat py-4 sm:px-12 px-4  sm:w-1/2 ease-linear duration-250">S&apos;inscrire</Link>
        </div>
      </div>
    </div>
  );
}

export default SignModal;
