import "./App.css";
import { useState } from "react";

function App() {
  const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return "#" + n.slice(0, 6);
  };
  const [textColor, setTextColor] = useState(random_hex_color_code());

  return (
    <div className="App">
      <button
        onClick={() => {
          setTextColor(textColor && random_hex_color_code());
        }}
      >
        Change Color
      </button>
      <h1 style={{ color: textColor }}>HI MY NAME IS YAN</h1>
    </div>
  );
}

export default App;
