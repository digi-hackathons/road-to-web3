import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./css/Home.css";

function Home() {
	const [wallet, setWallet] = useState();
	const [nickname, setNickname] = useState("Nickname");
	return (
		<div className="homepage">
			<Navbar nickname={nickname} wallet={wallet} setWallet={setWallet} />
			<div className="wrapper">
				<div className="box-1">
					<div className="title">Evolving society with <br></br>decetralized education</div>
					<div className="desc">
						<div className="bar"></div>
						<div className="text">
							We are an education community<br></br>providing Learn2Earn app.
						</div>
					</div>
				</div>
                <div className="box-2">
                <img src="images/welcome.png"/>
            </div>
			</div>
            
		</div>
	);
}

export default Home;
