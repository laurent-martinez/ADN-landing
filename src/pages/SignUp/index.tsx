import Navbar from '@/components/Navbar';
import Image from 'next/image';
import React from 'react';

function SignUp() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Navbar />
      <div className="w-full h-full  sign-up-container flex flex-col md:flex-row ">
        <div className="lg:w-5/12 frame-registration w-full h-full flex flex-col items-center justify-center pb-8 bg-secondaryColor  z-150">
          {/* <div className="hidden md:flex flex-col items-center gap-4 mt-4 z-50">
            <Image src="/charac1.png" alt="character one of sign up illustration" width={255} height={275} className="border-4 border-white rounded ml-5 p-4 w-[100px]" />
            <Image src="/charac2.png" alt="character one of sign up illustration" width={255} height={252} className="border-4 border-white rounded ml-5 p-4 w-[150px]" />
            </div>
          <div className="flex flex-col items-center gap-5 mt-4 z-50">
            <Image src="/charac4.png" alt="character one of sign up illustration" width={255} height={275} className="border-4 border-white rounded ml-5 p-4 w-[250px]" />
            <Image src="/charac5.png" alt="character one of sign up illustration" width={255} height={252} className="border-4 border-white rounded ml-[60px] p-4 w-[150px]" />
            <Image src="/charac3.png" alt="character one of sign up illustration" width={257} height={257} className="border-4 border-white rounded mr-[100px] p-4 w-[100px]" />
          </div>
          <div className="xl:flex flex-col items-center gap-4 mt-4 z-50 hidden">
            <Image src="/charac6.png" alt="character one of sign up illustration" width={255} height={252} className="border-4 border-white rounded ml-5 p-4 w-[100px]" />
            <Image src="/charac7.png" alt="character one of sign up illustration" width={255} height={275} className="border-4 border-white rounded ml-5 p-4 w-[70px]" />
          </div>  */}
          <div className="mb-10 bg-gradient-to-r from-primaryColor to-[#85d0b1] rounded-lg relative p-1">
            <div className="flex flex-col items-center h-full w-full bg-secondaryColor p-8 rounded-lg">
              <div className="absolute inset-0 pointer-events-none" />
              <p className="text-white text-3xl font-bold font-poppins text-center">Bienvenue sur ADN enchères</p>
              <Image src="/profilepic2.png" alt="character one of sign up illustration" width={255} height={350} className="w-[300px]" />
              <p className="text-white text-3xl font-thin font-poppins text-center">Créer votre compte facilement</p>
              <p className="bg-white p-4 text-darkTextColor mt-5 font-semibold tracking-tight leading-8 font-poppins text-lg">Commencez à vendre et à acheter en quelques minutes</p>
            </div>
          </div>
        </div>
        <div className="lg:w-7/12 w-full h-full bg-[#EAEAE9]">
          <h3 className="text-center text-4xl font-semibold text-secondaryColor mt-5">Créer votre compte</h3>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
