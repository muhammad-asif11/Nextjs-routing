import Link from "next/link";
import React from "react";

const ProductList = () => {
  const productId = 100;
  return (
    <>
      <Link href="/">Go To Home</Link>
      <h1>Product List</h1>
      <div className="grid text-blue-700">
        <Link href="product/1">Product 1</Link>
        <Link href="product/2">Product 2</Link>
        <Link href="product/3" replace>
          Product 3
        </Link>
        <Link href={`product/${productId}`}>Product {productId} </Link>
      </div>
    </>
  );
};

export default ProductList;
