import Link from "next/link";
import React from "react";
// ======== Static Mata title ========
export const metadata = {
  title: {
    absolute: "About",
  },
  description: "This is about MetaData desription",
};

const AboutUs = () => {
  return (
    <div className="InterceptStyle">
      <h2>About me</h2>
      <Link href="/" className="bg-black rounded-lg text-white p-2">Go Back to Home</Link>
    </div>
  );
};

export default AboutUs;
