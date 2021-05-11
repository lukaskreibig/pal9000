import React from "react";
import Shop from "./Shop";

function ShopList({ minerals, handleBuy }) {
  console.log(minerals);
  return (
    <>
      <div className="shopMenu">ShopMenu</div>
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
