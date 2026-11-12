import { ApiError } from '../utils/ApiError.js';

// Usage: validate(zodSchema) -> validates req.body
export const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);
  if (!result.success) {
    const msg = result.error.issues.map((i) => i.message).join(', ');
    return next(new ApiError(400, msg));
  }
  req.body = result.data;
  next();
};
