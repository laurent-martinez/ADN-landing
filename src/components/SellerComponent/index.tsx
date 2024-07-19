import Image from 'next/image';

const SellerComponent = () => {
  return (
    <div className="container bg-[#f0f1f5] p-4 md:p-12 mx-auto rounded-lg flex flex-col lg:flex-row">
      <div className="lg:w-1/2 w-full lg:pr-12 mb-8 lg:mb-0">
        <h2 className="text-4xl lg:text-5xl font-medium mb-6 leading-tight pt-6 sm:pt-0">
          Nos commissaires-priseurs via le <span className='text-primaryColor font-serif italic'>Live Interenchères</span>
        </h2>
        <p className="text-2xl mb-6 text-gray-700">
          depuis n'importe quel smartphone, ordinateur ou tablette
        </p>
        <p className="text-lg mb-6 leading-relaxed text-gray-600">
          Saviez-vous que plus d'un quart des français avait déjà participé à une vente aux
          enchères ? Elles se démocratisent encore plus avec l'essor des ventes en live avec nos
          commissaires-priseurs. Sans bouger de chez-vous, vous pouvez enchérir en toute
          quiétude et sécurité. Et avec ADN Enchères, nous expédions pratiquement tous les lots
          sur simple demande.
        </p>
        <p className="text-base text-gray-500 leading-relaxed">
          Fondée en 2008 avec comme mission de rendre les objets d'exception plus accessibles, notre plateforme propose
          désormais chaque semaine plus de 600 ventes, dans de multiples catégories, telles que les objets de
          collection, l'art, le design, les bijoux, les montres, les voitures de collection et bien d'autres encore.
        </p>
      </div>
      <div className="lg:w-1/2 w-full relative h-64 lg:h-auto">
        <Image
          src="/auctioneer.jpg"
          alt="Auction gavel on keyboard"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default SellerComponent;
