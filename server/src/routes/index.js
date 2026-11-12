import { Router } from 'express';
import authRoutes from './auth.routes.js';
import itemRoutes from './item.routes.js';

const router = Router();
router.get('/health', (req, res) => res.json({ status: 'ok' }));
router.use('/auth', authRoutes);
router.use('/items', itemRoutes);
export default router;
