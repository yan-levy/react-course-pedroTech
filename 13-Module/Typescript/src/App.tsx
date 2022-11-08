import "./App.css";
import { Person, Country } from "./components/Person";

function App() {
  return (
    <div className="App">
      <Person
        name="Yan"
        email="yan@gmail.com"
        age={21}
        country={Country.Brazil}
        isMarried={true}
        friends={[
          "Robert Glasper",
          "Miles Davis",
          "Dave Brubeck",
          "Jimin Dorothy",
          "Nahre Sol",
          "Jacob Collier",
          "John Batiste",
          "Jesus Molina",
        ]}
      />
    </div>
  );
}

export default App;
