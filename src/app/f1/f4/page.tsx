import Link from "next/link";
import React from "react";


const F_Four = () => {
  return (
    <div className="InterceptStyle">
      <h1>F4 Page</h1>
      <Link href="/f1/f3" className="text-blue-700 underline">
        F3
      </Link>
      <Link href="/about-us" className="text-blue-700 underline">
        About us
      </Link>
    </div>
  );
};

export default F_Four;
