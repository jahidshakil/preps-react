import { useState } from 'react';
import { Route,BrowserRouter,Routes  } from 'react-router-dom';
import './App.css';
import API from './components/Api/API';
import Cart from './components/cart/Cart';
import Header from './components/header/Header';
import Home from './components/home/Home';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Header/>
      <div className="App">
        
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          
          
        </div>
        </Routes>
      </BrowserRouter>
   
    
  );
}

export default App;
