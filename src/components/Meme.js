import React from "react";
import { useState } from "react";
import Data from '../memesData'



export default function Meme() {

    const [memeImage, memeImageSet] = useState('');
    


      function getMemeImage() {

        const randomNumberInRange = function (max, min) {
           return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        const URL = Data.data.memes[randomNumberInRange(0, 100)].url;
        
        memeImageSet(URL);
      }
    

    

    return (
        <main className="meme--container">
            <div className="form">
               
                <input type="text" className="form--inputs" placeholder="Top text" />
                <input type="text" className="form--inputs" placeholder="Bottom text" />
                <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
                </div>
                <div className="meme--image--container">
                <img src={memeImage} alt="meme" className="meme--image"/> 
                </div>
        </main>
    )
};