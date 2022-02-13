import React, { useState ,useEffect } from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import './CountDown.css'
const CountDown = () => {
    const [days, setDays] = useState(10)
    const [hours, setHours] = useState(10)
    const [minutes, setMinutes] = useState(10)
    const [seconds, setSeconds] = useState(10)
    const [isLoading, setIsLoading] = useState(true)
  
    useEffect(() => {
      const countdown = () => {
        const endDate = new Date("june 25, 2022 00:00:00").getTime()
        const today = new Date().getTime()
  
        const timeDiff = endDate - today
  
        const seconds = 1000
        const minutes = seconds * 60
        const hours = minutes * 60
        const days = hours * 24
  
        let timeDays = Math.floor(timeDiff / days)
        let timeHours = Math.floor((timeDiff % days) / hours)
        let timeMinutes = Math.floor((timeDiff % hours) / minutes)
        let timeSeconds = Math.floor((timeDiff % minutes) / seconds)
  
        timeHours = timeHours < 10 ? "0" + timeHours : timeHours
        timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes
        timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds
  
        setDays(timeDays)
        setHours(timeHours)
        setMinutes(timeMinutes)
        setSeconds(timeSeconds)
        setIsLoading(false)
      }
  
      setInterval(countdown, 1000)
    }, [])
  return (
    <Fragment>
     <div className='container'>
        <div className='main-counter'>
            
            <div className='pranch-counter'>
                <p>{days}</p>
                <h3>Days</h3>
            </div>
            <div className='pranch-counter'>
                <p>{hours}</p>
                <h3>Hours</h3>
            </div>
            <div className='pranch-counter'>
                <p>{minutes}</p>
                <h3>minutes</h3>
            </div>
            <div className='pranch-counter'>
                <p>{seconds}</p>
                <h3>Seconds</h3>
            </div>
        </div>
    </div>
    </Fragment>
   
  )
}

export default CountDown