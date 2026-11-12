import { env } from '../config/env.js';

export const notFound = (req, res) =>
  res.status(404).json({ message: `Route not found: ${req.originalUrl}` });

// eslint-disable-next-line no-unused-vars
export const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({
    message: err.message || 'Server error',
    ...(env.nodeEnv === 'development' && { stack: err.stack }),
  });
};
