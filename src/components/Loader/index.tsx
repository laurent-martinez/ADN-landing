import React from 'react';
import { motion } from 'framer-motion';

const loaderVariants = {
  animationOne: {
    y: [0, -30],
    transition: {
      y: {
        yoyo: 1,
        duration: 0.25,
        ease: 'easeOut',
      },
    },
  },

};

function Loader() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="flex items-center justify-center">
        <p className="text-xl sm:text-3xl text-white sm:text-[#173C6A] font-semibold text-center mx-auto">Chargement..</p>
        <motion.div
          className="sm:w-[10px] sm:h-[10px] w-[5px] h-[5px] bg-white sm:bg-[#173C6A] rounded-full mx-auto my-[40px]"
          variants={loaderVariants}
          animate="animationOne"
        />
      </div>
    </div>
  );
}

export default Loader;
