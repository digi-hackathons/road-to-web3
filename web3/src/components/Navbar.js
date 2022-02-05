import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { injected } from "../controller/Connectors";
import { useWeb3React } from "@web3-react/core";

function Navbar(props) {


	const { active, account, library, connector, activate, deactivate } = useWeb3React();
	const {active: networkActive,error: networkError,activate: activateNetwork,} = useWeb3React();
	const [loaded, setLoaded] = useState(false);

	async function restoureConnection() {
		injected.isAuthorized().then((isAuthorized) => {
			setLoaded(true);
			if (isAuthorized && !networkActive && !networkError) {
				activateNetwork(injected);
			}
		});
	}
	restoureConnection();

	useEffect(() =>{

	if(props.setWallet != undefined){
		props.setWallet(account)
	}
	
	});


	return (
		<div>
			<div className="navbar">
				<div className="user-bar">
					<div className="avatar">
						<img src="images/face.png" />
					</div>
					<div className="user">
						<div className="name">{props.nickname}</div>
						<div className="wallet">{props.wallet}</div>
					</div>
				</div>

				<div className="logo">
					<span className="purple">Lingo</span>Swap
				</div>
			</div>
		</div>
	);
}

export default Navbar;
