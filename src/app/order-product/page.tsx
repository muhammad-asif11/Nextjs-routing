"use client";
import { useRouter } from "next/navigation";
import React from "react";

const OrderProduct = () => {
  const router = useRouter();

  const handleClick = () => {
    console.log("Order succesfull");
    // All functions are go back to Home page
    // router.push("/");
    // router.replace("/");
    router.back();
    // router.forward()
  };

  return (
    <div>
      <h1>Order Product</h1>
      <button
        onClick={handleClick}
        className="py-2 px-4 bg-black text-white rounded-lg mx-2"
      >
        Place Order
      </button>
    </div>
  );
};

export default OrderProduct;
