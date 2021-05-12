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
    <div className="background-wrapper">
      <div className="shopMenu">
        <button className="radioActive" onClick={() => handleFilter()}>
          Radioactive Special Offers!
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
        {(filter
          ? minerals.filter(
              (mineral) =>
                mineral.id === 20 || mineral.id === 17 || mineral.id === 6
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
    </div>
  );
}

export default ShopList;

// .slice(0, 9)
