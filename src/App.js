import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';  
import Footer from './components/Footer';  
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div id='contenitoreHome'>
      <NavBar/>
      <Home/>
    </div>
  );
}

export default App;
