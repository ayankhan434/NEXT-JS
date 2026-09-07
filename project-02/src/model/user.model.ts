import mongoose, { ObjectId } from "mongoose"

 interface Iuser {
    _id?:ObjectId
    name:string,
    image?:string,
    email:string,
    password:string
    createdAt?:Date,
    updatedAt?:Date,
    // that will be function in our schema
 }
 
 const userSchema = new mongoose.Schema<Iuser>({

 name:{
    type:String,
    required:true,
 },

 email:{
    type:String,
    required:true,
    unique:true,
 },

 password:{
    type:String,
    required:true
 },

 image:{
    type:String,

 }
 },{timestamps:true})


