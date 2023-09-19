import React from 'react';
import Image from 'next/image';
import useFetchData, { Data } from '@/pages/api/UseFetchData';
import Loader from '../Loader';

function BestSeller() {
  const { data, loading, error } = useFetchData();
  const imageData = data?.filter((item) => item.images.length > 0);
  console.log('imagedata', imageData);
  if (error) {
    return <p>Error fetching data.</p>;
  }

  return (
    <div className="best-seller-container sm:px-24 mb-5">
      <p className="pt-6 px-4  my-5 text-3xl text-[#173C6A] font-poppins font-semibold">Les ventes en cours</p>
      <div className="best-seller overflow-x-auto  whitespace-nowrap px-4 pb-6 pt-0 relative">
        {loading ? <Loader /> : data && data?.map((item : Data) => (
          <div key={item.id} className="best-seller-card inline-block bg-white mr-6 group cursor-pointer relative rounded-t-lg shadow-xl">
            <div className="category-image relative rounded-t-lg">
              <Image width={32} height={32} alt="Heart" src="/heart-v2.svg" className="absolute top-2 right-2 z-50" />
              <div>
                {item.images.length > 0 ? (
                  <Image
                    width={323}
                    height={253}
                    alt={`image${item.images[0].id}`}
                    src={item.images[0].publicPath}
                    key={item.images[0].id}
                    className="w-full h-[253px] border-b-4 border-[#EAEAE9] rounded-t-lg"
                  />
                )
                  : (
                    <div className="bg-[#5EBB95] text-white h-[253px] w-full flex justify-center items-center rounded-t-lg">
                      {' '}
                      <Image alt="ADN brand logo" src="/logo_adn.svg" width={150} height={150} className="z-150 bg-white p-4" />
                    </div>
                  )}
              </div>
              <div className="absolute inset-0 bg-[#FFFDD0] opacity-0 group-hover:opacity-40 transition-opacity ease-out duration-500" />
            </div>
            <div className="best-seller-data p-4 h-[322px]">
              <div className="price flex flex-row justify-between items-center">
                <p className="text-xl font-light font-poppins mr-1 text-[#292929]">Estimation  </p>
                <div className="bg-secondaryColor flex px-2">
                  <p className="text-lg font-semibold text-white">
                    {' '}
                    {item.minEstimation}
                    <span className="text-lg font-extrabold">€</span>
                    {' '}
                  </p>
                  <p className="text-lg font-semibold text-white">
                    {' '}
                    -
                    {' '}
                    {item.maxEstimation}
                    <span className="text-lg font-extrabold">€</span>
                  </p>
                </div>
              </div>
              <div className="lot flex flex-row justify-center mt-6">
                <p className="text-2xl font-light font-poppins mr-1 text-[#292929]">Lot</p>
                <p className="text-2xl font-bold font-poppins text-[#173C6A]">{item.id}</p>
              </div>
              <div className="w-full description whitespace-normal mt-4 py-4 px-2 border-t-2 border-b-2 border-secondaryColor">
                <p className=" font-poppins text-base min-h-[90px] max-h-[90px] text-[#292929] overflow-hidden text-overflow-ellipsis text-ellipsis-2">
                  {item?.designation}
                </p>
              </div>
              <div className="date flex flex-row justify-between mt-8">
                <div className="hour flex flex-row justify-center items-center">
                  <Image width={32} height={32} alt="Clock" src="/clock.svg" className="mr-1" />
                  <p className="ml-2 text-secondaryColor font-semibold">{item?.date}</p>
                </div>
                <div className="live flex flex-col justify-center items-center">
                  <p className="bg-primaryColor px-4 text-lg font-semibold text-white font-poppins">LIVE</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSeller;
