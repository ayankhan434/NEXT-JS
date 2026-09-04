"use client";
import { useParams } from "next/navigation";
import React from "react";

function page() {
  const { city } = useParams();
  return (
    <div className="text-white mt-25 w-[50%] bg-amber-950">
      {city} is the best city.
    </div>
  );
}

export default page;
