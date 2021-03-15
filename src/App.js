import { useState } from "react";
import "./styles.css";

export default function App() {
  const [darkmode, setDarkmode] = useState(false);
  return (
    <div
      className="App"
      style={{ backgroundColor: darkmode ? "black" : "white" }}
    >
      <h2 style={{ color: darkmode ? "white" : "black" }}>DarkMode testing</h2>

      <h3 style={{ color: darkmode ? "white" : "black" }}>
        This text is for testing if dark mode is active
      </h3>

      <button
        onClick={() => {
          setDarkmode(!darkmode);
        }}
      >
        Toggle Mode
      </button>
    </div>
  );
}
