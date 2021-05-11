import React from "react";
import Shop from "./Shop";

function ShopList({ minerals }) {
  console.log(minerals);
  return (
    <div className="shopContainer">
      {minerals.map((mineral) => (
        <Shop key={mineral.id} />
      ))}
    </div>
  );
}

export default ShopList;
