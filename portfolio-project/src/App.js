import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Malik McNish</p>
        <h3>
          {" "}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>{" "}
        </h3>
      </header>
    </div>
  );
}

export default App;
