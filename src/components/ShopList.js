import React from "react";
import Shop from "./Shop";
import ShoppingDrone from "./ShoppingDrone";
import { useState } from "react";

function ShopList({ minerals, handleBuy, deleteBuy, buy }) {
  const [filter, setFilter] = useState(false);
  function handleFilter() {
    setFilter(!filter);
  }
  return (
    <>
      <div className="shopMenu">
        <button onClick={() => handleFilter()}>Wedding Stones</button>
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
        {(filter
          ? minerals.filter((mineral) => mineral.name.includes("Aenigmatite"))
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
