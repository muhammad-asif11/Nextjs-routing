"use client";
import React from "react";

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
//   console.log("next.Js Error", error);
  return (
    <div className="flex gap-4 p-2">
      {error.message}
      <button onClick={reset} className="bg-black rounded-lg p-2 text-white">
        Try Again
      </button>
    </div>
  );
};

export default ErrorBoundary;
