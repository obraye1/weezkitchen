import React, { useState } from 'react';
import { AiOutlineInstagram, AiOutlineMenuFold } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-screen h-[90px] z-10 bg-zincbg drop-shadow-lg px-6 pt-7">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          {/* Logo Goes here */}
          <h1 className="text-2xl font-bold px-4 sm-text-3xl ">
            Weez
            <span className="text-gold  font-serif font-italic ">Kitchen</span>
          </h1>
        </div>
        <div>
          <ul className=" hidden md:flex md:gap-3">
            <li className="p-4">Home</li>
            <li className="p-4">Contact</li>
          </ul>
        </div>
        <div className="hidden md:flex ">
          <AiOutlineInstagram className=" pr-3 flex items-center text-5xl cursor-pointer " />

          <button
            className="px-5 py-2 text-[white] border bg-gold border-gold
    hover:bg-transparent hover:text-goldd rounded-3xl hover:drop-shadow-lg"
          >
            Place Order
          </button>
        </div>
        <div className="md:hidden " onClick={handleClick}>
          {!isOpen ? (
            <AiOutlineMenuFold className="text-2xl " />
          ) : (
            <RxCross2 className="text-2xl text-gold" />
          )}
        </div>
      </div>
      <ul
        className={
          !isOpen
            ? 'hidden'
            : 'absolute px-8 w-[90%] md:hidden lg:hidden xl:hidden 2xl:hidden overflow-hidden '
        }
      >
        <li className="border-b-2  border-zinc w-full p-5">Home</li>
        <li className="border-b-2 border-zinc  w-full p-5 hover:drop-shadow">
          Contact
        </li>
        <div className="my-4">
          <button
            className="px-8 py-3 text-[white] w-full border bg-gold border-gold
    hover:bg-transparent hover:text-goldd rounded-3xl hover:drop-shadow-lg"
          >
            Place Order
          </button>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
