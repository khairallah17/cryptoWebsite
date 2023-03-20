import React from 'react'
import heroImg from '../../src/assets/hero.png'
import Button from "../components/buttons/Button"

const Hero = () => {
  return (
    <section className='bg-primary bg-opacity-5'>
      <div className="grid md:grid-cols-2 mx-auto container">
        <div className="flex items-center">
          <div className="text-center md:text-start w-full">
            <p className='uppercase text-primary'>BUY YOUR CRYPTO TODAY</p>
            <h1 className="text-6xl font-black leading-normal">
            The World’s <p className=' bg-gradient-to-t from-primary via-yellow to-secondary text-transparent bg-clip-text'>Fastest Growing</p> Crypto Web App
            </h1>
            <p className='mt-4 mb-8'>Buy and sell 200+ cryptocurrencies with 20+ flat currencies using<br />bank transfers or your credit/debit card.</p>
            <div className="flex w-full justify-center md:justify-start">
              <Button>
                Get Started
              </Button>
            </div>
          </div>
        </div>
        <div className="">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero