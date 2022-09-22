// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import AllGun from "./components/AllGun/AllGun";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <Navbar count={count}></Navbar>
      <AllGun increaseCount={increaseCount}></AllGun>
    </div>
  );
}

export default App;
