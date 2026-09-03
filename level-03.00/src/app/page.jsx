"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  return (
    <div>
      <Link href={"/home"}>
        <li>Home</li>
      </Link>
      <Link href={"/about"}>
        <li>About</li>
      </Link>
      <Link href={"/content"}>
        <li>Content</li>
      </Link>

      <button onClick={() => router.push("/about")}>go to honme section</button>
    </div>
  );
};

export default page;
