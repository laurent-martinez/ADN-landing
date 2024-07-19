import React, { useRef } from 'react';
import Image from 'next/image';
import useFetchData, { Data } from '@/pages/api/UseFetchData';
import Loader from '../Loader';

function BestSeller() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const { data, loading, error } = useFetchData();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    console.error('Error fetching data:', error);
    return <p>Error fetching data.</p>;
  }

  if (!data) {
    return <p>No data available.</p>;
  }

  const imageData = data.filter((item) => item.images.length > 0);

  const sliderLeft = () => {
    const slider = sliderRef.current;
    if (slider) {
      slider.scrollLeft -= slider.offsetWidth;
    }
  };

  const sliderRight = () => {
    const slider = sliderRef.current;
    if (slider) {
      slider.scrollLeft += slider.offsetWidth;
    }
  };

  return (
    <div className="container mx-auto sm:px-18 bg-gradient-to-b to-[#173C6A] from-90% to-10% sm:from-white sm:to-white from-[#08172a]">
      <p className="pt-6 text-center sm:text-left my-2 mb-5 text-xl xs:text-2xl sm:text-3xl text-white sm:text-secondaryColor font-poppins font-semibold">Les ventes en cours</p>
      <div className="flex items-center">
        <Image
          onClick={sliderLeft}
          width={24}
          height={24}
          alt="Heart"
          src="/big-screen-left-arrow.svg"
          className="cursor-pointer z-50 opacity-50 hover:opacity-100 w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]"
        />
        <div ref={sliderRef} className="best-seller overflow-x-auto scroll scroll-smooth whitespace-nowrap p-4">
          {imageData.map((item: Data, index: number) => (
            <div key={item.id} className={`max-w-[300px] inline-block bg-white mr-6 group relative cursor-pointer ${index !== 0 ? 'mr-6' : ''} rounded-md shadow-xl hover:scale-105 ease-in-out duration-300`}>
              <div className="category-image rounded-t-lg">
                {item.images.length > 0 ? (
                  <Image
                    width={323}
                    height={253}
                    alt={`image${item.images[0].order}`}
                    src={`${item.images[0].path}${item.images[0].name}`}
                    className="sm:h-[253px] h-[150px] border-b-4 border-[#EAEAE9] rounded-t-lg"
                  />
                ) : (
                  <div className="bg-[#5EBB95] text-white sm:h-[200px] h-[170px] w-full flex justify-center items-center rounded-t-lg">
                    <Image alt="ADN brand logo" src="/best-seller-5.png" width={150} height={150} className="w-full h-full rounded-t-md" />
                  </div>
                )}
              </div>
              <div className="best-seller-data p-4 sm:h-[290px]">
                <div className="price flex flex-row justify-between items-center">
                  <p className="text-lg sm:text-xl font-light font-poppins mr-1 text-[#292929]">Estimation</p>
                  <div className="bg-secondaryColor flex px-2 rounded-md">
                    <p className="text-md md:text-lg font-semibold text-white">
                      {item.minEstimation}
                      <span className="text-md sm:text-lg font-extrabold">€</span>
                    </p>
                    <p className="text-md sm:text-lg font-semibold text-white">
                      -
                      {item.maxEstimation}
                      <span className="text-md sm:text-lg font-extrabold">€</span>
                    </p>
                  </div>
                </div>
                <div className="lot flex-row justify-center sm:mt-6 mt-3 hidden sm:flex">
                  <p className="text-lg sm:text-2xl font-light font-poppins mr-1 text-[#292929]">Lot</p>
                  <p className="text-lg sm:text-2xl font-bold font-poppins text-[#173C6A]">{item.id}</p>
                </div>
                <div className="w-full description whitespace-normal sm:mt-4 mt-3 my-2 sm:my-0 px-2">
                  <p className="p-2 font-poppins text-md sm:text-base min-h-[60px] max-h-[60px] sm:min-h-[90px] sm:max-h-[90px] text-[#292929] overflow-hidden text-overflow-ellipsis text-ellipsis-2">
                    {window.innerWidth <= 640
                      ? item.designation.split(' ').slice(0, 4).join(' ')
                      : item.designation}
                  </p>
                </div>
                <div className="p-1 sm:p-3 absolute bottom-0 left-0 right-0 bg-primaryColor flex justify-between items-center rounded-b-md">
                  <p className="px-2 text-md sm:text-lg font-semibold text-white font-poppins">LIVE</p>
                  <div className="py-0 px-2 sm:p-1 hour flex flex-row justify-center items-center">
                    <Image width={26} height={26} alt="Clock" src="/clock.svg" className="mr-1 w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Image width={24} height={24} alt="Heart" src="/big-screen-right-arrow.svg" onClick={sliderRight} className="cursor-pointer z-50 opacity-50 hover:opacity-100 w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]" />
      </div>
    </div>
  );
}

export default BestSeller;
