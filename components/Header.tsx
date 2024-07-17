import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <section>
      <nav className="flex w-full shadow items-center justify-between p-4 px-8 bg-blue-700 ">
        <div>
          <Link href={"/"}>
            <p className="text-3xl uppercase font-bold text-white">Movieku</p>
          </Link>
        </div>

        <div>
          <Link href={"/favorite"} className="text-3xl">
            ⭐
          </Link>
        </div>
      </nav>
    </section>
  );
};

export default Header;
