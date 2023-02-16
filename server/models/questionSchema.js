import mongoose, { Schema } from 'mongoose';

const questionModel = new Schema({
    question: {
        type:Array, 
        default:[]
    },
    answers:{
        type:Array, 
        default:[]
    },
    createdat:{
        type:Date,
        default:Date.now
    }
})

export default mongoose.model("question",questionModel)