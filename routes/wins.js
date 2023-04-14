import { Router } from "express";
import * as controllers from "../controllers/wins.js";

const router = Router();

router.get("/", controllers.getWins);
router.get("/:id", controllers.getWin);
router.post("/", controllers.createWin);
router.put("/:id", controllers.updateWin);
router.delete("/:id", controllers.deleteWin);

export default router;
