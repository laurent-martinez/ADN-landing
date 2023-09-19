/* eslint-disable max-len */
import useFetchData, { Data } from '@/pages/api/UseFetchData';
import Image from 'next/image';
import React from 'react';

function LiveSell() {
  const { data } = useFetchData();
  interface Livesell {
    estimationMax: number;
    estimationMin: number;
  }
  const bestEstim = data?.sort((a : Livesell, b: Livesell) => b.estimationMax - a.estimationMax).slice(0, 6);
  console.log('bestEst', bestEstim);
  function threeWords(chaine : string) {
    // Étape 1 : Diviser la chaîne en mots
    const mots = chaine.split(' ');

    // Étape 2 : Sélectionner les trois premiers mots
    const troisPremiersMots = mots.slice(0, 3);

    // Étape 3 : Rejoindre les mots en une seule chaîne
    const resultat = troisPremiersMots.join(' ');

    return resultat;
  }
  // const fakeData = [{
  //   image: '/nikon.png',
  //   title: 'Nikon 5ES',
  // }, {
  //   image: '/chooGlasses.png',
  //   title: 'Lunettes Jimmy Choo',
  // }, {
  //   image: '/hermes.png',
  //   title: 'Foulard Hermès',
  // }, {
  //   image: '/iphone.png',
  //   title: 'Iphone 14S',
  // }, {
  //   image: '/prada.png',
  //   title: 'Sac Prada',
  // }, {
  //   image: '/graphix.png',
  //   title: 'Carte graphique',
  // }];

  return (
    <div className="bg-[#173C6A] w-screen h-auto mt-4 p-3 flex flex-col justify-center items-center">
      <p className="py-6 text-3xl text-white font-semibold">Lots les plus populaires</p>
      <div className="w-screen flex flex-wrap gap-0 my-4">
        {bestEstim?.map((item : Data, index : number) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className="w-full md:w-1/2 lg:w-1/6 group cursor-pointer" key={index}>
            <div className="live-sell-image relative">
              <div className="absolute top-4 right-6 flex items-center gap-2 rounded ">
                <Image
                  width={32}
                  height={32}
                  alt="Heart"
                  src="/heart-v2.svg"
                  className="z-50 transition-duration-350 ease-linear"
                />
              </div>
              <div className="absolute inset-0 bg-[#FFFDD0] opacity-0 group-hover:opacity-40 transition-opacity ease-out duration-500" />
              <Image
                className="lg:w-full h-[250px] object-contain lg:object-fill"
                src="/prada.png"
                alt="nikon camera"
                width={849}
                height={748}
              />
              <p className="text-lg font-poppins font-semibold text-center text-white p-2 ">{threeWords(item.designation)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LiveSell;
