import Image from 'next/image';
import React from 'react';

function Magazine() {
  return (
    <div className="sm:my-8">
    <div className="text-center">
      <h1 className="text-3xl sm:text-5xl font-bold text-[#173C6A] font-poppins">
        Le magazine des enchères
      </h1>
      <p className="mt-4 text-lg sm:text-xl text-gray-600">
        Découvrez en exclusivité les actualités et les dernières tendances des ventes aux enchères d’art, de mobilier et de véhicules de collection.
      </p>
    </div>
      <div className="best-seller overflow-x-auto custom-scrollbar flex">
        <div className=" sm:bg-white mr-6 group cursor-pointer relative  p-6 min-w-[327px] sm:min-w-[427px] inline-block">
          <div className="absolute inset-0 bg-[#FFFDD0] opacity-0 sm:group-hover:opacity-40 transition-opacity ease-out duration-500 " />
          <Image src="/mag1.png" width={427} height={277} alt="iphones picture" className="h-[200px] w-full sm:h-[267px]  rounded-tl-[20px] rounded-br-[20px] rounded-tr-[0px] rounded-bl-[0px]" />
          <div className="bg-gradient-to-r from-[#2f5d4a]  via-primaryColor  to-[#7ec8aa] min-h-[10px] w-full sm:hidden" />
          <h3 className="my-3.5 font-semibold  text-secondaryColor text-md sm:text-xl text-poppins">
            Casque de réalité virtuelle:
            Quels sont les meilleurs modèles
          </h3>
          <p className="font-medium text-[17px] hidden lg:block">
            La réalité virtuelle (VR) a pris d&apos;assaut le monde de la technologie
            ces dernières années,
            offrant des expériences immersives et captivantes dans de
            domaines variés tels que le divertissement, l&apos;éducation, la santé
            et bien d&apos;autres.
          </p>
        </div>
        <div className=" sm:bg-white mr-6 group cursor-pointer relative  p-6 min-w-[327px] sm:min-w-[427px] inline-block">
          <div className="absolute inset-0 bg-[#FFFDD0] opacity-0 sm:group-hover:opacity-40 transition-opacity ease-out duration-500" />
          <Image src="/mag2.png" width={427} height={277} alt="iphones picture" className="h-[200px] w-[417px] sm:h-[267px]  rounded-tl-[20px] rounded-br-[20px] rounded-tr-[0px] rounded-bl-[0px]" />
          <div className="bg-gradient-to-r from-[#2f5d4a]  via-primaryColor  to-[#7ec8aa] min-h-[10px] w-full sm:hidden" />
          <h3 className="my-3.5 font-semibold lg:italic text-secondaryColor text-md sm:text-xl">
            Casque de réalité virtuelle:
            Quels sont les meilleurs modèles
          </h3>
          <p className="font-medium text-[17px] hidden lg:block">
            La réalité virtuelle (VR) a pris d&apos;assaut le monde de la technologie
            ces dernières années,
            offrant des expériences immersives et captivantes dans de
            domaines variés tels que le divertissement, l&apos;éducation, la santé
            et bien d&apos;autres.
          </p>
        </div>
        <div className=" sm:bg-white mr-6 group cursor-pointer relative  p-6 min-w-[327px] sm:min-w-[427px] inline-block">
          <div className="absolute inset-0 bg-[#FFFDD0] opacity-0 sm:group-hover:opacity-40 transition-opacity ease-out duration-500" />
          <Image src="/mag3.png" width={427} height={277} alt="iphones picture" className="h-[200px] w-[417px] sm:h-[267px]  rounded-tl-[20px] rounded-br-[20px] rounded-tr-[0px] rounded-bl-[0px]" />
          <div className="bg-gradient-to-r from-[#2f5d4a]  via-primaryColor  to-[#7ec8aa] min-h-[10px] w-full sm:hidden" />
          <h3 className="my-3.5 font-semibold lg:italic text-secondaryColor text-md sm:text-xl">
            Casque de réalité virtuelle:
            Quels sont les meilleurs modèles
          </h3>
          <p className="font-medium text-[17px] hidden lg:block">
            La réalité virtuelle (VR) a pris d&apos;assaut le monde de la technologie
            ces dernières années,
            offrant des expériences immersives et captivantes dans de
            domaines variés tels que le divertissement, l&apos;éducation, la santé
            et bien d&apos;autres.
          </p>
        </div>
        <div className=" sm:bg-white mr-6 group cursor-pointer relative  p-6 min-w-[327px] sm:min-w-[427px] inline-block">
          <div className="absolute inset-0 bg-[#FFFDD0] opacity-0 sm:group-hover:opacity-40 transition-opacity ease-out duration-500" />
          <Image src="/mag1.png" width={427} height={277} alt="iphones picture" className="h-[200px] w-[417px] sm:h-[267px]  rounded-tl-[20px] rounded-br-[20px] rounded-tr-[0px] rounded-bl-[0px]" />
          <div className="bg-gradient-to-r from-[#2f5d4a]  via-primaryColor  to-[#7ec8aa] min-h-[10px] w-full sm:hidden" />
          <h3 className="my-3.5 font-semibold lg:italic text-secondaryColor text-md sm:text-xl">
            Casque de réalité virtuelle:
            Quels sont les meilleurs modèles
          </h3>
          <p className="font-medium text-[17px] hidden lg:block">
            La réalité virtuelle (VR) a pris d&apos;assaut le monde de la technologie
            ces dernières années,
            offrant des expériences immersives et captivantes dans de
            domaines variés tels que le divertissement, l&apos;éducation, la santé
            et bien d&apos;autres.
          </p>
        </div>
        <div className=" sm:bg-white mr-6 group cursor-pointer relative  p-6 min-w-[327px] sm:min-w-[427px] inline-block">
          <div className="absolute inset-0 bg-[#FFFDD0] opacity-0 sm:group-hover:opacity-40 transition-opacity ease-out duration-500" />
          <Image src="/mag1.png" width={427} height={277} alt="iphones picture" className="h-[200px] w-[417px] sm:h-[267px] rounded-t-md sm:rounded-md" />
          <div className="bg-gradient-to-r from-[#2f5d4a]  via-primaryColor  to-[#7ec8aa] min-h-[10px] w-full sm:hidden" />
          <h3 className="my-3.5 font-semibold lg:italic text-secondaryColor text-md sm:text-xl">
            Casque de réalité virtuelle:
            Quels sont les meilleurs modèles
          </h3>
          <p className="font-medium text-[17px] hidden lg:block">
            La réalité virtuelle (VR) a pris d&apos;assaut le monde de la technologie
            ces dernières années,
            offrant des expériences immersives et captivantes dans de
            domaines variés tels que le divertissement, l&apos;éducation, la santé
            et bien d&apos;autres.
          </p>
        </div>
        <div className=" sm:bg-white mr-6 group cursor-pointer relative  p-6 min-w-[327px] sm:min-w-[427px] inline-block">
          <div className="absolute inset-0 bg-[#FFFDD0] opacity-0 sm:group-hover:opacity-40 transition-opacity ease-out duration-500" />
          <Image src="/mag1.png" width={427} height={277} alt="iphones picture" className="h-[200px] w-[417px] sm:h-[267px]  rounded-tl-[20px] rounded-br-[20px] rounded-tr-[0px] rounded-bl-[0px]" />
          <div className="bg-gradient-to-r from-[#2f5d4a]  via-primaryColor  to-[#7ec8aa] min-h-[10px] w-full sm:hidden" />
          <h3 className="my-3.5 font-semibold lg:italic text-secondaryColor text-md sm:text-xl">
            Casque de réalité virtuelle:
            Quels sont les meilleurs modèles
          </h3>
          <p className="font-medium text-[17px] hidden lg:block">
            La réalité virtuelle (VR) a pris d&apos;assaut le monde de la technologie
            ces dernières années,
            offrant des expériences immersives et captivantes dans de
            domaines variés tels que le divertissement, l&apos;éducation, la santé
            et bien d&apos;autres.
          </p>
        </div>
        <div className=" sm:bg-white mr-6 group cursor-pointer relative  p-6 min-w-[327px] sm:min-w-[427px] inline-block">
          <div className="absolute inset-0 bg-[#FFFDD0] opacity-0 sm:group-hover:opacity-40 transition-opacity ease-out duration-500" />
          <Image src="/mag1.png" width={427} height={277} alt="iphones picture" className="h-[200px] w-[417px] sm:h-[267px] rounded-t-md sm:rounded-md" />
          <div className="bg-gradient-to-r from-[#2f5d4a]  via-primaryColor  to-[#7ec8aa] min-h-[10px] w-full sm:hidden rounded-tl-[20px] rounded-br-[20px] rounded-tr-[0px] rounded-bl-[0px]" />
          <h3 className="my-3.5 font-semibold lg:italic text-secondaryColor text-md sm:text-xl">
            Casque de réalité virtuelle:
            Quels sont les meilleurs modèles
          </h3>
          <p className="font-medium text-[17px] hidden lg:block">
            La réalité virtuelle (VR) a pris d&apos;assaut le monde de la technologie
            ces dernières années,
            offrant des expériences immersives et captivantes dans de
            domaines variés tels que le divertissement, l&apos;éducation, la santé
            et bien d&apos;autres.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Magazine;
