"use client"
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';

const NavItem = [
  { label: "Home", URL: "/" },
  { label: "Case Studies", URL: "/case-studies" },
  { label: "Blog", URL: "/blog" },
  { label: "Services", URL: "/services" },
  { label: "Contact", URL: "/contact" },
];

export default function Nav() {
  const [colorChange, setColorChange] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const navbarOpenHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
    return () => {
      window.removeEventListener('scroll', changeNavbarColor);
    };
  }, []);

  return (
    <div className={`fixed w-full ${colorChange ? 'bg-[white] drop-shadow-md transition duration-500' : 'opacity-1'}`}>
      <div className='container'>
        <div className='flex justify-between items-center py-6'>
          <div className='logo'>
            <Link to="/">
              <img src="/images/logo.png" alt="" />
            </Link>
          </div>

          <div
            className={`bg-[white] absolute md:relative top-20 md:right-auto md:top-auto p-5 md:p-0 md:bg-opacity-0 ${
              navbarOpen ? 'right-0 translate-y-0 transition-transform duration-500 drop-shadow-md' : 'right-[-100%] translate-y-full md:translate-y-0'
            }`}
          >
            <ul className='md:flex md:text-[18px] text-[22px] font-work-sans md:space-x-6 md:space-y-0 divide-y divide-dashed space-y-2 divide-[#bebebe] md:divide-none'>
              {NavItem.map((item, index) => (
                <li key={index}>
                  <Link to={item.URL}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='block md:hidden' onClick={navbarOpenHandler}>
            <AiOutlineMenu />
          </div>

          <div className='hidden md:block'>
            <button className='btn-nav'>Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
}
