 import React from 'react'
 import './FrontFace.css'
 import HomeVideo from '../assets/video.mp4'
 import PhotoCryp from '../assets/hero-img.png'

import './BitCoin.css'
 const Frontface = () => {
   return (
     <div className='front-face'>
         <video autoPlay muted  loop id='HomeVideo'>
            <source src={HomeVideo}  type="video/mp4" />
         </video>
         <div className='text-home'>
              <div className='container'>
               <img src={PhotoCryp} /> 
             <h3>Buy crypto at true cost</h3>
             <p>Buy and sell 250+ cryptocurrencies with 20+ fiat currencies using bank transfers or your credit/debit card.Trade with confidence on the world’s fastest 
              and most secure crypto exchange</p>
             <button className='btn-outline'>Use Crypto</button>
             <button className='btn-outline' >Documentation</button>
             <button className='btn-outline'>App</button>

         </div> 
         
         </div>
         
         
     </div>
    
   )
 }
 
 export default Frontface