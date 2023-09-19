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
      <div className="flex items-center">
        <p className="text-3xl text-[#173C6A] font-semibold text-center mx-auto">Chargement..</p>
        <motion.div
          className="w-[10px] h-[10px] bg-[#173C6A] rounded-full mx-auto my-[40px]"
          variants={loaderVariants}
          animate="animationOne"
        />
      </div>
    </div>
  );
}

export default Loader;
