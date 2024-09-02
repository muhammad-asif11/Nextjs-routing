import React from "react";

const ProductDetailsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      {children}
      <h2>Features Products</h2>
    </>
  );
};

export default ProductDetailsLayout;
