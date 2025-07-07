import { validationResult } from "express-validator";
export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(401).json({
      success: false,
      message: "Validation failed",
      errors: errors.array(),
    });
  }
  next();
};
