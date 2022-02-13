import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import "./NavBar.css"

function NavBar() {
    const [click, useClick] = useState(false)
    const HandelClick = () => {useClick(!click)}
    const Close= () => {useClick(false)}


    return <nav className='nav-bar'>
        <div className='container'>
        <div className='content-nav '>
            

            
            {/*start links navbar*/}
            <Link to="/Cryptocurrency" className='blue' onClick={Close}>
            Cryptocurrency <i className="fa-brands fa-bitcoin"></i>
            </Link>
                <ul className={click ? 'nav-menue active' : "nav-menue"}>
                
                <li className='nav-items'>
                    <Link to="/Home" onClick={Close}>Home</Link>
                </li>
                <li className='nav-items'>
                    <Link to="/Servce" onClick={Close}>Servce</Link>
                </li>
                <li className='nav-items'>
                    <Link to="/Product" onClick={Close}>Product</Link>
                </li>
                <li className='nav-items'>
                    <Link to="/MainCripto" className='btn'  onClick={Close}>
                    Crypto Api
                    </Link>
                </li>
                </ul>
                     
            {/*end links navbar*/}     
               
          
             {/*start nav-icon'*/}
            <div className='nav-icon' onClick={HandelClick}>
                {click ? <i className= "fa-solid fa-x"></i> :<i className="fa-solid fa-align-justify"></i>}
            </div>
             {/*start nav-icon'*/}
             </div>
        </div>
    </nav>;
}

export default NavBar;
