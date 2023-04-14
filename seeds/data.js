import db from "../db/connection.js";
import teamPassing from "../models/teamPassing.js";
import teamWin from "../models/teamWin.js";
import wins from "../db/nflWinData.json" assert { type: "json" };
import passing from "../db/nflPassingData.json" assert { type: "json" };



const insertData = async () => {
  
   await db.dropDatabase();

  await teamWin.insertMany(wins);
  
  await teamPassing.insertMany(passing);

  db.close();
};

insertData();
