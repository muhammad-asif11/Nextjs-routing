import React from "react";

const ProductDetails = ({ params }: { params: { productId: string } }) => {
  return (
    <div>
      <h2>Details about Product {params.productId} </h2>
    </div>
  );
};

export default ProductDetails;
