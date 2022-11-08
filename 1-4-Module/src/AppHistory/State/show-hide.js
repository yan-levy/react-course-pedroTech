import "./App.css";
import { useState } from "react";

function App() {
  const [showText, setShowText] = useState(true);

  return (
    <div className="App">
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        Show/Hide
      </button>
      {showText && <h1>HI MY NAME IS YAN</h1>}
    </div>
  );
}

export default App;
