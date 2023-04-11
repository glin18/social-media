import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/", verifyToken, getFeedsPosts);
router.get("/:userId/posts", getUserPosts);
router.patch("/:id/like", verifyToken, likePost);
