import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <div className="w-full height-20 bg-amber-600 flex justify-between items-center px-[20px">
      <div className="'text-black font-bold text-2xl">🌍 Travel Guide</div>
      <div>
        <ul>
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/destination"}>
            <li>Destination</li>
          </Link>
          <Link href={"/contact"}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
