import Image from 'next/image';

const AuctionComponent = () => {
  return (
    <div className="container mx-auto px-4 my-12">
      {/* Premier bloc */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Nos commissaires-priseurs via le <span className='font-cormo text-primaryColor'>Live Interenchères</span>,</h1>
        <h2 className="text-2xl font-semibold mb-4">depuis n'importe quel smartphone, ordinateur ou tablette</h2>
        <p className="text-gray-700 mb-4">
          Saviez-vous que plus d'un quart des français avait déjà participé à une vente aux enchères ? Elles se démocratisent encore plus avec l'essor des ventes en live avec nos commissaires-priseurs. Sans bouger de chez-vous, vous pouvez enchérir en toute quiétude et sécurité. Et avec ADN Enchères, nous expédions pratiquement tous les lots sur simple demande.
        </p>
      </div>

      {/* Second bloc */}
      <div className="grid grid-cols-3 grid-rows-2 gap-2 h-96">
        <div className="col-span-1 row-span-2 relative">
          <Image src="/auctioneer.jpg" alt="Car" fill className="object-cover rounded-lg" />
        </div>
        <div className="col-span-2 row-span-1 relative">
          <Image src="/orderPhone2.jpg" alt="Artist" fill className="object-cover rounded-lg" />
        </div>
        <div className="col-span-1 row-span-1 relative">
          <Image src="/orderComputer.jpg" alt="Jeweler" fill className="object-cover rounded-lg" />
        </div>
        <div className="col-span-1 row-span-1 relative">
          <Image src="/order-tablet-old.jpg" alt="Vinyl" fill className="object-cover rounded-lg" />
        </div>
        <div className="col-span-1 row-span-1 relative">
          <Image src="/best-seller-4.png" alt="Drawing" fill className="object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
};
export default AuctionComponent;