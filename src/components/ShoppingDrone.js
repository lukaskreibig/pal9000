import React from "react";

function ShoppingDrone({ img, name }) {
  return (
    <div className="shop">
      {name}
      <img src={img} alt={name} width="150px" height="150px" />
      {/* <button onClick={() => handleBuy(id)}> Delete </button> */}
    </div>
  );
}

export default ShoppingDrone;
