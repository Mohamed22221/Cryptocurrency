import React from 'react'

const CoinsItem = (props) => {
  return (
    <div className='coin-row'  >
        <p>{props.coins.market_cap_rank}</p>
        <div className='img-sympol'>
            <img src={props.coins.image}></img>
            <p>{props.coins.symbol.toUpperCase()}</p>
        
        </div >
        <p>${props.coins.current_price.toLocaleString()}</p>
        <p>{props.coins.price_change_24h.toFixed(0)}%</p>
        <p className='hide-mopile'>{props.coins.total_volume.toFixed(0)}</p>
        <p className='hide-mopile'>{props.coins.market_cap.toFixed(0)}</p>

    </div>
  )
}

export default CoinsItem