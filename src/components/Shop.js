import React from "react";

function Shop({ img, name, handleBuy, id }) {
  return (
    <div className="shop">
      {name}
      <img src={img} alt={name} width="150px" height="150x" />
      <button onClick={() => handleBuy(id)}> I'm buying it </button>
    </div>
  );
}

export default Shop;
