import React, { useEffect, useState } from 'react'
import Layout from "../components/layout/index"
import axios from 'axios'

const Cryptocurrencies = () => {
  
  const [cryptos, setCryptos] = useState([])
  const [filtredData, setFiltredData] = useState([])

  useEffect(() => {

    const fetchCrypto = async () => {

      const result = await axios(({
        method: 'get',
        url: 'http://localhost:3060/api',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }    
      }))
      const data = result.data

      setCryptos(data)

      setFiltredData(data)
    }

    fetchCrypto()

  },[])
  
  const handleSearch = (search) => {

    // const exData = [...cryptos]
    // const newData = exData.filter((ex) => {
    //   return (
    //     ex.id.startsWith(search.toLowerCase())
    //   )
    // })

    // setFiltredData(newData)

  }

  return (
    <Layout>
      <div className="container mx-auto mt-20 d-flex justify-center w-full">
        <div className="flex justify-center flex-col gap-5">
        <input type="text" name="search" placeholder='Search here...' onChange={(e) => handleSearch(e.target.value)} id="" className=' rounded-lg px-1 py-1 border-[1px] border-primary bg-transparent'/>
        <ul className='flex flex-col gap-5'>
        {
          filtredData.map((data, key) => {
            return(
              <li key={key} className=" bg-gray px-7 py-4 rounded-lg flex w-full justify-between">
                {/* <img src={data.image} alt="" className=' w-6'/> */}
                <span className='capitalize'>{data.name}</span>
                <span>{data.quote.USD.price} USD</span>
              </li>
            )   
          })
        }
        </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Cryptocurrencies