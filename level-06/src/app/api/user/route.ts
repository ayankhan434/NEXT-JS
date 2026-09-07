import { NextResponse } from "next/server";


 export async function GET(){
    return NextResponse.json({
        name:"ayan khan",
        age:20
    })
 }