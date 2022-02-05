import React from "react";
import "./Navbar.css";

function Navbar(props) {
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
