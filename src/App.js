import "./App.css";
import Shop from "./components/ShopList";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [minerals, setMinerals] = useState([]);
  const getMinerals = () => {
    axios
      .get(
        "https://random-data-api.com/api/lorem_flickr/random_lorem_flickr?size=30"
      )
      .then((response) => response.data)
      .then((data) => {
        setMinerals(data);
      });
  };

  useEffect(getMinerals, []);

  return (
    <div className="App">
      <Shop minerals={minerals} />
    </div>
  );
}

export default App;
