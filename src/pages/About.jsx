import React from 'react'
import Layout from '../components/layout'
import AboutUs from '../assets/about.svg'

const About = () => {
  return (
    <Layout>
        <section className='container mx-auto py-10 h-full'>
            <div className="about-content grid md:grid-cols-2 justify-between items-center h-full">
                <div className="main-content md:block flex flex-col md:text-left text-center justify-center items-center">
                    <h1 className='font-bold text-5xl mb-5  bg-gradient-to-t from-primary via-yellow to-secondary text-transparent bg-clip-text'>Who we are</h1>
                    <p className=' leading-8 w-2/3'>Zonipsa is a proudly Canadian-owned exchange registered/Regulated by the Financial Transactions and Reports Analysis Centre of Canada (FINTRAC). this Registration/Regulation helps protect traders like yourself by helping you find the regulated services.
                       <br /> <span className='font-bold'>FINTRAC Registration# :</span>  M22338657</p>
                </div>
                <img src={AboutUs} alt="" className=' w-[800px]'/>
            </div>
            <div className="content flex flex-col w-full items-center justify-center mt-20">
                <h1 className='font-bold text-5xl mb-5  bg-gradient-to-t from-primary via-yellow to-secondary text-transparent bg-clip-text'>Who we are</h1>
                <p className='text-center text-lg w-3/4 leading-8'>Simplicity, along with self-custody, we all heard: 
                    Not Your Keys, Not Your Coins. It's That Simple.
                    Zonipsa has committed to simplifying purchasing and liquidating cryptocurrencies directly against the Canadian dollar. To achieve our mission, we are in the process of developing our automated non-custodial exchange. That means Canadians can trade cryptocurrencies against the Canadian dollar without transferring their coins custody beforehand or leaving their keys with others after purchasing them. Sounds amazing? Wait, there are more; it's instant, and there is no fee.
                    In Zonipsa, we are fighting your battle for you because Simplicity is our mission, belief, and commitment. We won't stop unit that day.</p>
            </div>
        </section>
    </Layout>
  )
}

export default About