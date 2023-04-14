import { Router } from "express";
import * as controllers from "../controllers/passing.js";

const router = Router();

router.get("/", controllers.getPasses);
router.get("/:id", controllers.getPass);
router.post("/", controllers.createPass);
router.put("/:id", controllers.updatePass);
router.delete("/:id", controllers.deletePass);

export default router;
