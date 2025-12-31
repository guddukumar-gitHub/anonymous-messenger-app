import {z} from 'zod';
import { emailSchemaValidation, usernameSchemaValidation } from './signUpSchema';
import { passwordSchemaValidation } from './signUpSchema';

export const signInSchemaValidation = z.object({
  identifier: emailSchemaValidation.or(usernameSchemaValidation),
  password: passwordSchemaValidation,
});