import React from "react";
import board from "./components/board-box";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>X's & O's</h1>
        <board />
      </header>
    </div>
  );
}

export default App;
