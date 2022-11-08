import "./App.css";

function App() {
  const age = 17;
  const isGreen = true;

  return (
    <div className="App">
      {age >= 18 ? <h1> Over Age</h1> : <h1> Under Age</h1>}
      <h1
        style={{ color: isGreen ? "green" : "red", backgroundColor: "#121212" }}
      >
        This has color
      </h1>

      {isGreen && <button>This is a button</button>}
    </div>
  );
}

export default App;
