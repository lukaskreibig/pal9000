import React from "react";
import Shop from "./Shop";
import ShoppingDrone from "./ShoppingDrone";
import { useState } from "react";

function ShopList({ minerals, handleBuy, deleteBuy, buy }) {
  const [fancyFilter, setFancyFilter] = useState(false);
  const [funnyFilter, setFunnyFilter] = useState(false);
  const [celebFilter, setCelebFilter] = useState(false);
  const [comFilter, setComFilter] = useState(false);
  const [filtered, setFiltered] = useState([]);

  console.log(filtered);

  function handleFilter(setF, f) {
    setF(!f);
    if (fancyFilter) {
      setFiltered([
        ...minerals.filter(
          (mineral) =>
            mineral.id === 20 || mineral.id === 17 || mineral.id === 6
        ),
      ]);
    } else if (!fancyFilter) {
      setFiltered(
        ...filtered,
        ...minerals.filter(
          (mineral) =>
            mineral.id !== 20 || mineral.id !== 17 || mineral.id !== 6
        )
      );
    } else if (funnyFilter) {
      setFiltered([
        ...filtered,
        minerals.filter(
          (mineral) =>
            mineral.name.length < 7 ||
            (mineral.name.length > 10 && mineral.name.length < 12)
        ),
      ]);
    } else if (!funnyFilter) {
      setFiltered([
        ...filtered,
        minerals.filter(
          (mineral) =>
            !mineral.name.length < 7 ||
            (!mineral.name.length > !10 && !mineral.name.length < 12)
        ),
      ]);
    } else if (comFilter) {
      setFiltered([
        ...filtered,
        minerals.filter(
          (mineral) => !mineral.name.length > 5 && !mineral.name.length < 8
        ),
      ]);
    } else if (!comFilter) {
      setFiltered([
        ...filtered,
        minerals.filter(
          (mineral) => !mineral.name.length > 5 && !mineral.name.length < 8
        ),
      ]);
    } else if (fancyFilter) {
      setFiltered([
        ...filtered,
        minerals.filter(
          (mineral) => !mineral.name.length > 5 && !mineral.name.length < 8
        ),
      ]);
    } else if (!fancyFilter) {
      setFiltered([
        ...filtered,
        minerals.filter(
          (mineral) => !mineral.name.length > 5 && !mineral.name.length < 8
        ),
      ]);
    } else {
      console.log("Error");
    }
  }
  return (
    <div className="background-wrapper">
      <div className="shopMenu">
        <button onClick={() => handleFilter(setFancyFilter, fancyFilter)}>
          Fancy Stones
        </button>
        <button onClick={() => handleFilter(setFunnyFilter, funnyFilter)}>
          Funny Radioactive Stones
        </button>
        <button onClick={() => handleFilter(setCelebFilter, celebFilter)}>
          Celebratory Stones
        </button>
        <button onClick={() => handleFilter(setComFilter, comFilter)}>
          Commemorative Stones
        </button>
        {buy.length
          ? buy.map((mineral) => (
              <ShoppingDrone
                deleteBuy={deleteBuy}
                id={mineral.id}
                key={mineral.id}
                img={mineral.img_url}
                name={mineral.name}
              />
            ))
          : "Nothing in the Shopping Drone yet!"}
      </div>
      <div className="shopContainer">
        {filtered.map((mineral) => (
          <Shop
            handleBuy={handleBuy}
            id={mineral.id}
            key={mineral.id}
            img={mineral.img_url}
            name={mineral.name}
          />
        ))}
      </div>
    </div>
  );
}

export default ShopList;

// .slice(0, 9)
