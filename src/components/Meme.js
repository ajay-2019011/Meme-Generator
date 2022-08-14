import React from "react"
import memesData from "../memesData.js"

export default function Meme() {
  function handleClick() {
    const memesArray = memesData.data.memes;
    let len = memesArray.length;
    let r = Math.floor(Math.random() * len);
    let url = memesArray[r].url;
    console.log(url);
  }
  return (
    <div className="meme">
      <div className="input">
        <label for="up">Up:</label>
        <input
          className="box"
          id="up"
          placeholder="Top Text"
          type="text"
        />
        <label for="down">Down:</label>
        <input
          className="box"
          id="down"
          placeholder="Bottom Text"
          type="text"
        />
      </div>  
      <div id="btn">
        <button
          className="submit"
          onClick={handleClick}
        >Get a new Meme image 🖼</button>
      </div>
    </div>
  )
}