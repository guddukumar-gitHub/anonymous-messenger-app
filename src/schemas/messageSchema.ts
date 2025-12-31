import { z } from 'zod'
export const messageSchemaValidation = z.object({
  content: z
    .string()
    .min(2, { message: 'Content must be at least 2 characters.' })
    .max(1000, { message: 'Content must not be longer than 1000 characters.' }),
});