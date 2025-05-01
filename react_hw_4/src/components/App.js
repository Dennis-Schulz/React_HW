import React from "react";
import CitySelector from "./CitySelector";
import MathQuiz from "./MathQuiz";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <CitySelector />
      <MathQuiz />
    </div>
  );
}

export default App;
