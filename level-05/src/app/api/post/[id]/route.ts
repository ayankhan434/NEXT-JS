// dynamic routes

import { NextRequest, NextResponse } from "next/server";

interface paramsType{
    params:{
        id:number
    }
}

export async function GET(request:NextRequest,{params}:paramsType){

    const {id} = await params
   const postId = Number(id);
    return NextResponse.json({
        PostId: postId,
        
    })


}