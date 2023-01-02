import React from 'react'
import { DarkThemeToggle, Flowbite, Navbar } from "flowbite-react";
import { NavLink } from 'react-router-dom';
function NavBar() {
  return (  
    <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand className='cursor-pointer'>
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        TIJO T JOSEPH <span className='text-base'>/ Developer</span>
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className='pt-4'>
    <Navbar.Link>
        <NavLink to="/">About Me</NavLink>
    </Navbar.Link>
    <Navbar.Link>
        <NavLink to="/resume">Resume</NavLink>
    </Navbar.Link>
    <Navbar.Link>
        <NavLink to="/projects">Projects</NavLink>
    </Navbar.Link>
    <Navbar.Link>
        <NavLink to="/contact">Contact</NavLink>
    </Navbar.Link>
    <Flowbite>
      <DarkThemeToggle/>
    </Flowbite>
  </Navbar.Collapse>
</Navbar>
  )
}

export default NavBar