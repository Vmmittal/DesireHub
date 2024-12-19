import jwt from 'jsonwebtoken';
import { createError } from '../utils/error.js';
import User from '../models/User.js';

export const auth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    
    if (!token) {
      return next(createError(401, 'Authentication required'));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    
    if (!user) {
      return next(createError(401, 'User not found'));
    }

    req.user = user;
    next();
  } catch (error) {
    next(createError(401, 'Invalid token'));
  }
};