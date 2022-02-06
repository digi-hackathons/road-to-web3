import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
function Reward(props) {
	const [wallet, setWallet] = useState();
	const [nickname, setNickname] = useState("Nickname");
	return (
		<div>
			<Navbar
				nickname={props.nickname}
				wallet={props.wallet}
				setWallet={props.setWallet}
			/>
			<div className="block">
				<div>Congratulations! Challenge Accomplished</div>
				<div>
					<img src="images/pencil2.png" /> -2
				</div>
				<div>
					<img src="images/coin.png" /> +1
				</div>
			</div>
            <div>
                <div><img src="images/avatar1.png"></img></div>
                <div>
                    <div>Support Creators</div>
                    <div>Show support for the community with a small contribution.</div>
                    <button>GIVE A TIP</button>
                </div>
            </div>
		</div>
	);
}

export default Reward;
