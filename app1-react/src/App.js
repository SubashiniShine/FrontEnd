import logo from './logo.svg';
import './App.css';
import FormDetails from "./Components/FormDetails"

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>/
      </header> */}
      <h1>Welcome to React Coding</h1>
      <FormDetails/>
    </div>
  );
}

export default App;
