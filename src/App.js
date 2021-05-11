import "./shop.css";
import "./index.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ShopList from "./components/ShopList";
import axios from "axios";
import { useState, useEffect } from "react";

export default function App() {
  const [minerals, setMinerals] = useState([]);
  const [buy, setBuy] = useState([]);

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

  function handleBuy(value) {
    minerals.find((mineral) =>
      value === mineral.id ? setBuy([...buy, mineral]) : console.log("False")
    );
    console.log(buy);

    function deleteBuy(value) {}

    // setBuy({ ...buy }, mineral)
  }

  return (
    <div className="wrapper">
      <Header />
      <div className="shopWrapper">
        <ShopList
          minerals={minerals}
          handleBuy={handleBuy}
          deleteBuy={deleteBuy}
          buy={buy}
        />
      </div>
      <Footer />
    </div>
  );
}
