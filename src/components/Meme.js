import { waitForElementToBeRemoved } from "@testing-library/react";
import React from "react";
import { useState } from "react";

import Data from '../memesData'



export default function Meme() {

    // const [memeImage, memeImageSet] = useState('');
    const [meme, setMeme] = useState({
      topText: '',
      bottomText: '',
      randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    function handleChange(event) {
      const {name, value} = event.target
      setMeme(prevMeme => {
        return {
          ...prevMeme,
          [name]: value
        }
      })
    }

    const [allMemeImages, setAllMemeImages] = useState(Data)
    


      function getMemeImage() {

        const randomNumberInRange = function (max, min) {
           return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        const URL = allMemeImages.data.memes[randomNumberInRange(0, 100)].url;
        
        setMeme(prevMeme => ({
          ...prevMeme,
          randomImage: URL
        }));
      }
    
console.log(meme)
    return (
        <main className="meme--container">
            <div className="form">
               
                <input 
                type="text" 
                className="form--inputs" 
                placeholder="Top text"
                name='topText'
                value={meme.topText}
                onChange={handleChange }
                
                />
                <input 
                type="text" 
                className="form--inputs" 
                placeholder="Bottom text"
                name='bottomText'
                value={meme.bottomText}
                onChange={handleChange}
                 />

                <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
                </div>
                <div className="meme--image--container">
                {meme.randomImage ? <img src={meme.randomImage} alt="meme" className="meme--image"/> : ''}
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2> 
                </div>
        </main>
    )
};





