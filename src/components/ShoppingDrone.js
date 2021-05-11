import React from "react";

function ShoppingDrone({ img, name, deleteBuy, id }) {
  return (
    <div className="shop">
      {name}
      <img src={img} alt={name} width="150px" height="150px" />
      <button onClick={() => deleteBuy(id)}> Delete </button>
    </div>
  );
}

export default ShoppingDrone;
