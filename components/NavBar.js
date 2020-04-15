import React from 'react';
import Link from 'next/link';

const NavLink = ({ href, children }) => {
  return (
    <Link href={href}>
      <a className='p-2 hover:text-white'>{children}</a>
    </Link>
  )
}

const NavBar = () => {
  return (
    <div className='bg-gray-500 py-4 text-center'>
      <NavLink href='/about'>About</NavLink>
      <NavLink href='/register'>Register</NavLink>
      <NavLink href='/login'>Log In</NavLink>
    </div>
  )
}

export default NavBar;