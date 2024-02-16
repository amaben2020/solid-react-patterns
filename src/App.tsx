import "./App.css";
import reactLogo from "./assets/react.svg";
import DependencyInversion from "./components/dip";
import OpenClosed from "./components/ocp";
import viteLogo from "/vite.svg";

function App() {
  const data = [
    {
      id: 1,
      name: "First",
    },

    {
      id: 2,
      name: "Second",
    },
  ];
  return (
    <>
      <div>
        <a href="https://vitejs.dev" data-testid="vite-link" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Solid Design Patterns</h1>
      <div className="card">
        <OpenClosed id={3} name="Amaben">
          <button onClick={() => alert("Clicked")}>Alert </button>
        </OpenClosed>
      </div>

      <div>
        <DependencyInversion />
      </div>

      <div>
        {data.map((d) => (
          <div data-loop={`loop-id-${d.id}`}>{d.name}</div>
        ))}
      </div>
    </>
  );
}

export default App;
