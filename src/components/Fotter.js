
import React from 'react'
import './Fotter.css'
import Aos from '../assets/app-store.png' 
import GooglePlay from '../assets/google-play.png' 

const Fotter = () => {
  return (
    <div className='fotter'>
      <div className='container'>
          <div className='aplication'> 
                <div className='aplication-text'>
                  <h4>Multi-Platform Accessible</h4>
                  <p>Accessible by iOS, Android, Windows and Mac platforms</p>
                </div>
                <div className='aplication-img'>
                    <img src={Aos}></img>
                    <img src={GooglePlay}></img>
                </div>
            </div>
            <div className='main-fotter'>
              <div className='list-fotter-one'>
                <h4>
                Crypto <i className="fa-brands fa-bitcoin"></i>
                </h4>
                <p>Exchange Cryptocurrency at the Best Rate by getting 
                  the best offer from all the exchanges at one place.</p>
                 <p>© 2022, With Love by</p> 
              </div>
              <div className='list-fotter'>
                <h4>Company </h4>
                <ul>
                  <li><a href='#'>About Us</a></li>
                  <li><a href='#'>Meet Our Team</a></li>
                  <li><a href='#'>How It Works</a></li>
                  <li><a href='#'>Latest News</a></li>
                  <li><a href='#'>Contact Us</a></li>
                </ul>
              </div>
              <div className='list-fotter'>
                <h4>Support</h4>
                <ul>
                  <li><a href='#'>Exchange Rates</a></li>
                  <li><a href='#'>Supported Currencies</a></li>
                  <li><a href='#'>Asset Introduction</a></li>
                  <li><a href='#'>Latest News</a></li>
                  <li><a href='#'>Help & Wiki</a></li>
                </ul>
              </div>
              <div className='list-fotter'>
                <h4>How To</h4>
                <ul>
                  <li><a href='#'>Buy Bitcoin</a></li>
                  <li><a href='#'>Buy Bitcoin Cash</a></li>
                  <li><a href='#'>Buy Ethereum</a></li>
                  <li><a href='#'>Buy Litecoin</a></li>
                  <li><a href='#'>Status</a></li>
                </ul>
              </div>
            </div>
            <form >
              <input type='text' placeholder='Subscibe our Newsleatter' />
              <i className="fa-solid fa-magnifying-glass"></i>
              <p>Get the latest updates and offers.</p>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-whatsapp"></i>
            </form>
      </div>
  
      
    </div>
  )
}

export default Fotter