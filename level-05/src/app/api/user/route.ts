import { NextRequest, NextResponse } from "next/server";

// next request hota hai aur ek next response

//get request
export async function GET(){
  return NextResponse.json({
    name:'ayush',
    age:21
  })
}

// api is createed


//POST request set-up in nExt js 
export async function POST(request:NextRequest){
    let {name , age}= await request.json()

    return NextResponse.json({
        name,age
    })

    
}