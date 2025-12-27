import {z} from 'zod';

export const verifyCodeSchemaValidation = z
  .string()
  .length(6, "Verification code must be exactly 6 characters long")
  .regex(/^\d+$/, "Verification code must contain only digits");