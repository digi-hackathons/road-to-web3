import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./css/Welcome.css"


function Welcome() {


  const [wallet,setWallet] = useState();
	const [nickname,setNickname] = useState("Nickname")


  return <div>
    <Navbar nickname={nickname} wallet={wallet} setWallet={setWallet}/>
    <div className="welcome">
      <div className="title">Welcome to LingoSwap community</div>
      <div className="text">Please select your language and level from here. </div>
      <div className="selections">
        <div className="select">
          <div className="select-title">
            Choose a language
          </div>
          <ul>
            <li><img src="/images/usa.png"/>English</li>
            <li><img src="/images/japan.png"/>Japonese</li>
            <li><img src="/images/brazil.png"/>Portuguese</li>
          </ul>
        </div>

        <div className="select">
          <div className="select-title">
          Choose a Level
          </div>
          <ul>
            <li>Beginner</li>
            <li>Intermediate</li>
            <li>Advanced</li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <img src="/images/avatar1.png"/>
          <div>Hello. Welcome to LingoSwap!<br></br>Before we start, please tell me your name.</div>
        </div>
        <div>
        <img src="/images/avatar2.png"/>
          <div>
            <input type="text"></input>
            <button>START</button>
          </div>
        </div>
      </div>
    </div>
    
   
  </div>;
}

export default Welcome;
