import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
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
          </div>
          <div className='p-6 xl:flex md:justify-center xl:border-r border-lightgray'>
            <ul>
              <li className='mb-4'>
                <Link to="/market" className=' hover:text-primary'>Market Watch</Link>
              </li>
              <li className='mb-4'>
                <Link to="/contact" className=' hover:text-primary'>Contact Us</Link>
              </li>
              <li className='mb-4'>
                <Link to="/privacyPolicy" className=' hover:text-primary'>Privacy Policy</Link>
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