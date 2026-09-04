import React from "react";
import Image from "next/image";

function page() {
  return (
    <div>
      about page hylww joiii
      <Image
        src={
          "https://i.pinimg.com/474x/91/2e/38/912e38e7f50637f272dbdfe3deb76a96.jpg"
        }
        alt="vercel"
        width={200}
        height={200}
      />
    </div>
  );
}

export default page;
