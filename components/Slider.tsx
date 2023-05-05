import Image from "next/image";
import { sliderData } from '@/data/sliderData';
import React from 'react';

const Slider = ({ slides }) => {
  return (
    <div id="menu">
      <h1>Bread Menu</h1>
      <div>
        {sliderData.map((slide, index) => (
          <Image src={slide.image} alt="/" width={1440} height={600} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
