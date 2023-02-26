import React, { useState } from "react";
import "./App.css";

function Square(props) {
  return <div className="square">{props.value}</div>;
}

function SquareGrid(props) {
  const size = props.size;
  const grid = [];

  for (let rows = 0; rows < size; rows++) {
    const row = [];

    for (let col = 0; col < size; col++) {
      const value = rows * size + col;
      row.push(<Square key={value} value={value} />);
    }

    grid.push(
      <div
        key={rows}
        style={{
          display: "flex",
          marginLeft: "20px",
        }}
      >
        {row}
      </div>
    );
  }

  return <div>{grid}</div>;
}

function App() {
  const [size, setSize] = useState(2);

  return (
    <div>
      <input type="text" onChange={(e) => setSize(e.target.value)} />
      <br />
      <br />
      <SquareGrid size={size} />
    </div>
  );
}

export default App;
