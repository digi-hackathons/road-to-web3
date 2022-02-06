import React, {useState, useEffect} from "react";
import "./Navbar.css";
import {injected} from "../controller/Connectors";
import {useWeb3React} from "@web3-react/core";





function Profile(props){

    if(props.wallet != undefined){
        return <div className="user-bar">
    <div className="avatar">
        <img src="images/face.png"/>
    </div>
    <div className="user">
        <div className="name">{props.nickname}</div>
        <div className="wallet">{props.wallet}</div>
        </div>

    </div>
    }
    else{
        return <div className="connect"><button  onClick={()=>props.connect()}>Connect Wallet</button></div>
    }
    
}


function Navbar(props) {


    const {active, account, library, connector, activate, deactivate} = useWeb3React();
    const {active: networkActive, error: networkError, activate: activateNetwork,} = useWeb3React();
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

    useEffect(() => {

        if (props.setWallet != undefined) {
            props.setWallet(account)
        }

    });

    async function connect(to) {
        try {
            await activate(injected);
        } catch (ex) {
            console.log(ex);
        }
    }
    


    return (
        <div>
            <div className="navbar">
                <div className="left-bar">
                <div className="logo">
                    <span className="purple">LINGO</span>SWAP
                </div>
                    
                    <div className="home">
                        <a href="/">HOME</a>
                    </div>
                </div>
                <div className="learn-box">
                    <div className="title">
                        What would you like to do?
                    </div>
                        <div className="config">
                        <select name="function" id="function">
                        <option value="learn">Learn</option>
                        <option value="teach">Teach</option>
                    </select>
                    <div className="choosen-lang">
                        <img className="lang" src="/images/japan.png"></img>
                        <img className="lang-sort" src="/images/sort.png"></img>
                    </div>      
                    <button className="not-connected">
                        Not connected
                    </button>
                    </div>

                </div>
                <Profile wallet={props.wallet} nickname={props.nickname} connect={connect}/>
                


            </div>
        </div>
    );
}

export default Navbar;
