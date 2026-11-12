import { z } from 'zod';
import { Item } from '../models/Item.js';
import { ApiError } from '../utils/ApiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const itemSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  status: z.enum(['todo', 'doing', 'done']).optional(),
});

export const getItems = asyncHandler(async (req, res) => {
  const items = await Item.find({ owner: req.user._id }).sort('-createdAt');
  res.json({ items });
});

export const createItem = asyncHandler(async (req, res) => {
  const item = await Item.create({ ...req.body, owner: req.user._id });
  res.status(201).json({ item });
});

export const updateItem = asyncHandler(async (req, res) => {
  const item = await Item.findOneAndUpdate({ _id: req.params.id, owner: req.user._id }, req.body, { new: true });
  if (!item) throw new ApiError(404, 'Item not found');
  res.json({ item });
});

export const deleteItem = asyncHandler(async (req, res) => {
  const item = await Item.findOneAndDelete({ _id: req.params.id, owner: req.user._id });
  if (!item) throw new ApiError(404, 'Item not found');
  res.json({ message: 'Deleted' });
});
