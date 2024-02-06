import "./App.css";
import reactLogo from "./assets/react.svg";
import OpenClosed from "./components/ocp";
import viteLogo from "/vite.svg";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <OpenClosed id={3} name="Amaben">
          <button onClick={() => alert("Clicked")}>Alert </button>
        </OpenClosed>
      </div>
    </>
  );
}

export default App;
