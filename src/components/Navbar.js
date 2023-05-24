import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SSA from '../assets/SSA.png'

const Navbar = () => {
  const NavItemStyle = 'flex justify-center items-center w-fit h-min text-grey flex flex-col'
  const NavItemTextStyle = 'p-6 px-2 py-1 my-2 text-p16 after:transition after:duration-200 hover:text-black after:w-0 after:aspect-square hover:after:w-1 hover:after:rounded-full hover:after:bg-black'
  const NavItemImageStyle = 'w-10 aspect-square p-0 object-contain m-2'
  return (
    <nav className='border-2 border-pink-darkest rounded-full bg-white flex flex-row justify-between items-center px-40 mt-48 fixed w-fit gap-40'>
      <Link className={`${NavItemStyle} ${NavItemImageStyle} `} href="/">
        <Image className={`${NavItemImageStyle}`} src={SSA} />
      </Link>
      <Link className={`${NavItemStyle} ${NavItemTextStyle}`} href="/">Home</Link>
      <Link className={`${NavItemStyle} ${NavItemTextStyle}`} href="/works">Our Works</Link>
      <Link className={`${NavItemStyle} ${NavItemTextStyle}`} href="/partners">Partners</Link>
      <Link className={`${NavItemStyle} ${NavItemTextStyle}`} href="/team">Team</Link>
      <Link className={`${NavItemStyle} ${NavItemTextStyle}`} href="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
