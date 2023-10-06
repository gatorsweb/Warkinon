import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { BsTwitter }  from 'react-icons/bs';
import { FiInstagram } from 'react-icons/fi';

export default function Footer() {
  return (
    <div className='bg-[black]'>
      <div className='container'>
        <div className='footer__top__menu flex md:justify-between justify-center items-center py-8'>
          <div className='text-[#BDBEC8] sm:grid sm:grid-cols-2 md:space-x-8 space-x-0 md:grid-flow-row'>
               <Link to={"/"}>About</Link>
               <Link to={"/"}>Pricing plans</Link>
               <Link to={"/"}>Privacy</Link>
               <Link to={"/"}>Contact us</Link>
               <Link to={"/"}>Services</Link>
          </div>
          <div>
            <ul className='text-[white] text-[20px] flex space-x-6'>
              <li className='footerSocialIcon'><Link to={"/"}><FiInstagram /></Link></li>
              <li className='footerSocialIcon'><Link to={"/"}><FaFacebook /></Link></li>
              <li className='footerSocialIcon'><Link to={"/"}><BsTwitter /></Link></li>
            </ul>
          </div>
        </div>
        <div className='grid grid-cols-5 md:grid-flow-row border-t border-[#0B363B] py-16 gap-6'>

            <div className='col-span-5 md:col-span-1'>
                <p className='text-[white] mb-4'>About</p>
                <ul className='text-[#BDBEC8] leading-10 '>
                    <li className='footerNavLink'> <Link to={"/"}>About Sway</Link></li>
                    <li className='footerNavLink'><Link to={"/"}>Plans & Pricing</Link></li>
                    <li className='footerNavLink'><Link to={"/"}>Services</Link></li>
                    <li className='footerNavLink'><Link to={"/"}>Blog</Link></li>
                </ul>
            </div>

            <div className='col-span-5 md:col-span-1'>
                <p className='text-[white] mb-4'>About</p>
                <ul className='text-[#BDBEC8] leading-10 '>
                    <li className='footerNavLink'> <Link to={"/"}>Primary blocks</Link></li>
                    <li className='footerNavLink'> <Link to={"/"}>Content block</Link></li>
                    <li className='footerNavLink'> <Link to={"/"}>Infographic blocks</Link></li>
                    <li className='footerNavLink'> <Link to={"/"}>Business blocks</Link></li>
                    
                </ul>
            </div>

            <div className='col-span-5 md:col-span-1'>
                <p className='text-[white] mb-4'>About</p>
                <ul className='text-[#BDBEC8] leading-10'>
                    <li className='footerNavLink'> <Link to={"/"}>Support center</Link></li>
                    <li className='footerNavLink'> <Link to={"/"}>Documentation</Link></li>
                    <li className='footerNavLink'> <Link to={"/"}>Newsletter</Link></li>
                    <li className='footerNavLink'> <Link to={"/"}>Chanelog</Link></li>
                    
                </ul>
            </div>

            <div className='col-span-5 md:col-span-1'>
                <p className='text-[white] mb-4'>About</p>
                <ul className='text-[#BDBEC8] leading-10'>
                    <li className='footerNavLink'> <Link to={"/"}>Twitter</Link></li>
                    <li className='footerNavLink'> <Link to={"/"}>Dribble</Link></li>
                    <li className='footerNavLink'> <Link to={"/"}>Facebook</Link></li>
                    <li className='footerNavLink'> <Link to={"/"}>Linkedin</Link></li>
                    
                </ul>
            </div>

            <div className='text-right col-span-5 md:col-span-1'>
                <p className='text-[white] mb-4'>Contact</p>
                <p className='text-[#BDBEC8]'>New York. 112 W</p>
                <p className='text-[#BDBEC8]'>34th St, Manhattan</p>
                <p className='text-[#BDBEC8]'>(1) 212-445-4320</p>
            </div>


        </div>
      </div>
      <hr className=" border border-[gray] mb-5"/>
      <div className='container'>
        <div className='md:flex md:justify-between pb-5'>
            <p className='text-[#BDBEC8]'>Sways by keydesign. All Rights Reserved</p>
            <p className='text-[#fff]'> <Link>Terms of Use Privacy Policy</Link> </p>
        </div>
      </div>
    </div>
  );
}
