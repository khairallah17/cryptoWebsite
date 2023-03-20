import React from 'react'
import SecImg from "../../src/assets/leading-security.png"
import { useSpring, animated } from '@react-spring/web'
import { AiFillCheckCircle } from "react-icons/ai"

const Security = () => {

    const props = useSpring({
        from: {opacity: 1},
        to: {opacity: 0}
    })

  return (
    <section className="container mx-auto py-32">
      <div className="grid md:grid-cols-2 items-center">
        <div>
            <img src={SecImg} alt="" />
        </div>
        <div className="flex justify-center">
          <div className="max-w-xl">
            <h2 className="font-bold text-4xl mb-6 leading-normal">
              Industry-leading security from day one
            </h2>
            <ul className="my-6">
              <li className='mb-6'>
                <span>
                  <AiFillCheckCircle className='text-2xl text-primary inline mr-2' />
                  Safety, security and compliance
                </span>
                <p className="text-gray">
                  Zinopsa is a licensed New York trust company that undergoes regular bank exams and is subject to the cybersecurity audits conducted by the New York Department of Financial Services. Learn more about our commitment to security.
                </p>
              </li>
              <li className='mb-6'>
                <span>
                  <AiFillCheckCircle className='text-2xl text-primary inline mr-2' />
                  Hardware security keys
                </span>
                <p className="text-gray">
                  With Zinopsa you can secure your account with a hardware security key via WebAuthn.
                </p>
              </li>
              <li className='mb-6'>
                <span>
                  <AiFillCheckCircle className='text-2xl text-primary inline mr-2' />
                  SOC Certifications
                </span>
                <p className="text-gray">
                  Zinopsa is SOC 1 Type 2 and SOC 2 Type 2 compliant. We are the world’s first cryptocurrency exchange and custodian to complete these exams.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Security