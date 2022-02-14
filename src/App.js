

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Bitcoin from './components/Bitcoin';
import Fotter from './components/Fotter';
import Frontface from './components/Frontface';
import NavBar from './components/NavBar';
import Package from './components/Package';
import SmallNav from './components/SmallNav';
import MainCripto from './CryptoApi/MainCripto';
import Servcis from './servcis/Servcis';

function App() {
  return (<div>
    <BrowserRouter>
    
      <NavBar />
      
      <Routes>
        <Route path="/cryptocurrency" element={<Frontface  />} />
         
       
     
      <Route path="/Home" element={<Frontface /> }  />
      <Route index element={<Frontface />}  />
      <Route path="/Servce" element={<Servcis />} />
      <Route path="/Product" />
      <Route path="/MainCripto" element={<MainCripto/>}  />
      
      </Routes>
    </BrowserRouter>
    <Package />
     <Bitcoin />
    <SmallNav />
    <Fotter />
      </div>
      
    
  );
}

export default App;
