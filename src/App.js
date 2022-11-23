// import logo from './logo.svg';
import React from 'react';
import './App.css';
import icons8Img from "./img/icons8.png"
import greenMan from "./img/green_man.jpg"



const App = () => {
  return  <div className='app_wrapper'>
    <header className='header'>
       <img className='header__logo' src={icons8Img} alt='' />      
    </header>
    <nav className="nav">
      <ul >
        <li><a>Profile</a></li>
        <li><a>Massages</a></li>
        <li><a>News</a></li>
        <li><a>Music</a></li>
        <li><a>Settings</a></li>                
      </ul>
    </nav>
    <div className='content'>
      <img src={greenMan}></img>
    </div>

    </div>;
}

export default App;
