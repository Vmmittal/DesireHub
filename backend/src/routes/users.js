import express from 'express';
import { auth } from '../middleware/auth.js';
import {
  getAllUsers,
  getUserById,
  getCurrentUser,
  updateProfile,
  followUser,
  unfollowUser
} from '../controllers/userController.js';

const router = express.Router();

// Protected routes
router.use(auth);

router.get('/', getAllUsers);
router.get('/me', getCurrentUser);
router.get('/:id', getUserById);
router.put('/me', updateProfile);
router.post('/:id/follow', followUser);
router.post('/:id/unfollow', unfollowUser);

export default router;