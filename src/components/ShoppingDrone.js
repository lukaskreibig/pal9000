import React from "react";

function ShoppingDrone({ img, name, deleteBuy, id }) {
  return (
    <div className="shop-cart">
      {name}
      <img className="bought-rock" src={img} alt={name} width="150px" height="150px" />
      <button className="button" onClick={() => deleteBuy(id)}> Delete </button>
    </div>
  );
}

export default ShoppingDrone;
