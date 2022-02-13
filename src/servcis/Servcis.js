import React, { Fragment } from 'react'
import './Servcis.css'
import person2 from '../assets/2.jpg'
import person3 from '../assets/3.jpg'
import person4 from '../assets/4.jpg'
import CountDown from './CountDown/CountDown'


const Servcis = () => {
  return (
    <Fragment>

    
    <div className='servcis-all '>
        <div className='container'>
            <div className='team-servcis'>
              <div className='text-team'>
              <p>Our Experts</p>
              <h1>Meet Our Team</h1>
              <p>We are professionals of Cryptocurrency management and strategy planning,
                 we value the experimentation and the smart incentives.</p>
              </div>
              <div className='person-team'>
                <div className='preson'>
                   <img src={person2}></img>
                     <div className='text-amg'>
                        <h3>James Wane</h3>
                     <p>Consultant</p> 
                    </div>
                </div>
                <div className='preson'>
                   <img src={person3}></img>
                     <div className='text-amg'>
                       <h3>John Tommy</h3>
                     <p>Marketing</p>
                       </div>
                </div>
                <div className='preson'>
                   <img src={person4}></img>
                     <div className='text-amg'>
                       <h3>Marko Smith</h3>
                     <p>Cheif Officer</p>
                       </div>
                </div>
              </div>
              
            </div>
        </div>
    </div>
    <CountDown />
    </Fragment>
  )
}

export default Servcis