import { connection } from "mongoose";


declare global {
    var mongoose:{
        conn:connection| null,
        promise:promise<coonection| null>

    }
}

export {}