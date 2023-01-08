/** @format */

import logo from "./logo.svg";
import "./App.css";
import placeholder_image from "./assets/elementor-placeholder-image.webp";
import Character from "./components/Character"

function App() {
	return (
		<>
			<h1 className="web_header">Voting Battle</h1>
			<div className="voting_image_section">
				<Character />
				<h2 className="vs_text">vs</h2>
				<Character />
			</div>
		</>
	);
}

export default App;
