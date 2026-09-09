//express
// step-1 connectDB function 
// step-2 mongoose.connect ('mongodB url)


// in next.js 
import { connect } from "mongoose"

let mongodbUrl=process.env.MONGODB_URL

if(!mongodbUrl){
    throw new Error("MONGODB_URL not found")
}


let cached=global.mongoose

if(!cached){
cached=global.mongoose={conn:null,promise:null}
}

const connectDb= async()=>{
    if(cached.conn){
        return cached.conn

    }
    if(!cached.promise){
        cached.promise=connect(mongodbUrl).then((c)=>c.connection)
    }
    try{
cached.conn=await cached.promise
    }catch(Error){
throw Error
    }
    return cached.conn


}