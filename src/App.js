import logo from './logo.svg';
import './App.css';
import placeholder_image from "./assets/elementor-placeholder-image.webp"

function App() {
  return (
      <>
          <h1 className="web_header">Voting Battle</h1>
          <div className="voting_image_section">
              <img className="voting_image" src={placeholder_image} alt="placeholder-image" />
              <h2 className="vs_text">vs</h2>
              <img className="voting_image" src={placeholder_image} alt="placeholder-image" />
          </div>
    </>
  );
}

export default App;
