import React from "react";
import StarRating from "./components/StarRating";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="content">
        <h1>How many stars would you give to our code editor?</h1>
        <StarRating />
      </div>
    </div>
  );
}

export default App;
