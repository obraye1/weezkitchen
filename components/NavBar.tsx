import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import {
  AiOutlineClose,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineMenu,
  AiOutlineMenuFold,
} from 'react-icons/ai';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleClick = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#fff');
        setTextColor('#000');
      } else {
        setColor('transparent');
        setTextColor('#fff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 right-0 top-0 w-screen z-10 ease-in duration-300"
    >
      <div className="md:max-w-[1240px] mx-auto flex justify-between items-center p-4 text-[white] ">
        <Link href="/">
          <h1
            style={{ color: `${textColor}` }}
            className="text-2xl font-bold sm:text-2xl "
          >
            Weez
            <span className="text-[black]/50 md:text-gold font-italic ">
              Kitchen
            </span>
          </h1>
        </Link>
        <div>
          <ul className="hidden sm:flex " style={{ color: `${textColor}` }}>
            <li className="p-4 border-b">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4">
              <Link href="/#menu">Bread Menu</Link>
            </li>
            <li className="p-4">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div style={{ color: `${textColor}` }} className="hidden md:flex ">
          <AiOutlineInstagram
            color="#C13584"
            className=" pr-2 flex items-center text-5xl cursor-pointer "
          />
          <button
            style={{ color: `${textColor}` }}
            className="px-5 py-2 text-[white] border-4 border-gold
    hover:bg-transparent hover:text-dark rounded-lg hover:drop-shadow-lg"
          >
            Place Order
          </button>
        </div>
        {/* z-10 to display on top of the overlay */}
        <div
          onClick={handleClick}
          className="sm:hidden block z-10 cursor-pointer"
        >
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenuFold size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu*/}
        <div
          className={
            nav
              ? 'sm:hidden bg-dark absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300'
              : 'sm:hidden bg-dark absolute top-0 right-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300'
          }
        >
          <ul className="pt-[260px] h-screen">
            <li className="p-4 border-b text-4xl hover:text-gold">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gold">
              <Link href="/#menu">Bread Menu</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gold">
              <Link href="/contact">Contact</Link>
            </li>
            <div className="z-10 pb-[25px] pt-[75px] cursor-pointer flex gap-5 items-center justify-center">
              <AiOutlineInstagram size={30} color="#C13584" />
              <AiOutlineFacebook size={30} color=" #3B5998" />
            </div>
            <div>
              <button
                onClick={handleClick}
                className="px-8 py-3 text-[white] border border-[white]
    hover:bg-transparent hover:text-goldd rounded-lg hover:drop-shadow-lg"
              >
                Place Order
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
