import { Router } from "express";
import { sendMessages } from "../controllers/message.controller.js";

const router = Router();

router.post("/send", sendMessages);




export default router;
