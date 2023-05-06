import Image from 'next/image';
import { sliderData } from '@/data/sliderData';
import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

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
    <div id="menu" className="max-w-[1240px] mx-auto max-h-full">
      <h1 className="text-2xl font-bold text-center p-4">Bread Menu</h1>
      <div>
        <div className="flex relative justify-center p-4">
          {sliderData.map((slide, index) => (
            <div
              key={index}
              className={
                index === current
                  ? 'opacity-[1] ease-in duration-1000'
                  : 'opacity-0'
              }
            >
              <FaArrowCircleLeft
                onClick={prevSlide}
                size={50}
                className="absolute left-[30px] top-[50%] text-[white]/70 cursor-pointer select-none z-[2]  "
              />
              {index === current && (
                <Image
                  src={slide.image}
                  alt="Picture of Bread"
                  priority
                  width={1440}
                  height={500}
                  className="rounded-xl"
                  style={{
                    objectFit: 'cover',
                    height: '500px',
                    width: '1440px',
                  }}
                />
              )}
              <FaArrowCircleRight
                onClick={nextSlide}
                size={50}
                className="absolute right-[30px] top-[50%] text-[white]/70 cursor-pointer select-none z-[2]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
