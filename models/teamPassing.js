import mongoose from "mongoose";
const Schema = mongoose.Schema;

let passing  = new Schema ({
   name: {type:String},
   passYards: {type:String},
   completions: {type:String},
   touchdowns: {type:String}
   });


export default mongoose.model("passings",passing)

