/** @format */

import "./App.css";
import Character from "./components/Character"

function App() {
	return (
		<>
			<h1 className="web_header">Voting Battle</h1>
			<div className="voting_image_section">
				<Character />
				<h1 className="vs_text">VS</h1>
				<Character />
			</div>
		</>
	);
}

export default App;
