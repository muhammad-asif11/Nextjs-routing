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
    <div>
      <h2>About me</h2>
      <Link href="/">Go Back to Home</Link>
    </div>
  );
};

export default AboutUs;
