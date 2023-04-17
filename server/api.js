import { Router } from "express";

import logger from "./utils/logger";

const router = Router();

// router.get("/", (_, res) => {
// 	logger.debug("Welcoming everyone...");
// 	res.json({ message: "Hello, world!" });
// });

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "testing my github" });
});
export default router;
