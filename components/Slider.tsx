import Image from 'next/image';
import { sliderData } from '@/data/sliderData';
import React, { useState } from 'react';

const Slider = ({ slides }: any) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="menu">
      <h1>Bread Menu</h1>
      <div>
        {sliderData.map((slide, index) => (
          <div key={index} className={index === current ? 'opacity-[1] ease-in duration-1000' : 'opacity-0'}>
            {index === current && (
              <Image src={slide.image} alt="/" width={1440} height={600} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
