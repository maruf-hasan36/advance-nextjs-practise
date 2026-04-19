import React from "react";

const Product = ({ product }) => {
  console.log(product);
  const { name, price, category, stock, description } = product;
  return (
    <div className="card bg-primary text-primary-content w-96">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p>${price}</p>
        <p>{category}</p>
        <p>{stock}</p>
        <div className="card-actions justify-end">
          <button className="btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
