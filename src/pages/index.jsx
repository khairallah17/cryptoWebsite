import React from 'react'
import Layout from '../components/layout/index'
import Hero from '../sections/Hero'
import CryptoPrices from "../sections/CryptoPrices"

const Index = () => {
  return (
    <Layout>
        <Hero></Hero>
        <CryptoPrices></CryptoPrices>
    </Layout>
  )
}

export default Index