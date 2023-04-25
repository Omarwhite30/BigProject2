import { Router } from "express";
 import passingRoutes from "./passing.js";
 import winsRoutes from "./wins.js";


const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/passes", passingRoutes);
router.use("/wins", winsRoutes);

export default router;
