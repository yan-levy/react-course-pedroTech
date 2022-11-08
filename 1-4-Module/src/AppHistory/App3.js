import "./App.css";
import { User } from "./Components/User.js";

function App() {
  const users = [
    { name: "Teemo", age: 7 },
    { name: "Apolo", age: 7 },
    { name: "Clarinha", age: 3 },
  ];
  return (
    <div className="App">
      {users.map((user) => {
        return <User name={user.name} age={user.age} />;
      })}
    </div>
  );
}

export default App;
