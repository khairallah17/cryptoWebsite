import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layout'
import buy from '../assets/buy.png'
import handShake from '../assets/handshake.png'
import more from "../assets/more.png"
import AfterTrade from "../assets/afterTrade.png"

const text = [{ text: "Buy", image: buy },
              { text: "sell", image: handShake },
              { text: "after trade", image: AfterTrade },
              { text: "other inquieries", image: more }]

const Contact = () => {
  return (
    <Layout>
      <div className="h-full text-center">
        <h1 className=' font-bold text-3xl my-10'>How can we help?</h1>
        <div className="links flex items-center justify-center gap-12 flex-wrap">
        {
            text.map((data, key) => {
              return (
                  <div key={key}>
                    <Link to={`/contacts/${data.text.toLowerCase().split(' ').join("")}`} className=" flex justify-center items-center rounded-full bg-[#707070] w-36 h-36 px-3 py-3">
                      <img src={data.image} alt="" />
                    </Link>
                    <h2 className='mt-5 text-xl'>{data.text}</h2>
                  </div>
              )
            })
        }
        </div>
      </div>
    </Layout>
  )
}

export default Contact