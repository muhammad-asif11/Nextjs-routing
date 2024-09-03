"use client";
import React from "react";
import { notFound } from "next/navigation";

//==== This function is using fo Error =====
function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}
const ProductReviews = ({
  params,
}: {
  params: {
    reviewId: string;
    productId: string;
  };
}) => {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading review");
  }
  // === If review ID increased 1000 then show not-fount page
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <>
      <h2>
        Review {params.reviewId} for Product {params.productId}
      </h2>
    </>
  );
};

export default ProductReviews;
