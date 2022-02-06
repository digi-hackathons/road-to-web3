import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./css/Reward.css";

function Reward(props) {
	const [wallet, setWallet] = useState();
	const [nickname, setNickname] = useState("Nickname");
	return (
		<div>
			<Navbar nickname={nickname} wallet={wallet} setWallet={setWallet} />
			<div className="reward">
				<div className="wrapper">
                    <div className="wrapper2">
                    <div className="block">
						<div className="text">
							<span>Congratulations!</span>
							<br></br>Challenge Accomplished
						</div>
						<div className="status-1">
							<img src="images/pencil2.png" /> -2
						</div>
						<div className="status">
							<img src="images/coin.png" /> +1
						</div>
					</div>
					<div className="tip-card">
						<div className="avatar">
							<img src="images/avatar1.png"></img>
						</div>
						<div className="tip-block">
							<div>
								<div className="tip-title">Support Creators</div>
								<div className="tip-desc">
									Show support for the community with a small contribution.
								</div>
							</div>

							<button>GIVE A TIP</button>
						</div>
					</div>
                    </div>
					
				</div>
			</div>
		</div>
	);
}

export default Reward;
