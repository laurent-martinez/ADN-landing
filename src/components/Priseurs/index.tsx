import Image from 'next/image';

const experts = [
  { name: 'Anita Helmy', expertise: 'Experte en Art moderne et contemporain', image: '/pict1.jpg' },
  { name: 'Christine Barrat', expertise: 'Experte en Objets décoratifs', image: '/pict2.jpg' },
  { name: 'Jacopo Corsi', expertise: 'Expert en Monnaies et billets', image: '/pict3.jpg' },
  { name: 'Wouter Korst', expertise: 'Expert en Bandes dessinées', image: '/pict1.jpg' },
  { name: 'Luca Gazzaretti', expertise: 'Expert en Voitures de collection', image: '/pict1.jpg' },
];

const ExpertsComponent = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 ">
        Faites une offre sur plus de <span className="text-primaryColor font-cormo">75000</span> objets d'exception chaque semaine, <span className="text-primaryColor font-cormo">sélectionnés par des centaines d'experts.</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {experts.map((expert, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-full h-64 mb-4">
              <Image
                src={expert.image}
                alt={expert.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-lg font-semibold">{expert.name}</h3>
            <p className="text-sm text-gray-600 text-center">{expert.expertise}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertsComponent;