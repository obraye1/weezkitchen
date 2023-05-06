import Image from 'next/image';
import React from 'react';

const InstagramImg = ({ socialImg }: any) => {
  return (
    <div className="relative">
      <Image src={socialImg} alt="/" className="w-full h-full " style={{}} />
      {/* OverLay */}
      <div className="absolute flex justify-center items-center top-0 left-0 bottom-0 right-0 hover:bg-[black]/50 group" >
      <p className=" text-[gray] hidden group-hover:block ">Inst-logo</p>
      </div>
    </div>
  );
};

export default InstagramImg;
