import React from 'react';

const Hero = ({ headings, message }: any) => {
  return (
    <div className="flex items-center mb-8  justify-center h-screen  bg-cover bg-fixed bg-center custom-img">
      {/* Overley  */}
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-[black]/30" />
      <div className="p-5 text-[white] md:ml-[10rem] w-screen mt-[-10rem] ">
        <h2 className="text-5xl text-[white] md:text-gold font-bold ">
          {headings}
        </h2>
        <p className="py-3 text-xl ">{message}</p>
        <button className="border relative  md:hover:text-dark border-goldd px-8 py-2  hover:bg-transparent rounded-lg">
          place order
        </button>
      </div>
    </div>
  );
};

export default Hero;

{
  /* <video
autoPlay
loop
muted
className="absolute z-10 w-full min-w-full max-w-none  "
>
<source
  src="https://assets.mixkit.co/videos/preview/mixkit-chocolate-bread-dessert-18323-large.mp4"
  type="video/mp4"
/>
</video> */
}
