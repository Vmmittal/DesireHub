import { body } from 'express-validator';

export const validateRegister = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Invalid email address'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  body('age')
    .isInt({ min: 18 })
    .withMessage('You must be at least 18 years old'),
  body('location').trim().notEmpty().withMessage('Location is required')
];

export const validateLogin = [
  body('email').isEmail().withMessage('Invalid email address'),
  body('password').notEmpty().withMessage('Password is required')
];