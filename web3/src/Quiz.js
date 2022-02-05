import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./css/Quiz.css"

function Quiz() {
    const [wallet,setWallet] = useState();
	const [nickname,setNickname] = useState("Nickname")


  return <div className="main">
        <Navbar nickname={nickname} wallet={wallet} setWallet={setWallet}/>
        <div className="quiz">
            <div className="block">
                <div className="name">OBJECT NAME</div>
                <div className="image">
                    <img src="https://media.istockphoto.com/photos/mug-on-plate-filled-with-coffee-surrounded-by-coffee-beans-picture-id157528129?b=1&k=20&m=157528129&s=170667a&w=0&h=8DLweTb1F3_rJFKpHn9ha8aIiQQDAJKdX5y2pR63VsA="/>
                    </div>
                <button>NEXT</button>
            </div>
        </div>
    </div>;
}

export default Quiz;
