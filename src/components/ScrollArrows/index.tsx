import Image from 'next/image';
import React from 'react';

function ScrollArrows() {
  const isLargeScreen = window.innerWidth > 639;

  const handleScroll = (amount: number) => {
    console.log(window.innerWidth);
    window.scrollBy({
      left: amount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="flex items-center">
      <button type="button" onClick={() => handleScroll(-100)} className="absolute left-10 top-1/2 transform -translate-y-1/2 z-1500">
        {isLargeScreen ? (
          <Image width={32} height={32} alt="left arrow" src="/big-screen-left-arrow.svg" />
        ) : (
          <Image width={32} height={32} alt="left arrow" src="/new-left-arrow.svg" />
        )}
      </button>

      <button type="button" onClick={() => handleScroll(100)} className="absolute right-10 top-1/2 transform -translate-y-1/2 z-1500">
        {isLargeScreen ? (
          <Image width={32} height={32} alt="right arrow" src="/big-screen-right-arrow.svg" />
        ) : (
          <Image width={32} height={32} alt="right arrow" src="/right-arrow.svg" />
        )}
      </button>
    </div>
  );
}

export default ScrollArrows;
