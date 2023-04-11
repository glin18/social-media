import User from "../models/User.js";

// Read
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// Get User Friends
export const getUserFriends = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
    res.status(200).json(friends);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Add remove friend
export const addRemoveFriend = async (req, res) => {
  try {
    const { id, friendId } = req.params;
    const user = await User.findById(id);
    const friend = await User.findById(friendId);

    if (user.friends.include(friendId)) {
      user.friends = user.friends.filter((id) => id !== friendId);
      friend.friends = friend.friends.filter((id) => id !== user._id);
    } else {
      user.friends.push(friend);
      friend.friends.push(user);
    }
    user.save();
    friend.save();

    res.status(200).json({ user });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
