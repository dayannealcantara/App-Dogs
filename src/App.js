import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './GlobalStyle.css'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login'


function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes> 
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>    
    </>  
  );
}

export default App;
