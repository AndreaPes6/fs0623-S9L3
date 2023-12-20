import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';  
import Footer from './components/Footer';  
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='bg-dark'>
      <NavBar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
