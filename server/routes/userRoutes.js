import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
  editUser,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// Read
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

router.get("/:id/:friendId", verifyToken, addRemoveFriend);

router.post("/:id/edit", verifyToken, editUser);

export default router;
