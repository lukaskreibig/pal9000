import React from "react";
import Shop from "./Shop";

function ShopList({ minerals }) {
  console.log(minerals);
  return (
    <div className="shopContainer">
      {minerals.map((mineral) => (
        <Shop id key={mineral.id} img={mineral.img_url} />
      ))}
    </div>
  );
}

export default ShopList;
