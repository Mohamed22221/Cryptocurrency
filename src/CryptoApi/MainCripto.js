import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Coins from './coins'
import NavBarCoin from './NavBarCoin'
import './MainCripto.css'
import { BrowserRouter } from 'react-router-dom'

const MainCripto = () => {
  const url ="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
  const [coins , setCoin] = useState([])
  useEffect(()=>{
    axios.get(url).then((response)=>{
      setCoin(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  },[])
  return (
    <div className='main-crypto'>
       <NavBarCoin /> 
     
       <Coins coins={coins}  />
    </div>
   
        
 
  )
}

export default MainCripto