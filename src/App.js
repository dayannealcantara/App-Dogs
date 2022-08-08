import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './GlobalStyle.css'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login'
import { UserStroge } from './UserContext';
import User from './Pages/User/User';
import ProtectedRoute from './Components/Helper/ProtectedRoute';


function App() {
  return (
    <>
      <BrowserRouter>
      <UserStroge>
      <Header/>
          <Routes> 
            <Route path='/' element={<Home/>}/>
            <Route path='/login/*' element={<Login/>}/>   
          <Route path='/conta/*' element={<ProtectedRoute><User/></ProtectedRoute>}/>              
          </Routes>
          <Footer/>
      </UserStroge>        
      </BrowserRouter>    
    </>  
  );
}

export default App;
