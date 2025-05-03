import React from "react";
import CitySelector from "./CitySelector";
import MathQuiz from "./MathQuiz";
import Background from "./Background";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around", position: 'relative'}}>
      <CitySelector />
      <MathQuiz />
      <Background/>
    </div>
  );
}

export default App;
