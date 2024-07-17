import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="p-8 bg-blue-700 flex justify-center">
      <Link href="https://github.com/rogasper" className="text-white">
        Rogasper@2024-Movieku
      </Link>
    </div>
  );
};

export default Footer;
