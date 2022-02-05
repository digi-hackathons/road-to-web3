import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import React, { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import injectSheet from "react-jss";
import { injected } from "./controller/Connectors";





function App(props) {
	const { active, account, library, connector, activate, deactivate } = useWeb3React();
	const {active: networkActive,error: networkError,activate: activateNetwork,} = useWeb3React();
	const [loaded, setLoaded] = useState(false);
	const [wallet,setWallet] = useState();
	const [nickname,setNickname] = useState("Nickname")


	async function restoureConnection() {
		injected.isAuthorized().then((isAuthorized) => {
			setLoaded(true);
			if (isAuthorized && !networkActive && !networkError) {
				activateNetwork(injected);
			}
		});
	}

	async function connect() {
		try {
			await activate(injected);
			window.location.href="/welcome";
		} catch (ex) {
			console.log(ex);
		}
	}


	restoureConnection();
      useEffect(() =>{

        if(setWallet != undefined){
          setWallet(account)
        }
        
      });

	return (
		<div>
			<Navbar wallet={wallet} nickname={nickname}/>
			<div className="app">
				<div className="title">
					Join <span className="purple">Lingo</span>
					<span className="gray">Swap</span>
				</div>
				<div className="text">
					Hi! Welcome to LingoSwap! <br></br>
					<br></br> LingoSwap is a "Learn2Earn" studying app with inbuilt Game-Fi and
					Social-Fi elements. Please select how to join community.
				</div>
				<div className="cards">
					<Card
						image="images/books.png"
						url=""
						title="Earn by Learning"
						desc="Do you want to learn new language? Let’s start from below."
						button={wallet==undefined ? "CONNECT":"START"}
						click={()=>connect("/welcome")}
					/>
					<Card
						image="images/pencil.png"
						url=""
						title="Earn by Teaching"
						desc="Do you want to help someone learning your language? Please join from below."
						button={wallet==undefined ? "CONNECT":"JOIN"}
						click={()=>connect("/welcome")}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
