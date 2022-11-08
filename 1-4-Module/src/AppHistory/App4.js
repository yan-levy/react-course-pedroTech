import "./App.css";
import { Planets } from "./Components/Planets.js";

function App() {
  const planetsInfo = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];

  return (
    <div className="App">
      <h1>GAS PLANETS</h1>
      {planetsInfo.map(
        (planet) => planet.isGasPlanet && <Planets name={planet.name} />
      )}

      <h1>NOT GAS PLANET</h1>
      {planetsInfo.map(
        (planet) => !planet.isGasPlanet && <Planets name={planet.name} />
      )}
    </div>
  );
}

export default App;
