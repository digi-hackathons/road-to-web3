import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Welcome from './Welcome';
import Quiz from './Quiz';
import Reward from './Reward';
import Home from './Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Web3ReactProvider} from "@web3-react/core"
import {Web3Provider} from "@ethersproject/providers";

function getLibrary(provider) {
    const library = new Web3Provider(provider)
    library.pollingInterval = 12000
    return library
}

ReactDOM.render(
    <Web3ReactProvider getLibrary={getLibrary}>
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/welcome" element={<Welcome/>}/>
                <Route exact path="/quiz" element={<Quiz/>}/>
                <Route exact path="/reward" element={<Reward/>}/>
                <Route exact path="/home" element={<Home/>}/>
            </Routes>
        </Router>
    </Web3ReactProvider>,

    document.getElementById("root")
);