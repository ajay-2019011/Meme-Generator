import React from "react"
import '../styles/meme.css';
import memesData from "../memesData.js"

export default function Meme() {
  const memesArray = memesData.data.memes;
  const len = memesArray.length;

  //Using array destructuring, to take input as an array in LHS
  const [imgUrl, setImgUrl] = React.useState(memesArray[0].url);

  function handleClick() {
    let r = Math.floor(Math.random() * len);
    let url = memesArray[r].url;
    //Changing the state
    setImgUrl(url);
    //If the new state is dependent on the previous one
    //Then we have to use function inside the setter function
    //which takes the old values as parameter
    //Ex. setTrue(prevVal => !prevVal)
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
      <div className="selected">
        <img className="selected-pic" id="memeImg" src={imgUrl} alt="NotFound" />
        <h2 className="selected-text top">One does not simply</h2>
        <h2 className="selected-text bottom">Walk into Mordor</h2>
      </div>
    </div>
  )
}