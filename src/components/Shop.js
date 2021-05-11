import React from "react";

function Shop({ img, name }) {
  return (
    <div className="shop">
      <img src={img} alt={name} />
    </div>
  );
}

export default Shop;
