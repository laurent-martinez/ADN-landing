import Image from 'next/image';
import React from 'react';

function NewsLetter() {
  return (
    <div className="xl:h-[550px] h-[350px] w-full my-12 container mx-auto rounded-lg">
      <div className="w-full h-full  sign-up-container flex flex-col md:flex-row relative rounded-lg">
        <div className="lg:w-4/12 frame-registration w-full h-full flex-col items-center justify-center  bg-secondaryColor z-150 hidden xl:flex">
          <Image src="/news-image.png" width={627} height={797} alt="newsletter image" className="w-full h-full " />
        </div>
        <div className="hidden xl:flex lg:w-2/12 h-full transition duration-500 ease-in-out bg-gradient-to-t from-[#2f5d4a]  via-primaryColor  to-[#7ec8aa]" />
        <div className="xl:w-9/12 w-full h-full flex flex-col items-center bg-secondaryColor relative">
          <div className="absolute inset-0 pointer-events-none flex" style={{ backgroundImage: 'url(\'/noise-light.png\')' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex mb-9 justify-center items-center gap-2">
              <h3 className="text-center font-extrabold  md:text-5xl sm:text-4xl xs-text-3xl text-2xl text-white font-cormo">Recevez</h3>
              <h4 className=" text-center font-cormo font-extrabold  md:text-5xl sm:text-4xl xs-text-3xl text-2xl text-white ">
                notre
                <span className="text-primaryColor ml-2">newsletter</span>
              </h4>
            </div>
            <p className="text-white text-lg xs:text-xl sm:text-2xl font-normal text-center whitespace-nowrap">Toute l&apos;actualité de nos enchères</p>
            <div className="flex justify-center  items-center mt-4">
              <input type="text" className="hidden  h-16 rounded-l border-2 border-white text-white text-3xl font-normal px-4" placeholder="Entrer votre Email" />
              <button
                type="button"
                className="text-white font-bold whitespace-nowrap transition duration-500 ease-in-out bg-gradient-to-t from-[#2f5d4a]  via-primaryColor  to-[#7ec8aa] rounded-md  h-16 text-lg xs:text-xl sm:text-2xl  px-5"
              >
                Abonnez-vous
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
