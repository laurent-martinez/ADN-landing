import Image from 'next/image';
import Link from 'next/link';

const AdnInfo = () => {
  return (
    <div className="container mx-auto px-4 py-6 sm:py-16">
      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-12">
        <div className="lg:w-[55%] flex flex-col justify-between mb-8 lg:mb-0">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-8">
              POURQUOI <span className='text-primaryColor font-serif italic'>ADN ENCHÈRES</span> ?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              ADN Enchères présente une alternative <span className="font-semibold">ludique et efficace</span> aux
              ventes traditionnelles en proposant une gamme de produits
              accessibles à tous.
            </p>
            <h3 className="text-3xl font-serif italic font-bold mb-6">Comment ?</h3>
            <p className="text-xl mb-8 leading-relaxed">
              En donnant une seconde vie aux <span className="font-serif italic font-semibold">smartphones</span>, <span className="font-serif italic font-semibold">objets
              connectés</span>, <span className="font-serif italic font-semibold">gaming</span>, <span className="font-serif italic font-semibold">son</span>, <span className="font-serif italic font-semibold">image</span> et bien plus encore.
            </p>
            <p className="text-lg italic mb-12 text-gray-600">
              Il peut s'agir d'objets neufs, reconditionnés, avec défaut
              d'aspect ou traces d'utilisations.
            </p>
          </div>
          <Link
          href={'https://www.interencheres.com/recherche/ventes?search=adn'}
          className="text-emerald-500 text-lg font-semibold bg-white border-2 border-primaryColor px-8 py-3 rounded-lg hover:bg-primaryColor hover:text-white transition-colors duration-300 w-fit">
            Participez à une vente
          </Link>
        </div>
        <div className="lg:w-[45%] grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative h-60 sm:h-64 md:h-72 lg:h-80">
            <Image
              src="/iphone-1.jpg"
              alt="Smartphone on granite surface"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative h-60 sm:h-64 md:h-72 lg:h-80">
            <Image
              src="/connected-watch.jpg"
              alt="Connected watch"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative h-60 sm:h-64 md:h-72 lg:h-80">
            <Image
              src="/gaming.jpg"
              alt="Gaming controller"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative h-60 sm:h-64 md:h-72 lg:h-80">
            <Image
              src="/app-photo.jpg"
              alt="Camera lens"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdnInfo;
