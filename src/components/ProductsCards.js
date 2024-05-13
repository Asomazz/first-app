import React from "react";

const ProductsCards = ({ name, price, image }) => {
  return (
    <div
      style={{
        border: "2px black solid",
      }}
    >
      <div>
        <h1>{name}</h1>
        <h5>{price}</h5>
      </div>

      <div style={{ height: "200px", width: "180px" }}>
        <img
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
          src={image}
        />
      </div>
    </div>
  );
};

export default ProductsCards;
