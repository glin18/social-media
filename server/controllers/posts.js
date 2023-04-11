import express from "express";
import Post from "../models/Post.js";
import User from "../models/User.js";

const createPost = async (req, res) => {
  try {
    const { userId, location, description, picturePath } = req.body;
    const user = await User.findById(userId);
    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location,
      description,
      picturePath,
      userPicturePath: user.picturePath,
      likes: {},
      comments: [],
    });
    await newPost.save();
    const post = await Post.find();
    res.status(201).json(post);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getFeedPosts = async (req, res) => {};

const getUserPosts = async (req, res) => {};

const likePost = async (req, res) => {};
