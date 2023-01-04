import React from 'react'
import { DarkThemeToggle, Flowbite, Navbar } from "flowbite-react";
import { NavLink } from 'react-router-dom';
import Logo from './img/Logo.png';
import 'animate.css';
function NavBar() {
  return (  
    <Navbar fluid={true} rounded={true} className="pt-4 animate__animated animate__fadeInDown">
  <Navbar.Brand className='cursor-pointer'>
    <img
      src={Logo}
      className="mr-3 h-6 sm:h-9 md:mt-2"
      alt="Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white md:pt-2">
        TIJO T JOSEPH <span className='text-base'>/ Developer</span>
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className='pt-4'>
        <NavLink className="block py-2 pr-4 pl-3 md:p-0 md:pt-2 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white" to="/">About Me</NavLink>
        <NavLink className="block py-2 pr-4 pl-3 md:p-0 md:pt-2 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white" to="/resume">Skills</NavLink>
        <NavLink className="block py-2 pr-4 pl-3 md:p-0 md:pt-2 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white" to="/education">Education</NavLink>
        <NavLink className="block py-2 pr-4 pl-3 md:p-0 md:pt-2 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white" to="/projects">Projects</NavLink>
        <NavLink className="block py-2 pr-4 pl-3 md:p-0 md:pt-2 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white" to="/contact">Contact</NavLink>
    <Flowbite >
      <DarkThemeToggle/>
    </Flowbite>
  </Navbar.Collapse>
</Navbar>
  )
}

export default NavBar