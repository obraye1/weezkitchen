import Image from 'next/image';
import React from 'react';
import { AiOutlineInstagram } from "react-icons/ai";

const InstagramImg = ({ socialImg }: any) => {
  return (
    <div className="relative">
      <Image src={socialImg} alt="/" className="w-full h-full " style={{}} />
      {/* OverLay */}
      <div className="absolute flex justify-center items-center top-0 left-0 bottom-0 right-0 hover:bg-[black]/50 group" >
      <p className=" text-[gray] hidden group-hover:block "><AiOutlineInstagram size={30} color="#C13584"/></p>
      </div>
    </div>
  );
};

export default InstagramImg;
