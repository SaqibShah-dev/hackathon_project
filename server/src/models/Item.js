import mongoose from 'mongoose';

// Example resource: rename/replace for your problem statement
const itemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, default: '' },
    status: { type: String, enum: ['todo', 'doing', 'done'], default: 'todo' },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

export const Item = mongoose.model('Item', itemSchema);
