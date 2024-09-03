import Link from "next/link";
import React from "react";

const FOne = () => {
  return (
    <div className="InterceptStyle">
      <h1>F1 Page</h1>
      <Link href="/f1/f2" className="text-blue-700 underline ">
        F2
      </Link>
    </div>
  );
};

export default FOne;
