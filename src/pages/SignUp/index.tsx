import Navbar from '@/components/Navbar';
import Image from 'next/image';
import React from 'react';

function SignUp() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Navbar />
      <div className="w-full h-full  sign-up-container flex flex-col md:flex-row ">
        <div className="lg:w-5/12 frame-registration w-full h-full flex flex-col items-center justify-center pb-8 bg-secondaryColor  z-150">
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
