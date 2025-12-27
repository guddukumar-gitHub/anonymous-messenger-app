import {z} from 'zod';
import { emailSchemaValidation } from './signUpSchema';
import { passwordSchemaValidation } from './signUpSchema';

export const signInSchemaValidation = z.object({
  email: emailSchemaValidation,
  password: passwordSchemaValidation,
});