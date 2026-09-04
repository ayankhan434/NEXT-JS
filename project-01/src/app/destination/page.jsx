"use client";
import { useRouter } from "next/navigation";
import React from "react";

function page() {
  const destination = ["Peris", "Tokyo", "NewYork"];
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center text-3xl text-amber-900  h-[80%] gap-5">
      <div className="font-bold text-2xl">Choose Your destination</div>
      <div className="flex flex-col gap-4">
        {destination.map((d, index) => (
          <div
            key={index}
            className="text-white font-bold text-2xl flex items-center justify-center rounded-2xl w-50 h-25 bg-amber-700 gap-3  "
            onClick={() => router.push(`/destination/${d}`)}
          >
            {d}
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
