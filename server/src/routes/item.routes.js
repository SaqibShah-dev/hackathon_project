import { Router } from 'express';
import { getItems, createItem, updateItem, deleteItem, itemSchema } from '../controllers/item.controller.js';
import { validate } from '../middleware/validate.js';
import { protect } from '../middleware/auth.js';

const router = Router();
router.use(protect);
router.route('/').get(getItems).post(validate(itemSchema), createItem);
router.route('/:id').put(validate(itemSchema.partial()), updateItem).delete(deleteItem);
export default router;
