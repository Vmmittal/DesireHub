import User from '../models/User.js';
import { createError } from '../utils/error.js';

// Get all users
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({ _id: { $ne: req.user.id } })
      .select('-password')
      .lean();

    // Add isFollowing field
    const usersWithFollowStatus = users.map(user => ({
      ...user,
      isFollowing: req.user.following.includes(user._id)
    }));

    res.json(usersWithFollowStatus);
  } catch (error) {
    next(error);
  }
};

// Get user by ID
export const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
      .select('-password')
      .lean();

    if (!user) {
      return next(createError(404, 'User not found'));
    }

    // Add isFollowing field
    user.isFollowing = req.user.following.includes(user._id);

    res.json(user);
  } catch (error) {
    next(error);
  }
};

// Get current user
export const getCurrentUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id)
      .select('-password');
    res.json(user);
  } catch (error) {
    next(error);
  }
};

// Update user profile
export const updateProfile = async (req, res, next) => {
  try {
    const updates = req.body;
    delete updates.password; // Prevent password update through this route

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { $set: updates },
      { new: true }
    ).select('-password');

    res.json(user);
  } catch (error) {
    next(error);
  }
};

// Follow user
export const followUser = async (req, res, next) => {
  try {
    if (req.user.id === req.params.id) {
      return next(createError(400, 'You cannot follow yourself'));
    }

    const userToFollow = await User.findById(req.params.id);
    if (!userToFollow) {
      return next(createError(404, 'User not found'));
    }

    const currentUser = await User.findById(req.user.id);

    if (currentUser.following.includes(req.params.id)) {
      return next(createError(400, 'You are already following this user'));
    }

    // Add to following and followers
    await Promise.all([
      User.findByIdAndUpdate(req.user.id, {
        $push: { following: req.params.id }
      }),
      User.findByIdAndUpdate(req.params.id, {
        $push: { followers: req.user.id }
      })
    ]);

    res.json({ message: 'User followed successfully' });
  } catch (error) {
    next(error);
  }
};

// Unfollow user
export const unfollowUser = async (req, res, next) => {
  try {
    if (req.user.id === req.params.id) {
      return next(createError(400, 'You cannot unfollow yourself'));
    }

    const userToUnfollow = await User.findById(req.params.id);
    if (!userToUnfollow) {
      return next(createError(404, 'User not found'));
    }

    const currentUser = await User.findById(req.user.id);

    if (!currentUser.following.includes(req.params.id)) {
      return next(createError(400, 'You are not following this user'));
    }

    // Remove from following and followers
    await Promise.all([
      User.findByIdAndUpdate(req.user.id, {
        $pull: { following: req.params.id }
      }),
      User.findByIdAndUpdate(req.params.id, {
        $pull: { followers: req.user.id }
      })
    ]);

    res.json({ message: 'User unfollowed successfully' });
  } catch (error) {
    next(error);
  }
};