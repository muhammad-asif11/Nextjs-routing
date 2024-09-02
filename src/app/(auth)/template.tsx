"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forget-password" },
];
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [Input, setInput] = useState("");
  return (
    <>
      <div className="p-4">
        <input
          value={Input}
          onChange={(e) => setInput(e.target.value)}
          className="border-2"
        />
      </div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            className={isActive ? "font-bold mr-2" : "text-blue-500 mr-2"}
          >
            {link.name}
          </Link>
        );
      })}

      {children}
    </>
  );
}
