"use client";

{/*This is the navigation links functionality page where you can choose to move to different pages in the navbar*/}

import React , {useState } from 'react';
import Link from 'next/link';
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import MenuOverlay from "./MenuOverlay";

{/*Links from the nav bar*/}
const navLinks = [
    {
        title: "About",
        path: "#about",
    },

    {
        title: "Projects",
        path: "#projects",
    },

    {
        title: "Contact",
        path: "#contact",
    },
]

const NavBar = () => {
    //sets nav bar menu to closed 
    const [navBarOpen, setNavBarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
        <div className="flex flew-wrap items-center justify-between mx-auto px-4 py-2">

        {/*A logo at the top left of the page*/}
        <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">LOGO</Link>
        <div className="mobile-menu block md:hidden"> 
            {
                //when the nav bar is not open it will show the hamburger menu icon and when the nav bar is open, it will show an X icon
                !navBarOpen ? (
                    <button onClick={() => setNavBarOpen(true)} className=" flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"><Bars3Icon className="h-5 w-5"/> </button>
                ) : (
                    <button onClick={() => setNavBarOpen(false)} className=" flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"><XMarkIcon className="h-5 w-5"/> </button>
                )
            }
        </div>

        {/*Displays the links at the right of the navigation bar*/}
        <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                {navLinks.map((link, index) => (
                   <li key={index}>
                        <NavLink href={link.path} title={link.title}/>
                    </li>
                ))
                }
                </ul>
            </div>
        </div>
        {navBarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default NavBar