import {z} from 'zod';

export const acceptingMessagesSchemaValidation = z.object({
  isAcceptingMessages: z.boolean(),
});
