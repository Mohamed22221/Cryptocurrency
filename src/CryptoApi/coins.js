import React from 'react'
import './MainCripto.css'
import CoinsItem from './coinsItem'


const Coins = (props) => {
  return (
    <div className='container'>
        <div className='header-coins'>
            <p>#</p>
            <p className='coin-name'>Coin</p>
            <p>Price</p>
            <p>24H</p>
            <p className='hide-mopile'>Valume</p>
            <p className='hide-mopile'>Mkt cap</p>
        </div>

        {props.coins.map((coins )=>{
          return(
<CoinsItem  coins={coins}  key={coins.id}  />
          ) 
        })}
    </div>
  )
}

export default Coins