import React from "react"

export default function Meme() {
  return (
    <form className="meme">
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
        <button className="submit">Get a new Meme image 🖼</button>
      </div>
    </form>
  )
}