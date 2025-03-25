import "./App.css";
import React from "react";
import MatrixGame from "./components/MatrixGame";

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <MatrixGame />
    </div>
  );
}

export default App;

