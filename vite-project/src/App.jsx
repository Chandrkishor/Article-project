import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ResponsiveAppBar from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import { Grid } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ResponsiveAppBar />
      <HomePage />
    </div>
  );
}

export default App;
