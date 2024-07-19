const ADNEncheresInfo = () => {
  return (
    <div className="sm:container mx-auto pt-16 pb-0 sm:py-16 sm:px-4">
      <div className="flex flex-col lg:flex-row sm:gap-8">
        <div className="w-full lg:w-1/2 bg-[#002F56] p-8 md:p-12 sm:rounded-2xl shadow-xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-center mb-6 text-white">
            ADN Enchères pour les <span className="font-serif italic text-primaryColor">vendeurs</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-10"></div>
          <ul className="space-y-6 text-white text-lg leading-relaxed">
            <li>La garantie d'une expertise de qualité de vos lots par nos commissaires-priseurs et nos techniciens spécialisés (informatique - Smartphone).</li>
            <li>Une démultiplication des acheteurs avec la combinaison vente physique et vente en LIVE, retransmises directement sur interencheres.com, plateforme sécurisée n°1 en France.</li>
            <li>Un système de vente transparent, encadré et garantit par un procès verbal. Un procédé de vente gagnant et éprouvé.</li>
            <li>Un contact direct : <span className="font-semibold">reception@priseur.net</span></li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2 bg-secondaryColor p-8 md:p-12 sm:rounded-2xl shadow-xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-center mb-6 text-white">
            ADN Enchères pour les <span className="font-serif italic text-primaryColor">acheteurs</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-10"></div>
          <ul className="space-y-6 text-white text-lg leading-relaxed">
            <li>Avoir accès à une large gamme de produits</li>
            <li>Etre acteur de l'économie circulaire</li>
            <li>La garantie de payer le meilleur prix, sans bouger de chez soi pour les ventes en ligne, avec une transaction sécurisée</li>
            <li>L'expédition de vos lots directement chez vous</li>
            <li>(calcul automatique du coût d'expédition ou sur devis - voir CGV - CGE en bas de page)</li>
            <li>Une expérience amusante et émotionnelle</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ADNEncheresInfo;