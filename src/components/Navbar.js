import React from 'react'
import '../styles/navbar.css';

let img = require("../images/trollface.png");
export default function Navabar() {
  return (
    <div className='navbar'>
      <img id="nav-img" src={img} alt="Not Found"></img>
      <p id='heading1'>Meme Generator</p>
      <p id="heading2">Want to make Memes? Lets Go!</p>
    </div>
  )
}