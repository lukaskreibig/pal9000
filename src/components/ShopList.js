import React from "react";
import Shop from "./Shop";
import ShoppingDrone from "./ShoppingDrone";
import { useState } from "react";

function ShopList({ minerals, handleBuy, deleteBuy, buy }) {
  const [fancyFilter, setFancyFilter] = useState(false);
  const [funnyFilter, setFunnyFilter] = useState(false);
  const [celebFilter, setCelebFilter] = useState(false);
  const [comFilter, setComFilter] = useState(false);

  function handleFilter(setF, f) {
    setF(!f);
  }
  return (
    <>
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
          : "Nothing in the Shopping Drone"}
      </div>
      <div className="shopContainer">
        {(fancyFilter
          ? minerals.filter((mineral) => mineral.name.length > 12)
          : funnyFilter
          ? minerals.filter(
              (mineral) =>
                mineral.id === 20 || mineral.id === 17 || mineral.id === 6
            )
          : celebFilter
          ? minerals.filter(
              (mineral) =>
                mineral.name.length < 7 ||
                (mineral.name.length > 10 && mineral.name.length < 12)
            )
          : comFilter
          ? minerals.filter(
              (mineral) => mineral.name.length > 5 && mineral.name.length < 8
            )
          : minerals
        ).map((mineral) => (
          <Shop
            handleBuy={handleBuy}
            id={mineral.id}
            key={mineral.id}
            img={mineral.img_url}
            name={mineral.name}
          />
        ))}
      </div>
    </>
  );
}

export default ShopList;

// .slice(0, 9)
