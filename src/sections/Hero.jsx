import React from 'react'
import heroImg from '../../src/assets/hero.svg'
import Button from "../components/buttons/Button"

const Hero = () => {
  return (
    <section className='bg-primary bg-opacity-5'>
      <div className="grid md:grid-cols-2 mx-auto container">
        <div className="flex items-center">
          <div className="text-center md:text-start w-full">
            <p className='uppercase text-primary'>BUY YOUR CRYPTO TODAY</p>
            <h1 className="text-6xl font-black leading-normal capitalize">
            The fastest way <br /> <span className=' bg-gradient-to-t from-primary via-yellow to-secondary text-transparent bg-clip-text'> to trade</span> in Canada
            </h1>
            <p className='mt-4 mb-8'>Buy and sell cryptocurrencies with Canadian dollars</p>
            <div className="flex w-full justify-center md:justify-start">
              <Button to="/contacts/buy">
                Get Started
              </Button>
            </div>
          </div>
        </div>
        <div className="d-flex justify-end">
          <img src={heroImg} alt="" className=' w-[900px]'/>
        </div>
      </div>
    </section>
  )
}

export default Hero