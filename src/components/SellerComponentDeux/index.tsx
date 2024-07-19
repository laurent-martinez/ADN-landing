import Image from 'next/image';

const SellerComponentdeux = () => {
  return (
    <div className="container bg-[#f0f1f5] p-4 md:p-12 mx-auto rounded-lg mb-12 flex flex-col-reverse lg:flex-row">
      <div className="lg:w-2/3 w-full relative h-64 lg:h-auto mb-8 lg:mb-0">
        <Image
          src="/aunction.jpg"
          alt="Vente aux enchères en cours"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="lg:w-1/3 w-full lg:pl-12 md:p-8 bg-darkBlue">
        <h2 className="text-3xl lg:text-4xl font-medium mb-6 leading-tight">
          Notre maison de vente aux enchères <span className='text-primaryColor font-serif italic'>au Mans</span> !
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          ADN Enchères est un acteur incontournable de la vente aux enchères en France. N°1 de la vente de lots neufs et High-Tech, en deux ans nous avons vendu plus de 120 000 lots, en live via la plateforme Interencheres.com ou dans notre maison de vente au Mans.
        </p>
      </div>
    </div>
  );
};

export default SellerComponentdeux;
