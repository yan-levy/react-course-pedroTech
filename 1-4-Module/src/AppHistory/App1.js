import "./App.css";

function App() {
  return (
    <div className="App">
      <Job salary={14000} position="Senior SDE" company="Amazon" />
      <Job salary={9000} position="Senior SDE" company="Tuti" />
      <Job salary={8000} position="Senior SDE" company="Sidia" />
      <Job salary={7500} position="Senior SDE" company="INDT" />
    </div>
  );
}

// Component
const Job = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  );
};

export default App;
