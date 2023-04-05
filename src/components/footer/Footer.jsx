import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { AiOutlineArrowRight } from "react-icons/ai"

import logo from '../../../src/assets/Zonipsa-logo.png';
import Button from '../buttons/Button';

export default function Footer() {
  return (
    <footer className='flex flex-col items-center w-full mt-10'>
      <div className="container px-2 border-y border-lightgray py-6">
        <div className="grid lg:grid-cols-3 xl:grid-cols-4">
          <div className="p-6 xl:flex md:justify-between xl:border-r border-lightgray">
            <div className='mb-6'>
              <img src={logo} width={100} alt="" />
            </div>
            <ul>
              <li className='mb-4'>
                <a href="/contact/buy" className=' hover:text-primary'>Buy Crypto</a>
              </li>
              <li className='mb-4'>
                <a href="#cryptoPrices" className=' hover:text-primary'>Exchanges</a>
              </li>
              <li className='mb-4'>
                <a href="/" className=' hover:text-primary'>Watchlist</a>
              </li>
            </ul>
          </div>
          <div className='p-6 xl:flex md:justify-center xl:border-r border-lightgray'>
            <ul>
              <li className='mb-4'>
                <a href="/" className=' hover:text-primary'>Home</a>
              </li>
              <li className='mb-4'>
                <a href="/" className=' hover:text-primary'>Cryprocurrencies</a>
              </li>
              <li className='mb-4'>
                <a href="#security" className=' hover:text-primary'>Security</a>
              </li>
              <li className='mb-4'>
                <a href="#faq" className=' hover:text-primary'>faq</a>
              </li>
            </ul>
          </div>
          <div className='p-6 xl:flex md:justify-center xl:border-r border-lightgray'>
            <ul>
              <li className='mb-4'>
                <a href="/contact" className=' hover:text-primary'>Help Center</a>
              </li>
              <li className='mb-4'>
                <a href="/contact" className=' hover:text-primary'>Contact Us</a>
              </li>
              <li className='mb-4'>
                <a href="/privacyPolicy" className=' hover:text-primary'>Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="p-6 w-full lg:col-span-3 xl:col-auto">
            <span className=''>Newsletter</span>
            <p className=' font-thin'>Never miss anything crypto when you're on the go</p>
            <div className="flex gap-4 my-4">
              <div>
                <input type="email" className="border border-lightgray rounded-xl p-4 outline-none focus:border-primary w-full bg-transparent" placeholder="Enter your email"/>
              </div>
              <div>
                <Button className="!px-5 aspect-square !rounded-md">
                  <BsArrowRight color='white' />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-6">
        <p className="">© Copyright 2023 Zonipsa. All rights reserved</p>
      </div>
    </footer>
  );
}