import React, { useRef } from 'react'
import Layout from '../../components/layout'
import emailjs from '@emailjs/browser';
import { AiOutlinePhone } from "react-icons/ai"
import { BsFillEnvelopeFill } from "react-icons/bs"
import { useEffect } from 'react';

const Buy = () => {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  },[])

  const form = useRef();

  const sendEmail = (e) => {
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Layout>
        <section id="contact" className='h-full'>
          <div className="container mx-auto grid md:grid-cols-2 justify-between items-center p-10 gap-y-10">
            <div className="left-contact border-r border-gray w-full h-full">
              <h1 className='capitalize mb-10 font-bold text-3xl'>Write Us a message here 👇</h1>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3 items-start">
              <input type="text" placeholder='fullName' name="user_name" className='px-2 py-2 bg-transparent border-2 border-gray rounded-md w-4/5 outline-none'/>
              <input type="email" placeholder='Email' name="user_email" className='px-2 py-2 bg-transparent border-2 border-gray rounded-md  w-4/5 outline-none'/>
              <textarea placeholder='Message' rows="6" name="message" className='px-2 py-2 bg-transparent border-2 border-gray rounded-md  w-4/5 outline-none'/>
              <input type="submit" value="Send" className='cursor-pointer rounded-xl px-6 py-2 bg-gradient-to-br hover:bg-gradient-to-r transition-all duration-300 from-primary to-secondary hover:bg-blend-darken mt-5'/>
            </form>
            </div>
            <div className="right-contact h-full w-full md:pl-6 pl-0">
              <h1 className='capitalize mb-5 font-bold text-3xl'>Any More information</h1>
              <p className=' leading-5 mb-5'>Our fantastic team members will help you to add your favorite cryptocurrency to your collection.</p>
              <h1 className='capitalize mb-5 font-bold text-3xl'>Feel free to contact us:</h1>
              <div className='flex gap-3 items-center mb-3'>
                <AiOutlinePhone className='text-2xl'/>
                <span className=' font-semibold'>
                  (888) 885-2323 EXT 2
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <BsFillEnvelopeFill className='text-2xl'/>
                <span className=' font-semibold'>
                  Buy@zonipsa.ca
                </span>
              </div>
            </div>
          </div> 
        </section>
    </Layout>
  )
}

export default Buy