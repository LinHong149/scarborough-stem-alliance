import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SSA from '../assets/SSA.png';



const Navbar = () => {
  const NavItemStyle = 'flex justify-between items-center h-min text-grey flex flex-col'
  const NavItemTextStyle = 'h-full px-2 py-1 text-p16 after:transition after:duration-200 hover:text-black after:w-0 after:aspect-square hover:after:w-1 hover:after:rounded-full hover:after:bg-black'
  const NavItemImageStyle = 'w-12 aspect-square p-0 object-contain my-2'
  return (
    <nav className={`flex flex-row justify-between w-full px-20 items-center absolute `}>
      <Link className={`${NavItemStyle} ${NavItemImageStyle} `} href="/" alt="ssalogo">
        <Image className={`${NavItemImageStyle}`} src={SSA} />
      </Link>
      <div className='flex flex-row w-fit h-fit gap-10 items-center hover:align-end ' >
        <Link className={`${NavItemStyle} ${NavItemTextStyle}`} href="/">Home</Link>
        <Link className={`${NavItemStyle} ${NavItemTextStyle}`} href="/works">Our Works</Link>
        <Link className={`${NavItemStyle} ${NavItemTextStyle}`} href="/partners">Partners</Link>
        <Link className={`${NavItemStyle} ${NavItemTextStyle}`} href="/team">Team</Link>
        <Link className={`${NavItemStyle} ${NavItemTextStyle}`} href="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
