import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
	return (
		<div>
			<Navbar />
      <div className="app">
      <div className="title">Join <span>LingoSwap</span></div>
			<div className="text">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry.
				Lorem Ipsum has been the industry's standard dummy text ever since the
				1500s,
			</div>
			<div className="cards">
				<Card
					image="images/books.png"
					url=""
					title="Earn by Learning"
					desc="Lorem Ipsum is simply asd dummy printing and asasas typesetting industry. asas"
					button="ENTER"
				/>
				<Card
					image="images/pencil.png"
					url=""
					title="Earn by helping"
					desc="Lorem Ipsum is simply asd dummy printing and asasas typesetting industry. asas"
					button="ENTER"
				/>
			</div>
      </div>
			
		</div>
	);
}

export default App;
