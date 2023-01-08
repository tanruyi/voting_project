/** @format */

import "./App.css";
import Character from "./components/Character";
import { Wallet } from "./Wallet";

function App() {
	return (
		<>
			<Wallet>
			<h1 className="web_header">Voting Battle</h1>
			<div className="voting_image_section">
				<Character />
				<h1 className="vs_text">VS</h1>
				<Character />
			</div>
			</Wallet>
		</>
	);
}

export default App;
