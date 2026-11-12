import jwt from 'jsonwebtoken';
import { z } from 'zod';
import { env } from '../config/env.js';
import { User } from '../models/User.js';
import { ApiError } from '../utils/ApiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const registerSchema = z.object({
  name: z.string().min(2, 'Name is too short'),
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});
export const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(1, 'Password is required'),
});

const signToken = (id) => jwt.sign({ id }, env.jwtSecret, { expiresIn: env.jwtExpiresIn });
const send = (res, user, status = 200) =>
  res.status(status).json({
    token: signToken(user._id),
    user: { id: user._id, name: user.name, email: user.email, role: user.role },
  });

export const register = asyncHandler(async (req, res) => {
  if (await User.findOne({ email: req.body.email })) throw new ApiError(409, 'Email already registered');
  const user = await User.create(req.body);
  send(res, user, 201);
});

export const login = asyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.body.email }).select('+password');
  if (!user || !(await user.matchPassword(req.body.password))) throw new ApiError(401, 'Wrong email or password');
  send(res, user);
});

export const me = asyncHandler(async (req, res) => res.json({ user: req.user }));
