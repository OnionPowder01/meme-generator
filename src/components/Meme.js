import React from "react";
import { useState } from "react";
import Data from '../memesData'



export default function Meme() {
    
    function randomNumberInRange(min, max) {
        
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      
    const URL = Data.data.memes[randomNumberInRange(0, 100)].url;

    
    const [isImageActive, setIsImageActive] = useState(false);
        function clickEventHandler() {
            setIsImageActive(true);
        }
    

    return (
        <main className="meme--container">
            <div className="form">
               
                <input type="text" className="form--inputs" placeholder="Top text" />
                <input type="text" className="form--inputs" placeholder="Bottom text" />
                <button className="form--button" onClick={clickEventHandler}>Get a new meme image 🖼</button>
                {isImageActive && <img src={URL} alt="meme" />} 
                </div>
        </main>
    )
};