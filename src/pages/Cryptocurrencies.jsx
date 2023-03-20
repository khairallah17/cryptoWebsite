import React, { useEffect, useState } from 'react'
import Layout from "../components/layout/index"
import axios from 'axios'

const Cryptocurrencies = () => {
  
  const [cryptos, setCryptos] = useState([])

  useEffect(() => {

    const fetchCrypto = async () => {

      const result = await axios(({
        method: 'get',
        url: 'https://api.coingecko.com/api/v3/simple/supported_vs_currencies',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }    
      }))
      const data = result.data

      setCryptos(data)

      console.log(data)

    }

    fetchCrypto()

  },[])
  
  return (
    <Layout>
      <div className="container mx-auto">
        <ul>
        {
          cryptos.map((data, key) => {
            return(
              <li key={key}>
                {data}
              </li>
            )   
          })
        }
        </ul>
      </div>
    </Layout>
  )
}

export default Cryptocurrencies