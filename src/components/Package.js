import React from 'react'
import './Packages.css'
import BitcoinImgIcon from"../assets/Bit4.png"
import BitcoinImgIcon5 from"../assets/Bit5.png"

const Package = () => {
  return (
    <div className='package'>
        <div className='container'>
            <div className='text-package'>
            <p>Invest Now! </p>
          <h1>Our Pricing</h1>
          <p>Invest now with us to earn every day and forever in your wallet
            . We accept Investment from all over the world.</p>
            </div>
            <div className='all-package'>
                <div className='item-package'>
                    <img src={BitcoinImgIcon} />
                    <h4>Starter Crypto Plan</h4>
                    <h1>12%</h1>
                    <p>Enjoy your investment with Bitcoin or Ethereum growing every day.</p>
                    <button>Invest Now</button>
                    <p>From $100 to $1000</p>
                </div>
               
                <div className='item-package center-package'>
                    <img src={BitcoinImgIcon5} />
                    <h4>Basic Crypto Plan</h4>
                    <h1>25%</h1>
                    <p>Enjoy your investment with Bitcoin or Ethereum growing every day.</p>
                    <button>Invest Now</button>
                    <p>From $1000 to $10000</p>
                </div>
                <div className='item-package'>
                    <img src={BitcoinImgIcon} />
                    <h4>End Crypto Plan</h4>
                    <h1>18%</h1>
                    <p>Enjoy your investment with Bitcoin or Ethereum growing every day.</p>
                    <button>Invest Now</button>
                    <p>From $10000 to $15000</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Package