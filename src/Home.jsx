import react from 'react';
import { useState } from 'react';
import './Home.css';
import Navbar from './components/Navbar.jsx';


function Home() {

  return (
    <div className="Home">
      <Navbar />
      <div className="portion">
        <h2>I Am</h2>
        <h1>Harikrishnan Senthilkumar</h1>
        <h3>Web Developer</h3>
      </div>
      </div>
  );
}


export default Home;