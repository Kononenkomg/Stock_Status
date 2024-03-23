import { z, RefinementCtx } from "zod";

const stringArraySchema = z.string().refine(value => {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) && parsed.every(item => typeof item === 'string');
    } catch {
      return false;
    }
  }, {
    message: "Must be a JSON string representing an array of strings",
  });

export const userSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string(),
    password: z.string(),
    role: z.string(),
    permissions: z.string(),
    disabled: z.number(),
  });

