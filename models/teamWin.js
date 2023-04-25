import mongoose from "mongoose";
const Schema = mongoose.Schema;

let team = new Schema ({
   name: {type: String},
   wins: {type:Number},
   loses: {type:Number},
   winRatePercentage: {type:Number}
});

export default mongoose.model("wins",team)

