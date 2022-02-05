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
            <li><div className="item"><img src="/images/usa.png"/>English</div></li>
            <li><div className="item"><img src="/images/japan.png"/>Japonese</div></li>
            <li><div className="item"><img src="/images/brazil.png"/>Portuguese</div></li>
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
      <div className="start-form">
        <div className="talk">
        <img className="avatar-1" src="/images/avatar1.png"/>
          <div className="baloon">
           <p>Hello. Welcome to LingoSwap!<br></br>Before we start,<br></br>please tell me your name.</p> 
            </div>
          </div>
          
          <div>
        </div>
        <div className="talk">

          <div className="baloon">
            <div className="join">
              <input type="text" placeholder="My name is.."></input>
              <button>START</button>
            </div>
            
          </div>
          <img className="avatar-2" src="/images/avatar2.png"/>
        </div>
      </div>
    </div>
    
   
  </div>;
}

export default Welcome;
