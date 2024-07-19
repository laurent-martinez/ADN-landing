import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon, HeartIcon } from '@heroicons/react/24/outline';

const products = [
  {
    name: "Dyson AM09 Hot + Cool Fan Heater Refurbished",
    price: 199.99,
    originalPrice: 449.99,
    image: "/hermes.png"
  },
  {
    name: "Apple iPhone 13 Pro 512GB Unlocked AT&T T-Mobile Verizon Very Good",
    price: 529.95,
    originalPrice: 1299.00,
    image: "/hermes.png"
  },
  {
    name: "Greenworks 80V 21\" Self-Propelled Mower w/ 4Ah 2Ah Battery&Rap...",
    price: 419.99,
    originalPrice: 699.99,
    image: "/hermes.png"
  },
  {
    name: "Pokemon TCG Japanese Box SEALED Pokemon C",
    price: 79.99,
    originalPrice: 99.99,
    image: "/hermes.png"
  },
  {
    name: "Dyson AM09 Hot + Cool Fan Heater Refurbished",
    price: 199.99,
    originalPrice: 449.99,
    image: "/hermes.png"
  },
  {
    name: "Apple iPhone 13 Pro 512GB Unlocked AT&T T-Mobile Verizon Very Good",
    price: 529.95,
    originalPrice: 1299.00,
    image: "/hermes.png"
  },
  {
    name: "Greenworks 80V 21\" Self-Propelled Mower w/ 4Ah 2Ah Battery&Rap...",
    price: 419.99,
    originalPrice: 699.99,
    image: "/hermes.png"
  },
  {
    name: "Pokemon TCG Japanese Box SEALED Pokemon C",
    price: 79.99,
    originalPrice: 99.99,
    image: "/hermes.png"
  },
  {
    name: "Dyson AM09 Hot + Cool Fan Heater Refurbished",
    price: 199.99,
    originalPrice: 449.99,
    image: "/hermes.png"
  },
  {
    name: "Apple iPhone 13 Pro 512GB Unlocked AT&T T-Mobile Verizon Very Good",
    price: 529.95,
    originalPrice: 1299.00,
    image: "/hermes.png"
  },
  {
    name: "Greenworks 80V 21\" Self-Propelled Mower w/ 4Ah 2Ah Battery&Rap...",
    price: 419.99,
    originalPrice: 699.99,
    image: "/hermes.png"
  },
  {
    name: "Pokemon TCG Japanese Box SEALED Pokemon C",
    price: 79.99,
    originalPrice: 99.99,
    image: "/hermes.png"
  },
];

const ProductCard = ({ product }) => (
  <div className="flex-shrink-0 w-64 p-4 bg-white rounded-lg shadow-md">
    <div className="relative h-40 mb-4">
      <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" className="rounded-lg" />
      <HeartIcon className="absolute top-2 right-2 w-6 h-6 text-gray-500" />
    </div>
    <h3 className="text-sm font-semibold mb-2 overflow-hidden text-ellipsis line-clamp-2">{product.name}</h3>
    <div className="flex items-baseline">
      <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
      <span className="ml-2 text-sm line-through text-gray-500">${product.originalPrice.toFixed(2)}</span>
    </div>
  </div>
);



const HorizontalScroll = () => {
    const scrollLeft = () => {
      document.getElementById('scrollContainer').scrollLeft -= 200;
    };
  
    const scrollRight = () => {
      document.getElementById('scrollContainer').scrollLeft += 200;
    };
  
    return (
      <div className="relative py-12">
        <div className="relative">
          <button onClick={scrollLeft} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md">
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <div id="scrollContainer" className="flex overflow-x-auto space-x-4 scrollbar-hide">
            <div className="flex-shrink-0 w-64 p-4 bg-primaryColor text-white rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">Today's Deals</h2>
              <p className="text-sm mb-4">All With Free Shipping</p>
              <button className="px-4 py-2 bg-white text-black rounded-full text-sm font-semibold">Shop now</button>
            </div>
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
          <button onClick={scrollRight} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md">
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    );
  };
  
  export default HorizontalScroll;