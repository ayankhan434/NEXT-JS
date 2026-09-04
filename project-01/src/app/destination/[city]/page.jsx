"use client";
import { useParams } from "next/navigation";
import React from "react";

import tokyoImg from "@/assets/tokyo.jpg";

import Image from "next/image";
function page({ params }) {
  const { city } = useParams();
  return (
    <div className="text-white mt-25 w-[50%] h-[80%] ">
      {city} is the beautiful city
      {city == "Tokyo" && (
        <Image src={tokyoImg} width={400} height={400} alt="tokyo img" />
      )}
    </div>
  );
}

export default page;
