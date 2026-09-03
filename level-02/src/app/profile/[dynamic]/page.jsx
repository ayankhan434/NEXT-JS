import React from "react";

async function page(params) {
  const username = await params.username;
  console.log(username);

  return <div>hiii -{username}</div>;
}

export default page;
