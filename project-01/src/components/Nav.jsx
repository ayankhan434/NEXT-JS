"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Nav() {
  const pathname = usePathname();
  return (
    <div className="w-full h-20 bg-white flex justify-between items-center px-5 fixed top-0">
      <div className="text-black font-bold text-2xl">🌍Travel Guide</div>
      <div>
        <ul className="flex justify-center items-center gap-2 text-amber-800">
          <Link href={"/"} className={pathname == "/" ? "text-blue-500" : ""}>
            <li>Home</li>
          </Link>
          <Link
            href={"/destination"}
            className={pathname == "/destination" ? "text-blue-500" : ""}
          >
            <li>Destination</li>
          </Link>
          <Link
            href={"/contact"}
            className={pathname == "/contact" ? "text-blue-500" : ""}
          >
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
