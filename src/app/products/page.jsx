import Product from "@/components/Product";
import React from "react";

const productPage = async () => {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();
  return (
    <div>
      <h1>Product :{products.length} </h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default productPage;
