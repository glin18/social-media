import express from "express";
import {
  getFeedPosts,
  getUserPosts,
  likePost,
  deletePosts,
} from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", getUserPosts);
router.patch("/:id/like", verifyToken, likePost);
router.delete("/:id", verifyToken, deletePosts);

export default router;
