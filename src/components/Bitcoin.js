import React from 'react'
import './BitCoin.css'
import chart1 from '../assets/chart2.png'
import chart2 from '../assets/chart3.png'
import chart3 from '../assets/chart4.png'

const Bitcoin = () => {
  return (
    <div className='bitcoin'>
      <div className='container'>
        <div className='text-bitcoin'>
          <p>Realtime Charts</p>
          <h1>Bitcoin Ecosystem</h1>
          <p>Cryptocurrencies have become established investment commodities, however as with any investment there 
            are risks linked to market movements!</p>
        </div>
        <div className='img-bitcoin'>
          <img src={chart1} alt='chart1'></img>
          <img src={chart2} alt='chart2'></img>
          <img src={chart3} alt='chart3'></img>

        </div>
      </div>
    </div>
  )
}

export default Bitcoin