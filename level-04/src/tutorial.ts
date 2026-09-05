// welcome to TypeScript

function ayan (a:number,b:string):number{
 return 4
}
ayan (2,"ayan khan")

/* very sensitive and good language for type safety  */


// type inference

let a=48  /* let a:any --->> for js use */
//a="ayush"  will give error due to its allreday a number 

/* type-alias */
type khan=number|string

let m:khan

m=5
m="ayan"


type status = "succes"| "error"|"pending"

let b:status

b="succes"
b="error"
b="pending"


type user={
    name:string,
    age:number
}

let l:user
l={
    name:"aman",
    age:23
}


type post ={
    description:string,
    image:string,
    likes:number
}


let obj:post={
    description:"frist page",
    image:"/image.png",
    likes:2
}