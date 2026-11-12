import { Router } from "express";
import { Item } from "../models/Item.js";
import { protect } from "../middleware/auth.js";

const router = Router();

router.post("/items", protect, async (req, res) => {
  const samples = [
    {
      title: "Sample item 1",
      description: "This is sample data for the demo.",
      status: "todo"
    },
    {
      title: "Sample item 2",
      description: "This is sample data for the demo.",
      status: "doing"
    },
    {
      title: "Sample item 3",
      description: "This is sample data for the demo.",
      status: "done"
    }
  ];

  const items = await Item.insertMany(
    samples.map((item) => ({
      ...item,
      owner: req.user._id
    }))
  );

  res.status(201).json({ items });
});

export default router;