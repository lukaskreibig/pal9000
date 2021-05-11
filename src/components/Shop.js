import React from "react";

function Shop({ img_url, name }) {
  return (
    <div className="shop">
      <img src={img_url} alt={name} />
    </div>
  );
}

export default Shop;
