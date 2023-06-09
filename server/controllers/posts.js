import express from "express";
import Post from "../models/Post.js";
import User from "../models/User.js";

export const createPost = async (req, res) => {
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

export const getFeedPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const post = await Post.find({ userId }).sort({ createdAt: -1 });
    if (post) {
      console.log("found post");
      res.status(200).json(post);
    } else {
      console.log("not found post");
      res.status(200).json({});
    }
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndDelete(id);
    res.status(200).json("Delete Successful");
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const post = await Post.findById(id);
    console.log(post);
    if (post.likes.get(userId)) {
      post.likes.delete(userId);
      console.log("unlike");
    } else {
      post.likes.set(userId, true);
      console.log("like");
      console.log(post.likes);
    }
    console.log(post);
    post.save();
    // const updatedPost = await Post.findByIdAndUpdate(id, { likes: post.likes });

    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
