import React, {useEffect} from "react"
import '../styles/meme.css';
import memesData from "../memesData.js"

export default function Meme() {
  const [memesArray, setMemesArray] = React.useState(memesData.data.memes);

  //We can use 'async' functions instead of .then as well
  async function getMemes() {
    const res = await fetch("https://api.imgflip.com/get_memes")
    const memesData = await res.json()
    setMemesArray(memesData.data.memes)
    //OR
    // fetch("https://api.imgflip.com/get_memes")
    //   .then(res => res.json())
    //   .then(memesData => setMemesArray(memesData.data.memes))
  }

  useEffect(() => {

    getMemes();
    
  }, [])

  console.log("rendered")
  const len = memesArray.length;
  const [topText, setTopText] = React.useState("Top Text");
  const [bottomText, setBottomText] = React.useState("Bottom Text");

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
  function handleTopText(event) {
    //console.log(event.target.value);
    setTopText(event.target.value);
  }
  function handleBottomText(event) {
    //console.log(event.target.value);
    setBottomText(event.target.value);
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
          onChange={handleTopText}
        />
        <label for="down">Down:</label>
        <input
          className="box"
          id="down"
          placeholder="Bottom Text"
          type="text"
          onChange={handleBottomText}
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
        <h2 className="selected-text top">{topText}</h2>
        <h2 className="selected-text bottom">{bottomText}</h2>
      </div>
    </div>
  )
}