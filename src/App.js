import "./App.css";
import ShopList from "./components/ShopList";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [minerals, setMinerals] = useState([]);
  const getMinerals = () => {
    axios
      .get(
        "https://lit-escarpment-01617.herokuapp.com/https://salty-escarpment-83550.herokuapp.com/api/rocks"
      )
      .then((response) => response.data)
      .then((data) => {
        setMinerals(data);
      });
  };

  useEffect(getMinerals, []);

  return (
    <div className="App">
      <ShopList minerals={minerals} />
    </div>
  );
}

export default App;
