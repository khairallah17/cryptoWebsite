import React from 'react'
import Layout from '../components/layout/index'
import Hero from '../sections/Hero'
import CryptoPrices from "../sections/CryptoPrices"
import Partners from '../sections/Partners'
import Security from '../sections/Security'
import Faq from '../sections/Faq'
import Footer from '../components/footer/Footer'

const Index = () => {
  return (
    <Layout>
        <Hero></Hero>
        <CryptoPrices></CryptoPrices>
    </Layout>
  )
}

export default Index