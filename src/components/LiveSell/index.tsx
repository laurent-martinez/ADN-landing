import Image from 'next/image';
import React, { useState } from 'react';

function LiveSell() {
  const fakeData = [{
    image: '/nikon.png',
    title: 'Nikon 5ES',
  }, {
    image: '/chooGlasses.png',
    title: 'Lunettes Jimmy Choo',
  }, {
    image: '/hermes.png',
    title: 'Foulard Hermès',
  }, {
    image: '/iphone.png',
    title: 'Iphone 14S',
  }, {
    image: '/prada.png',
    title: 'Sac Prada',
  }, {
    image: '/graphix.png',
    title: 'Carte graphique',
  }];
  const [likeData, setLikeData] = useState(
    fakeData.map(() => ({ likes: 0, clicked: false })),
  );

  const handleHeartClick = (index : number) => {
    const newLikeData = [...likeData];
    if (!newLikeData[index].clicked) {
      newLikeData[index].likes += 1;
      newLikeData[index].clicked = true;
      setLikeData(newLikeData);
    } else {
      newLikeData[index].likes -= 1;
      newLikeData[index].clicked = false;
      setLikeData(newLikeData);
    }
  };

  return (
    <div className="bg-[#173C6A] w-screen h-auto mt-4 p-3 flex flex-col justify-center items-center">
      <p className="py-6 text-3xl text-white font-semibold">Lots les plus populaires</p>
      <div className="w-screen flex flex-wrap gap-0 my-4">
        {fakeData.map((item, index) => (
          <div className="w-full md:w-1/2 lg:w-1/6 group cursor-pointer" key={index}>
            <div className="live-sell-image relative">
              {likeData[index].clicked ? (
                <div className=" text-[#FE251B] absolute top-4 right-6 flex items-center gap-2 rounded ">
                  <Image
                    width={32}
                    height={32}
                    alt="Heart"
                    src="/heart.svg"
                    className="z-50 transition-duration-350 ease-linear"
                    onClick={() => handleHeartClick(index)}
                  />
                  <p className="font-bold">{likeData[index].likes}</p>
                </div>
              ) : (
                <div className=" text-[#FE251B] absolute top-4 right-6 flex items-center gap-2 rounded ">
                  <Image
                    width={32}
                    height={32}
                    alt="Heart"
                    src="/heart-v2.svg"
                    className="z-50 transition-duration-350 ease-linear"
                    onClick={() => handleHeartClick(index)}
                  />
                  <p className="opacity-0 font-bold">{likeData[index].likes}</p>
                </div>
              )}
              <div className="absolute inset-0 bg-[#FFFDD0] opacity-0 group-hover:opacity-40 transition-opacity ease-out duration-500" />
              <Image
                className="lg:w-full h-[250px] object-contain lg:object-fill"
                src={item.image}
                alt="nikon camera"
                width={849}
                height={748}
              />
              <p className="text-lg font-poppins font-semibold text-center text-white p-2 ">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LiveSell;
