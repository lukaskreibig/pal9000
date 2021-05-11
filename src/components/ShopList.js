import React from "react";
import Shop from "./Shop";
import ShoppingDrone from "./ShoppingDrone";

function ShopList({ minerals, handleBuy, deleteBuy, buy }) {
  console.log(buy);
  return (
    <>
      <div className="shopMenu">
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
        {minerals.map((mineral) => (
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
