import express from "express";
import {
  reviewCode,
  getHistory,
  getReviewById
} from "../controllers/codeController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();


router.post("/review", protect, reviewCode);
router.get("/history", protect, getHistory);
router.get("/:id", getReviewById);




export default router;