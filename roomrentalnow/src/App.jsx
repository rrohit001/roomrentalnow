import { useState } from 'react'
import React from 'react';
import './App.css'
import { Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='firstlogo absolute flex justify-center items-center w-full h-full'>
        <img src="src/assets/logo.png" className="h-[220px]" alt="Logo" />
      </div>
      <nav className="h-[50px] w-full flex justify-between items-center">
        <ul style={{ width: "100%", display: "flex", justifyContent: "flex-end", listStyle: "none", padding: 0, margin: 0 }}>
          <li style={{ letterSpacing: "-2px", marginRight: "50px" }}>
            <Link to="/login">LOG IN</Link>
          </li>
        </ul>
        </nav>
  
      <div className="heading" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img src="src/assets/logo.png" className="logoimg" alt="Logo" />
      </div>
  
      <div className="container2">
        <h1 style={{ color: "rgba(46, 43, 43, 0.881)", textShadow: "rgb(146, 144, 144) 3px 3px 5px", width: "80%", textAlign: "center" }} className='text-[30px]'>
          Your rooms guide!
        </h1>
        <br /><br /><br />
        <h1 style={{ backgroundColor: "rgba(70, 131, 180, 0.902)", boxShadow: "2px 2px 2px rgba(85, 85, 162, 0.82)", paddingLeft: "5px", paddingRight: "5px" }} className="exploreh">
          <Link to="/listings" className='text-[30px]'>EXPLORE</Link>
        </h1>
      </div>
    </>
  );
  
}

export default App