import React, {useState, useEffect} from 'react'
import CryptoImg from "../../src/assets/crypto-prices.png"
import Button from '../components/buttons/Button'
import axios from 'axios'

const CryptoPrices = () => {

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
  
      }
  
      fetchCrypto()
  
    },[])

  return (
    <section id="cryptoPrices" className="container mx-auto py-48">
        <div className="grid md:grid-cols-2 items-center">
            <div className='px-10 md:text-start text-center'>
                <h2 className='leading-normal text-4xl font-bold mb-6'>Watch crypto Prices.</h2>
                <p className='text-gray mb-6'>Buy now and get 40% extra bonus Minimum pre-sale amount <br />25 Crypto Coin. We accept BTC crypto-currency</p>
            
                <div className="flex gap-4">
                    <input name='amount' placeholder='Amount' type="number"  className="border border-primary bg-transparent rounded-xl p-4 flex items-center outline-none w-full"/>
                    <div className="gap-2 uppercase currency flex w-1/3 border border-primary rounded-2xl items-center px-6">
                        <span>USD</span>
                    </div>
                </div>
                <div className="flex gap-4 my-4">
                    <input name='get' placeholder='Get'  className="border border-primary bg-transparent rounded-xl p-4 flex items-center outline-none w-full"/>
                    <select className="gap-2 uppercase currency flex w-1/3 border border-primary bg-transparent rounded-2xl items-center px-6">
                        {
                            cryptos.map((data, key) => {
                                return (
                                    <option key={key} value="btc" className='gap-2 uppercase currency'>
                                        {data}
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>


                <Button className="w-full text-center">
                    Buy Now
                </Button>
            </div>
            <img src={CryptoImg} alt="" />
        </div>
    </section>
  )
}

export default CryptoPrices