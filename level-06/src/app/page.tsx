import React from "react";

async function Page() {
  /* const response = await fetch("http://localhost:3000/api/user", {
    cache: "no-store",
  });

  const data = await response.json();

  console.log(data); */

  // this was for SSR

  // {SSG}
/* const response = await fetch("http://localhost:3000/api/user",{
  cache:'force-cache'
})
let data = await response.json()
console.log(data) */

//{ISR}

 const response = await fetch("http://localhost:3000/api/user",{
 next:{revalidate:5}
})
let data = await response.json()
console.log(data) 


//{CSR = Client Side Rendering}



  return (
    <div>
    
    </div>
  );
}

export default Page;