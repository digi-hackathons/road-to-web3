import React from "react";
import "./Navbar.css";

function Navbar() {
	return (
		<div>
			<div className="navbar">
				<div className="user-bar">
					<div className="avatar">
						<img src="images/face.png" />
					</div>
					<div className="user">
						<div className="name">Nickname</div>
						<div className="wallet">0x00000000000...</div>
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
